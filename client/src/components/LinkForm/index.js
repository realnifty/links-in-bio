

const LinkForm = () => {

  return (
    <div className="bg-white rounded-3xl py-6 shadow-sm">
      <form>
        <input className="font-bold outline-none" type="text" placeholder="Title"/>
        <input type="text" placeholder="URL:"/>
      </form>
    </div>
  )
}

export default LinkForm