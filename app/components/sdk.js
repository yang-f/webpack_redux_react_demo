import {
    JSEncrypt
} from 'jsencrypt';
import $ from 'jquery';
import WebStorage from 'react-webstorage';

let SDK = new function() {
    this.api = function(url, data, onSuccess, onError) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        
        var params = '';
        $.each(data,function(key,value){
            params += key;
            params += '="';
            params += value;
            params += '"&';
        });

        var xhr = $.ajax({
            'data': params,
            'headers': headers,
            'type': 'POST',
            'crossDomain': true,
            'url': 'http://xxxxxxx' + url,
            success: function(data) {
                if (typeof(onSuccess) != 'undefined') {
                    var result = JSON.parse(xhr.responseText);
                    onSuccess(result);
                }
            },
            error: function(data) {
                if (typeof(onError) != 'undefined') {
                    var result = JSON.parse(xhr.responseText);
                    onError(result);
                }
            }

        });
    };


    this.addCookie = function(objName, objValue, objHours) {
        var str = objName + "=" + escape(objValue);
        if (objHours > 0) {
            var date = new Date();
            var ms = objHours * 3600 * 1000;
            date.setTime(date.getTime() + ms);
            str += "; expires=" + date.toGMTString() + '; path=/; domain=xxxxxxx.net';

        }
        document.cookie = str;
    };

    this.delCookie = function(name) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=a; expires=" + date.toGMTString() + ";domain=xxxxxxx.net;path=/";
    };

    this.getCookie = function(objName) {
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName) return unescape(temp[1]);
        }
    };

    this.webStorage = new WebStorage(window.sessionStorage);

    this.get_user_info = function(force) {
        var arg = arguments[0] ? arguments[0] : false;
        if (this.webStorage.getItem('user') == '' || this.webStorage.getItem('user') == null || arg) {
            this.api('/users/get_user_info', {}, function(result) {
                this.webStorage.setItem('user', JSON.stringify(result));
            }.bind(this), function(error) {
                this.webStorage.setItem('user', '');
            }.bind(this));
        };

    };

    var key = ''
    var rsa = new JSEncrypt();
    rsa.setPublicKey(key);
    this.rsa = rsa;

    this.logout = function() {
        try {
            if (this.getCookie('xxxxxxx')) {
                this.delCookie('xxxxxxx');
            }
            this.webStorage.clear();
        } catch (e) {}
        this.get_user_info(true);
    };

    this.accurateTo = function(arg1, arg2) {
        return Math.round(arg1 * Math.pow(10, arg2)) / Math.pow(10, arg2);
    };

};

export default SDK;