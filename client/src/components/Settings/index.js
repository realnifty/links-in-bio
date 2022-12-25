import Auth from '../../utils/auth';

const Settings = () => {
  return (
    <div className="p-4 font-lib">
      <h1 className="font-extrabold text-xl">Account</h1>
      <div className="ml-3 mb-4 text-md flex flex-col">
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-person mr-2"></i></span>My account</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-cash mr-2"></i></span>Billing</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-gear mr-2"></i></span>Cookie preferences</button>
        <button className="my-1 py-3 active-tab w-full text-start" onClick={Auth.logout}><span><i className="bi bi-box-arrow-in-left mr-2"></i></span>Log out</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-person-x-fill mr-2"></i></span>Delete account</button>
      </div>
      <h1 className="font-extrabold text-xl">Support</h1>
      <div className="ml-3 mb-4 text-md flex flex-col items-start">
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-envelope mr-2"></i></span>Contact</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-info-circle mr-2"></i></span>Help topics</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-chat-heart mr-2"></i></span>Submit feedback</button>
        <button className="my-1 py-3 active-tab w-full text-start" onClick={Auth.logout}><span><i className="bi bi-question-circle mr-2"></i></span>FAQs</button>
        <button className="my-1 py-3 active-tab w-full text-start"><span><i className="bi bi-file-lock mr-2"></i></span>Privacy Notice</button>
      </div>
    </div >
  )
}

export default Settings