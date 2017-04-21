import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
import Route2 from '../components/route2.js'
import * as Actions from '../actions/action'

function mapStateToprops(state) {
    return {
        addItemPanelClass: state.addItemPanelClass,
        itemDetailPanelClass: state.itemDetailPanelClass,
        itemName: state.itemName,
        itemDescription: state.itemDescription,
        itemDetail: state.itemDetail
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToprops, mapDispatchToProps)(Route2)