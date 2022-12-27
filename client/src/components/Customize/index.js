import defaultPFP from '../../images/default_pfp.png'

const Customize = () => {
  return (
		<>
			<div className='p-4 font-lib'>
				<h1 className='font-extrabold text-xl'>Profile</h1>
				<div className="flex flex-col bg-white rounded-xl">
					<div className='flex items-center justify-between pt-6 px-6'>
            <img className='h-28' src={defaultPFP} alt='default profile picture' />
            <div className='flex flex-col font-bold'>
              <button className='bg-indigo-400 px-3 py-2 rounded-full mb-3 text-white'>Upload image</button>
						  <button className='bg-gray-300 px-3 py-2 rounded-full'>Remove image</button>
            </div>						
					</div>
          <div className='p-6'>
            <p className='text-sm'>Display name</p>
            <input className='bg-gray-200 w-full rounded-xl px-2 py-2 mb-4 outline-1' type='text' placeholder={`@username`} />
            <p className='text-sm'>Bio</p>
						<textarea className='bg-gray-200 w-full rounded-xl px-2 py-4 outline-1' name='' id=''></textarea>
					</div>
				</div>
			</div>
		</>
	);
}

export default Customize