import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard</p>
      <button className='bg-black text-white' onClick={Auth.logout}>Logout</button>
    </div>
  );
}

export default Dashboard;