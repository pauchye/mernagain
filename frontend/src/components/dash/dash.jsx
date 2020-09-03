import React from 'react'
import { withRouter } from 'react-router-dom'
import Dream from './dream'
import DreamForm from './dream_form_container'

class Dash extends React.Component {
    constructor(props) {
      super(props);
  
      // this.state = {
      //   dreams: props.dreams
      // }
    }
  
    componentDidMount() {
      this.props.fetchDreams().then((res) => {
          debugger
        this.setState({ dreams: res.dreams })
      });
    }
  
    render() {
        debugger
      if (this.props.dreams.length === 0) {
        return (<div>There are no Dreams
            <DreamForm/>
        </div>)
      } else {
        return (
          <div>
            <h2>All Dreams</h2>
            {this.props.dreams.map((dream, idx)=> (
              <Dream key={idx} dream={dream} deleteDream={this.props.deleteDream} />
            ))}
            <DreamForm/>
          </div>
        );
      }
    }
}
  
  export default withRouter(Dash);