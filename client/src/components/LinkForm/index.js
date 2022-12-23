const LinkForm = (props) => {

  const {linkFormVisible, toggleLinkForm} = props

	return (
    <div className={`bg-white rounded-3xl p-6 shadow-sm flex flex-col ${linkFormVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="flex justify-between">
        <h1 className="font-bold">New link</h1>
        <button onClick={toggleLinkForm}><i className="bi bi-x-lg text-xl"></i></button>       
      </div>
			<form className=''>
				<input
					className='font-bold outline-none'
					type='text'
					placeholder='Title:'
				/>
				<input className="outline-none" type='text' placeholder='url:' />
			</form>
			<div className='flex justify-between'>
        <div className="text-xl text-gray-400">
          <button><i className='bi bi-image pr-3'></i></button>
          {/* <button><i className='bi bi-trash3'></i></button> */}
				</div>
				<button className="font-lib text-white text-md py-1 px-3 bg-indigo-400 rounded-full">Save</button>
			</div>
		</div>
	);
};

export default LinkForm;
