import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Close button */}
        <IoClose 
          className="text-3xl m-4 cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <ul className="flex flex-col gap-4 p-4 text-lg">

          <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={()=>setOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={()=>setOpen(false)}>Services</Link></li>
          <li><Link to="/portfolio" onClick={()=>setOpen(false)}>Portfolio</Link></li>
          <li><Link to="/blog" onClick={()=>setOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>

        </ul>
      </div>
      

      {/* Background overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;