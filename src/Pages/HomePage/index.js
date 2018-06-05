import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter, Link } from 'react-router-dom';
import LandlordPage from '../LandlordPage';
import TenantPage from '../TenantPage';
import ChooseDashboardPage from '../ChooseDashboardPage';
import { logIn } from '../../apiCalls';

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
        logIn(this.state.username, this.state.password)
            .then(result => {
                console.log(result);
                const {roles, token} = result;
                // TODO: store the session token
                this.props.history.push(roles.length > 1 ? 'choose-dashboard' : roles[0]);
            })
        
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
                <input onChange = {this.onChange} 
                    type='password'
                    name='password'
                    value={this.state.password}
                />
                
                <input type='submit' value='Sign In'></input>
            </form>
            
            <Link to = '/landlord'> Link to '/landlord' </Link>
            <Link to = '/tenant'> Link to '/tenant' </Link>
            
            <Route path = '/landlord' component={LandlordPage}/>
            <Route path = '/tenant' component={TenantPage}/>
            <Route path = '/choose-dashboard' component={ChooseDashboardPage}/>
        </div>
        )
    }
}

export default withRouter(HomePage);
