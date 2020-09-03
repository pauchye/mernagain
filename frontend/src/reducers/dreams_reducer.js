import { RECEIVE_DREAMS, RECEIVE_THIS_DREAM, REMOVE_DREAM } from '../actions/dream_actions'

const DreamsReducer = (state=[], action) => {
    debugger
    Object.freeze(state)
    let newState = Array.from(state);
    switch(action.type) {
        case RECEIVE_DREAMS:
            debugger
            // return Object.assign({}, state, action.dreams );
            return action.dreams;
        case RECEIVE_THIS_DREAM:
            debugger

            return newState.concat(action.dream)

        case REMOVE_DREAM:            
            debugger
            return newState.filter(obj => obj._id !== action.dreamId);
        default:
            return state;
    }
}

export default DreamsReducer;