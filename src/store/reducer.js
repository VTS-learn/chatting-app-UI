export const SSS_PPP_FFF_reduce = (state = '' , action) =>{

    if(action.type === "test"){
        return action.payload
    }

    return state
}