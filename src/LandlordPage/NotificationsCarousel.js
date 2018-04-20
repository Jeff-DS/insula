import React from 'react';
import IssueCard from 'Issue'

class NotificationsCarousel extends React.Component {
    
    constructor(props) {
        super(props);
    }
     
    render() {
        
        return (
            <div>
                {this.props.issues.map(issue => <IssueCard issue={issue} />)}
            </div>
        )
    }
}

export default NotificationsCarousel;