import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const [open, setOpen] = useState(false);


  const navLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Skills", path: "/skills"},
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"},
  ];


  return (

    <header className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-6
      pt-4
    ">

      <nav className="
        max-w-7xl
        mx-auto
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-2xl
        shadow-lg
        px-6
        py-4
        flex
        justify-between
        items-center
      ">


        {/* Logo */}

        <Link to="/">

          <h1 className="
            text-3xl
            font-extrabold
            bg-gradient-to-r
            from-blue-500
            to-blue-700
            bg-clip-text
            text-transparent
          ">
            Sean.dev
          </h1>

        </Link>



        {/* Desktop Navigation */}

        <ul className="
          hidden
          md:flex
          items-center
          gap-8
        ">


          {navLinks.map((link)=>(
            
            <li key={link.name}>

              <NavLink
                to={link.path}

                className={({isActive}) => 
                  `
                  transition-all
                  duration-300
                  text-sm
                  font-medium
                  ${
                    isActive
                     ? "text-blue-600"
                     : "text-gray-600 hover:text-gray-900"
                  }

                  hover:-translate-y-1
                  `
                }
              >

                {link.name}

              </NavLink>

            </li>

          ))}


        </ul>




        {/* Mobile Button */}

        <button

          onClick={()=>setOpen(!open)}

          className="
            md:hidden
            text-gray-700
            text-3xl
          "
        >

          ☰

        </button>



      </nav>




      {/* Mobile Menu */}

      {
        open && (

          <div className="
            md:hidden
            mt-3
            bg-white/90
            backdrop-blur-xl
            border
            border-gray-200
            rounded-2xl
            p-6
          ">


            <ul className="
              flex
              flex-col
              gap-5
            ">


            {navLinks.map((link)=>(

              <li key={link.name}>

                <Link
                  to={link.path}

                  onClick={()=>setOpen(false)}

                  className="
                    text-gray-700
                    hover:text-gray-900
                    transition
                  "
                >

                  {link.name}

                </Link>


              </li>

            ))}


            </ul>


          </div>

        )
      }


    </header>

  );

}


export default Navbar;