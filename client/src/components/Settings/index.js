import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

  const navigate = useNavigate();

  return (
    <div className="p-4 font-sora appear">
      <h1 className="mb-4 font-extrabold text-xl mb-4">Account</h1>
      <div className="text-md flex flex-col bg-white rounded-xl shadow-md divide-y-2">
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-person mr-2"></i></span>My account</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-cash mr-2"></i></span>Billing</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-gear mr-2"></i></span>Cookie preferences</button>
        <button className="py-4 w-full text-start" onClick={Auth.logout}><span><i className="ml-4 bi bi-box-arrow-in-left mr-2"></i></span>Log out</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-person-x-fill mr-2"></i></span>Delete account</button>
      </div>
      <h1 className="my-4 font-extrabold text-xl">Support</h1>
      <div className="text-md flex flex-col items-start bg-white rounded-xl shadow-md divide-y-2">
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-envelope mr-2"></i></span>Contact</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-info-circle mr-2"></i></span>Help topics</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-chat-heart mr-2"></i></span>Submit feedback</button>
        <button className="py-4 w-full text-start" onClick={Auth.logout}><span><i className="ml-4 bi bi-question-circle mr-2"></i></span>FAQs</button>
        <button className="py-4 w-full text-start" onClick={() => {navigate('/privacy')}}><span><i className="ml-4 bi bi-file-lock mr-2"></i></span>Privacy Notice</button>
      </div>
    </div >
  )
}

export default Settings