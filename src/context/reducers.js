import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state, showAlert: true, alertType: 'danger', alertText: 'please provide all values'}
    }
    else if(action.type === CLEAR_ALERT){
        return {...state, showAlert: false}
    }
    throw new Error (`no such action : ${action.type}`)
}

export default reducer