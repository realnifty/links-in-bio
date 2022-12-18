import logo from '../images/link.png'

const Home = () => {
  return (
    <>
      <div className='ActionBar flex justify-between p-4 items-center bg-white rounded-full'>
        <div className='flex items-center'>
          <img className='h-8' src={logo} alt='linkify logo'></img>
          <h1 className='font-unbounded text-xl'>Linkify</h1>
        </div>
        <div className='font-unbounded'>
          <button className='pr-4'>Log in</button>
          <button className='bg-indigo-800 text-white p-2 rounded-full'>Get started</button>
        </div>
      </div>
      <section className='pt-20 text-indigo-100'>
        <h1 className='font-unbounded font-extrabold text-4xl pb-5'>Reach a new level of engagement. All your links in one.</h1>
        <p className='font-lib font-bold '>
          Organize all of your social media and other important links in one place with Linkify.
          Create a custom link to share with anyone.
        </p>
      </section>
    </>
  )
}

export default Home