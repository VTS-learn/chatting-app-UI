export const specefic_reply = (arrg) => (dispatch) =>{
    return dispatch({
        'type': 'reply', 
        'payload': arrg
    })
}

export const responsive_ui = (arrg) => (dispatch) =>{
    return dispatch({
        'type': 'under_1400', 
        'payload': arrg
    })
}

export const responsive_ui_userList = (arrg) => (dispatch) =>{
    return dispatch({
        'type': 'userList_under_720', 
        'payload': arrg
    })
}

export const responsive_ui_chatArea = (arrg) => (dispatch) =>{
    return dispatch({
        'type': 'chatArea_under_720', 
        'payload': arrg
    })
}