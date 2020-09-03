import React from 'react';

class DreamForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            dreamer: props.currentUser.id,
            newDream: props.newDream
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(input){
        return (e) => {
            this.setState({[input]: e.currentTarget.value})
            
        }
    }

    handleSubmit(e){

        // e.preventDefault();
        
        let inputObject = Object.assign({}, this.state); 
        debugger 
        this.props.createDream(inputObject)
        this.setState({title: "",
        description: ""})
        // window.location.reload()
            // .then(res => {location.hash = '/workouts'})  
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                    <button type='submit'> Submit </button>
                </form >
            </div>
        )
    }


}

export default DreamForm