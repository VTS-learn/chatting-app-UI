export const specefic_reply_reduce = (state = '' , action) =>{

    if(action.type === "reply"){
        return action.payload
    }

    return state
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

export const responsive_ui = (state = viewportWidth <= 1400 ? false : true , action) =>{
    switch (action.type){
        case 'under_1400' : {
            return action.payload
        }
        default: return state
    }
}

export const responsive_ui_userList = (state = true , action) =>{
    switch (action.type){
        case 'userList_under_720' : {
            return action.payload
        }
        default: return state
    }
}

export const responsive_ui_chatArea = (state = viewportWidth <= 720 ? false : true , action) =>{
    switch (action.type){
        case 'chatArea_under_720' : {
            return action.payload
        }
        default: return state
    }
}