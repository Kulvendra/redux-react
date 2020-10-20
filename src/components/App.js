import React from 'react';
import { connect } from 'react-redux';
import { setName, setAge } from '../actions/userActions';
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
    setName:(name)=>{dispatch(setName(name))},
    setAge:(age)=>{dispatch(setAge(age))}
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
