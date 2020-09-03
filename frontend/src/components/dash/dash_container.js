import { connect } from 'react-redux'
import { fetchDreams, deleteDream } from '../../actions/dream_actions'
import Dash from './dash'

const mstp = (state) => {
    debugger
    return {  
        dreams: state.dreams
        // dreams: Object.values(state.dreams)
    }
}

const mdtp = dispatch => {
    return {
        fetchDreams: () => dispatch(fetchDreams()),
        deleteDream: (dream) => dispatch(deleteDream(dream))
    }
}

export default connect(mstp, mdtp)(Dash)