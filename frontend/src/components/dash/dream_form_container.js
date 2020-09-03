import { connect } from 'react-redux';
import { createDream } from '../../actions/dream_actions';
import DreamForm from './dream_form'

const mstp = (state) => {
    // debugger
    return {
        currentUser: state.session.user,
        newDream: {dream: {
            title: "",
            description: "",
            dreamer: state.session.user.id}}
    }
}

const mdtp = dispatch => {
    // debugger
    return {
        createDream: dream => dispatch(createDream(dream))
    }
}

export default connect(mstp, mdtp)(DreamForm)