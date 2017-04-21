import SDK from "./../components/sdk.js";

export const CHANGE_CLASS_ADD_ITEM = 'CHANGE_CLASS_ADD_ITEM'
export const CHANGE_CLASS_ITEM_DETAIL = 'CHANGE_CLASS_ITEM_DETAIL'
export const CHANGE_ITEM_NAME = 'CHANGE_ITEM_NAME'
export const CHANGE_ITEM_DESCRIPTION = 'CHANGE_ITEM_DESCRIPTION'
export const CHANGE_ITEM_DETAIL = 'CHANGE_ITEM_DETAIL'

export function changeAddItemPanelClass(className) {
    return dispatch => {
        dispatch({
            type: CHANGE_CLASS_ADD_ITEM,
            className
        })
    }
}

export function changeItemDetailPanelClass(className) {
    return dispatch => {
        dispatch({
            type: CHANGE_CLASS_ITEM_DETAIL,
            className
        })
        dispatch(fetchPlayerList());
    }
}

export function changeItemDetail(itemDetail) {
    return dispatch => {
        dispatch({
            type: CHANGE_ITEM_DETAIL,
            itemDetail
        })
    }
}

export function changeItemName(itemName) {
    return dispatch => {
        dispatch({
            type: CHANGE_ITEM_NAME,
            itemName
        })
    }
}

export function changeItemDescription(itemDescription) {
    return dispatch => {
        dispatch({
            type: CHANGE_ITEM_DESCRIPTION,
            itemDescription
        })
    }
}