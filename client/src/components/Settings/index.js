import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { DELETE_ME } from '../../utils/mutations';

const Settings = () => {

  const [showWarning, setShowWarning] = useState(false);

  const navigate = useNavigate();

  const [deleteAccount] = useMutation(DELETE_ME)

  const toggleWarning = () => {
    setShowWarning(!showWarning);
  }

  const handleClick = () => {
    window.open('mailto:your@email.com');
  }

  const handleDelete = async () => {
    try {
      await deleteAccount();
      Auth.logout();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="p-4 font-sora appear md:w-2/3 md:mx-auto xl:w-1/3 xl:mx-auto">
      <h1 className="mb-4 font-extrabold text-xl mb-4">Account</h1>
      <div className="text-md flex flex-col bg-white rounded-xl shadow-md divide-y-2">
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-person mr-2"></i></span>My account</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-cash mr-2"></i></span>Billing</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-gear mr-2"></i></span>Cookie preferences</button>
        <button className="py-4 w-full text-start" onClick={Auth.logout}><span><i className="ml-4 bi bi-box-arrow-in-left mr-2"></i></span>Log out</button>
        <button className="py-4 w-full text-start" onClick={toggleWarning}><span><i className="ml-4 bi bi-person-x-fill mr-2"></i></span>Delete account</button>
        {showWarning && (
									<div className='p-4 bg-white rounded-xl appear-below'>
										<p className='text-base mt-1 mb-2 text-red-600'>
											Are you sure you want to delete your account?
										</p>
										<button
											onClick={() => {
												setShowWarning(false);
                        handleDelete();
											}}
										>
											<i className='bi bi-check-circle mr-4 text-green-600 text-xl'></i>
										</button>
										<button
											onClick={() => {
												setShowWarning(false);
											}}
										>
											<i className='bi bi-x-circle text-red-600 text-xl'></i>
										</button>
									</div>
								)}
      </div>
      <h1 className="my-4 font-extrabold text-xl">Support</h1>
      <div className="text-md flex flex-col items-start bg-white rounded-xl shadow-md divide-y-2">
        <button className="py-4 w-full text-start" onClick={handleClick} href='mailto:lovecore@pm.me'><span><i className="ml-4 bi bi-envelope mr-2"></i></span>Contact</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-info-circle mr-2"></i></span>Help topics</button>
        <button className="py-4 w-full text-start"><span><i className="ml-4 bi bi-chat-heart mr-2"></i></span>Submit feedback</button>
        <button className="py-4 w-full text-start" onClick={() => {navigate('/terms')}}><span><i className="ml-4 bi bi-journal-text mr-2"></i></span>Terms of Service</button>
        <button className="py-4 w-full text-start" onClick={() => {navigate('/privacy')}}><span><i className="ml-4 bi bi-file-lock mr-2"></i></span>Privacy Notice</button>
      </div>
    </div >
  )
}

export default Settings