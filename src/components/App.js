import React from 'react';
import { connect } from 'react-redux';
import Main from './Main'
import User from './User'

class App extends React.Component {
  


  render() {
      return (
          <div className="container">
              <Main changeUsername={() => this.props.setName("Madhu")}/>
              <User username={this.props.user.name}/>
          </div>
      );
  }
}

const mapStateToProps=(state)=>{
  return{
    user:state.userReducer,
    math:state.mathReducer
  };
};


const mapDispatchToProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type:"SET_NAME",
        payload:name
      })},
    
      setAge:(age)=>{
        dispatch({
          type:"SET_AGE",
          payload:age
        })
      }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);