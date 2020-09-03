import { getDreams, getThisDream, changeDream, makeDream, removeDream } from '../util/dreams_api_util'

export const RECEIVE_DREAMS = "RECEIVE_DREAMS";
export const REMOVE_DREAM = "REMOVE_DREAM";
export const RECEIVE_THIS_DREAM = "RECEIVE_THIS_DREAM";
// export const ADD_LIKE = "ADD_LIKE";

export const receiveDreams = dreams => {
    debugger
    return {
        type: RECEIVE_DREAMS,
        dreams
}}

export const receiveThisDream = dream => {
    debugger
    return {
        type: RECEIVE_THIS_DREAM,
        dream
}}

export const delDream = dreamId => {
    debugger
    return {
        type: REMOVE_DREAM,
        dreamId
    }
}

// export const updateLike = artwork => ({
//     type: ADD_LIKE,
//     artwork
// })

export const fetchDreams = () => dispatch => {
    debugger
    return getDreams().then(dreams => {
        debugger
        return dispatch(receiveDreams(dreams.data))
    }).catch(err => console.log(err))
};

export const fetchThisDream = (id) => dispatch => {
    return getThisDream(id).then(dream => {
        return dispatch(receiveThisDream(dream))
    }).catch(err => console.log(err))
};

export const updateDream = (dream) => dispatch => {
    return changeDream(dream).then(dream => {
        return dispatch(receiveThisDream(dream))
    }).catch(err => console.log(err))
};

export const createDream = data => dispatch => {
    debugger
    return makeDream(data)
    .then(dream => {
        debugger
        return dispatch(receiveThisDream(dream.data))})
    .catch(err => console.log(err))
}

export const deleteDream = (dream) => dispatch => {
    let thisId = dream._id;
    debugger
    return removeDream(dream)
    .then(() => {
        return dispatch(delDream(thisId))
    })
}