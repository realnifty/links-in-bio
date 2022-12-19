import { Navigate } from 'react-router-dom';

import Auth from '../utils/auth';

const Dashboard = () => {

  if (!Auth.loggedIn()) {
    return <Navigate to='/login' />;
  }

  console.log(Auth.loggedIn())

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard</p>
      <button className='bg-black text-white' onClick={Auth.logout}>Logout</button>
    </div>
  );
}

export default Dashboard;