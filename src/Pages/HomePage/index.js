import React, { Component } from 'react';
import { BrowserRouter as Route, Switch, withRouter } from 'react-router-dom';
import LandlordPage from './LandlordPage';
import TenantPage from './TenantPage';
import ChooseDashboardPage from './ChooseDashboardPage';

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: ""
        }
        
        this.submitToServer = this.submitToServer.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    submitToServer(e) {
        // make AJAX call submitting the form
        // server should tell us whether to go to
        // tenant page, landlord page, or choosing page
        
        // fetch 
        
        e.preventDefault();
        
        console.log('hi');
    }
    
    onChange(e) { this.setState({[e.target.name]: e.target.value}) }
    
    render() {
        return (
        <div>
            <form onSubmit={this.submitToServer}>
                <input onChange = {this.onChange} 
                    type="text" 
                    name="username"
                    value={this.state.username}
                />
                <input 
                    type="password" 
                    name="password"
                    value={this.state.password}
                />
                
                <input type="submit" value="Sign In"></input>
            </form>
            
            <Route path = "/landlord" component={LandlordPage}/>
            <Route path = "/tenant" component={TenantPage}/>
            <Route path = "/choose-dashboard" component={ChooseDashboardPage}/>
        </div>
        )
    }
}
