import React from 'react';
import NavBar from '../../reused/NavBar'

class TenantPage extends React.Component {
    
    constructor(props) {
        super(props);
    }
     
    render() {
        return (
            <div>
            
                <NavBar username="userdude123"/>
                
                <div> { /*TODO: ^ check drawing to see if these are right*/ }
                    <button className="MakePayment">Make Payment</button>
                    <iconButton src="" text="Set up autopay" />
                    <iconButton src="" text="Add a payment method" />
                    <iconButton src="" text="Open payment settings" />
                </div>
                
                <div>
                    <button className="NewIssue">New Issue</button>
                    <iconButton src="" text="" />
                    <iconButton src="" text="" />
                    <iconButton src="" text="" />
                </div>
            
            </div>
        )
    }
}

export default TenantPage;
