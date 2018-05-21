import React from 'react-js';
import { BrowserRouter as withRouter } from 'react-router-dom';

const ChooseDashboardPage = ( {history: {push}} ) => (
  <div id="ChooseDashboard">
    <h1>Welcome to Insula</h1>
    <button onClick={push('/LandlordPage')}>Landlord Dashboard</button>
    <button onClick={push('/TenantPage')}>Tenant Dashboard</button>
  </div>
)

export default withRouter(ChooseDashboardPage);
