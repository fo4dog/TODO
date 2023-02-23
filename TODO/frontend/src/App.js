import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import Navbar from './components/Menu.js';
import Footer from './components/Footer.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users':[]
        }
    }
  componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/user/').then(response =>{
        this.setState(
        {
             'users':response.data
        }
    )}).catch(error => console.log(error))



  }
  render() {
    return (

    <div>
        <header>
            <Navbar/>
        </header>
        <UserList users={this.state.users}/>
        <Footer/>
    </div>

    );
  }
}

export default App;
