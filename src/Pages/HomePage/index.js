import React, { Component } from 'react';
import { BrowserRouter as Route, Switch, withRouter } from 'react-router-dom';
import LandlordPage from './LandlordPage';
import TenantPage from './TenantPage';
import ChooseDashboardPage from './ChooseDashboardPage';
import { logIn } from './apiCalls';

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: ''
        };
        
        this.submitToServer = this.submitToServer.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    submitToServer(e) {
        e.preventDefault();
        const {roles, token} = logIn(this.state.username, this.state.password);
        // TODO: store the session token
        this.history.push(roles.length > 1 ? 'choose-dashboard' : roles[0]);
        
    }
    
    onChange(e) { this.setState({[e.target.name]: e.target.value}) }
    
    render() {
        return (
        <div>
            <form onSubmit={this.submitToServer}>
                <input onChange = {this.onChange} 
                    type='text'
                    name='username'
                    value={this.state.username}
                />
                <input 
                    type='password'
                    name='password'
                    value={this.state.password}
                />
                
                <input type='submit' value='Sign In'></input>
            </form>
            
            <Route path = '/landlord' component={LandlordPage}/>
            <Route path = '/tenant' component={TenantPage}/>
            <Route path = '/choose-dashboard' component={ChooseDashboardPage}/>
        </div>
        )
    }
}
