const Footer = () => {

  const list = [
    {id:"1", text:"About", nav:""},
    {id:"2", text:"Contact", nav:""},
    {id:"3", text:"FAQs", nav:""},
    {id:"4", text:"ToS", nav:""},
    {id:"5", text:"Cookies", nav:""}
  ]

  return (
    <footer className="pt-5">
        <ul className="flex justify-center text-indigo-800 text-sm font-unbounded">
          {list.map((item) => (
            <li className="px-2" key={item.id}>{item.text}</li>
          ))}
        </ul>
    </footer>
  );
}

export default Footer;