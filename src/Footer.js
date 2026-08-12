import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaReact
} from "react-icons/fa";


function Footer() {


  return (

    <footer className="
      bg-gradient-to-br
      from-slate-950
      via-gray-900
      to-black
      text-gray-400
      border-t
      border-white/10
      px-6
      py-10
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">



        {/* Connect Section */}

        <div className="
          flex
          flex-col
          items-center
          justify-center
          text-center
        ">


          <h2 className="
            text-2xl
            font-bold
            text-white
            mb-5
          ">

            Connect With Me

          </h2>





          <div className="
            flex
            gap-5
          ">



            <a
              href="https://www.linkedin.com/in/sean-biningu-960b233aa"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-blue-600
                hover:text-white
                transition
                duration-300
              "
            >

              <FaGithub />

            </a>





            <a
              href="#"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-blue-600
                hover:text-white
                transition
                duration-300
              "
            >

              <FaLinkedin />

            </a>





            <a
              href="mailto:your@email.com"
              className="
                w-12
                h-12
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-xl
                hover:bg-blue-600
                hover:text-white
                transition
                duration-300
              "
            >

              <FaEnvelope />

            </a>



          </div>



        </div>







        {/* Bottom Copyright */}


        <div className="
          mt-8
          pt-6
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-sm
        ">


          <p>

            © {new Date().getFullYear()} Sean Biningu.
            All rights reserved.

          </p>





          <p className="
            flex
            items-center
            gap-2
          ">

            Built with

            <FaReact 
              className="
                text-blue-400
              "
            />

            React & Tailwind CSS

          </p>



        </div>



      </div>


    </footer>


  );

}


export default Footer;
