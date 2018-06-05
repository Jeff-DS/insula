import React, { Component } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

const ChooseDashboardPage = withRouter(( {history: {push}} ) => (
  <div id="ChooseDashboard">
    <h1>Welcome to Insula</h1>
    <button onClick={push('/LandlordPage')}>Landlord Dashboard</button>
    <button onClick={push('/TenantPage')}>Tenant Dashboard</button>
  </div>
));


// export default withRouter(ChooseDashboardPage);

export default ChooseDashboardPage;
