import {
    combineReducers
} from "redux"
import {
    CHANGE_CLASS_ADD_ITEM,
    CHANGE_CLASS_ITEM_DETAIL,
    CHANGE_ITEM_NAME,
    CHANGE_ITEM_DESCRIPTION,
    CHANGE_ITEM_DETAIL
} from '../actions/action'

function addItemPanelClass(state = 'off', action) {
    switch (action.type) {
        case CHANGE_CLASS_ADD_ITEM:
            return action.className;
        default:
            return state;
    }
}

function itemDetailPanelClass(state = 'off', action) {
    switch (action.type) {
        case CHANGE_CLASS_ITEM_DETAIL:
            return action.className;
        default:
            return state;
    }
}

function itemName(state = '', action) {
    switch (action.type) {
        case CHANGE_ITEM_NAME:
            return action.itemName;
        default:
            return state;
    }
}

function itemDetail(state = {}, action) {
    switch (action.type) {
        case CHANGE_ITEM_DETAIL:
            return action.itemDetail;
        default:
            return state;
    }
}

function itemDescription(state = '', action) {
    switch (action.type) {
        case CHANGE_ITEM_DESCRIPTION:
            return action.itemDescription;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    addItemPanelClass,
    itemDetailPanelClass,
    itemName,
    itemDetail,
    itemDescription
})
export default rootReducer;