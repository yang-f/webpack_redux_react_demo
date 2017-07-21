import {
    render
} from "react-dom"
import React from "react"
import Nav from './nav.js'
import Pic from './pic.js';
import $ from 'jquery';

let Lives = React.createClass({
    componentDidMount: function() {
    },
    getInitialState: function() {
        const {
            changeAddItemPanelClass,
            changeItemDetailPanelClass,
            changeItemName,
            changeItemDescription,
            changeItemDetail
        } = this.props;
        return {
            changeAddItemPanelClass,
            changeItemDetailPanelClass,
            changeItemName,
            changeItemDescription,
            changeItemDetail
        };
    },
    childContextTypes: {
        changeItemDetailPanelClass: React.PropTypes.any,
        itemDetail: React.PropTypes.any
    },
    getChildContext: function() {
        const {
            changeItemDetailPanelClass,
            itemDetail
        } = this.props;
        return {
            changeItemDetailPanelClass,
            itemDetail
        };
    },
    showAddItemPanel: function() {
        this.state.changeItemName('');
        this.state.changeItemDescription('');
        this.state.changeAddItemPanelClass('on');
    },
    hideAddItemPanel: function() {
        this.state.changeAddItemPanelClass('off');
    },
    changeItemName: function(e) {
        this.state.changeItemName(e.target.value);
    },
    changeItemDescription: function(e) {
        this.state.changeItemDescription(e.target.value);
    },
    render() {

        const {
            addItemPanelClass,
            itemDetailPanelClass,
            itemName,
            itemDescription
        } = this.props;

        var index = index;
        var addPanel = "add_item_modal " + addItemPanelClass;
        var LiveDetailPanel = "creat_item_box " + itemDetailPanelClass;
        return (
            <div>
                <div className="add_item_container">
                    <ul>
                        <li>
                             <div className="add_item" onClick={this.showAddItemPanel}><Pic imageURL={require('../images/add_item.png')} /></div>
                        </li>
                    </ul>
                    <div className={ addPanel }>
                        <div className="modal_box">
                            <div className="modal_content">
                                <div className="top">创建</div>
                                <div className="name"><span>名称：</span><input type="text" value={itemName} id="item_name" onChange={this.changeItemName}/></div>
                                <div className="name"><span>描述：</span><textarea id="item_describe" value ={itemDescription} name='item_description' onChange={this.changeItemDescription}></textarea></div>
                                <div className="bottom">
                                    <button type="button" onClick={this.addItem} >确定</button>
                                    <button type="button" onClick={this.hideAddItemPanel}>取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Lives;