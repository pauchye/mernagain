import React from 'react';

class Dream extends React.Component {
    constructor(props){
        super(props)
        this.deleteDream = this.deleteDream.bind(this)
    }

    deleteDream() {
        debugger
        this.props.deleteDream(this.props.dream)  
        // window.location.reload()
    }

    render() {
        debugger
        return(
            <div>
                <h4>{this.props.dream.title}</h4>
                <div onClick={this.deleteDream}>Delete</div>  
            </div>
        )
    }
}

export default Dream;