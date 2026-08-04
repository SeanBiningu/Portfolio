import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Home() {

  return (

    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-gray-50
        to-gray-50
        text-gray-900
        flex
        items-center
        px-6
        pt-20
        overflow-hidden
        relative
      "
    >


      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-blue-300
          rounded-full
          blur-3xl
          opacity-30
        "
      ></div>


      <div
        className="
          absolute
          bottom-20
          right-20
          w-72
          h-72
          bg-blue-200
          rounded-full
          blur-3xl
          opacity-25
        "
      ></div>








      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
          items-center
          relative
          z-10
        "
      >




        {/* LEFT SIDE */}

        <div>


          <p
            className="
              text-blue-600
              text-lg
              font-medium
              mb-4
            "
          >

            Hello, I'm

          </p>




          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
            "
          >

            Sean

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                to-blue-800
                bg-clip-text
                text-transparent
                pb-1
              "
            >

              Biningu

            </span>

          </h1>




          <h2
            className="
              mt-6
              text-2xl
              md:text-3xl
              text-gray-500
              font-semibold
            "
          >

            Full-Stack Developer
            &amp; Engineer Student

          </h2>




          <p
            className="
              mt-6
              text-gray-500
              max-w-xl
              leading-relaxed
              text-lg
            "
          >

            I build modern and responsive web applications
            using React, JavaScript, Tailwind CSS and
            backend technologies.

            Currently developing my skills at
            <span className="text-blue-600 font-semibold">
              {" "}Uncommon.org.
            </span>

          </p>




          {/* BUTTONS */}


          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >



            <Link
              to="/projects"
              className="
                px-7
                py-3
                rounded-full
                bg-blue-500
                hover:bg-blue-600
                hover:scale-105
                transition
                duration-300
                font-semibold
                shadow-lg
                text-white
              "
            >

              View Projects

            </Link>




            <a
              href="/Sean_Biningu_CV.pdf"
              download
              className="
                px-7
                py-3
                rounded-full
                border
                border-gray-300
                hover:bg-gray-100
                hover:scale-105
                transition
                duration-300
                font-semibold
                text-gray-700
              "
            >

              Download CV

            </a>



          </div>




          {/* SOCIAL ICONS */}


          <div
            className="
              mt-8
              flex
              gap-6
            "
          >


            <a
              href="https://github.com/SeanBiningu"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-500
                hover:text-blue-500
                hover:scale-125
                transition
              "
            >

              <FaGithub size={30}/>

            </a>




            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-500
                hover:text-blue-600
                hover:scale-125
                transition
              "
            >

              <FaLinkedin size={30}/>

            </a>




            <a
              href="mailto:your-email@example.com"
              className="
                text-gray-500
                hover:text-blue-500
                hover:scale-125
                transition
              "
            >

              <FaEnvelope size={30}/>

            </a>


          </div>



        </div>




        {/* RIGHT SIDE - COMPUTER ANIMATION */}




        <div
          className="
            flex
            justify-center
            items-center
          "
        >




          <div
            className="
              relative
            "
          >




            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                bg-blue-300
                blur-3xl
                opacity-20
                rounded-full
              "
            ></div>




            {/* Laptop Screen */}


            <div
              className="
                relative
                w-[350px]
                h-[230px]
                bg-gray-200
                rounded-xl
                border
                border-gray-200
                shadow-2xl
                p-4
                animate-bounce
              "
              style={{
                animationDuration:"4s"
              }}
            >



              <div
                className="
                  w-full
                  h-full
                  bg-gray-50
                  rounded-lg
                  border
                  border-gray-200
                  p-5
                  overflow-hidden
                "
              >



                <div
                  className="
                    space-y-3
                    font-mono
                    text-sm
                  "
                >


                  <p className="text-blue-600">
                    const developer = "Sean";
                  </p>


                  <p className="text-blue-600">
                    function buildApp() {"{"}
                  </p>


                  <p className="text-green-600 ml-4">
                    return React.create();
                  </p>


                  <p className="text-blue-600">
                    {"}"}
                  </p>


                  <p className="text-yellow-600">
                    npm run build
                  </p>


                  <p className="text-gray-400 animate-pulse">
                    █ coding...
                  </p>


                </div>



              </div>



            </div>




            {/* Laptop Base */}


            <div
              className="
                absolute
                -bottom-6
                left-1/2
                -translate-x-1/2
                w-[400px]
                h-8
                bg-gray-300
                rounded-b-xl
              "
            ></div>




            {/* Tech Badges */}


            <div
              className="
                absolute
                -top-8
                -left-10
                bg-blue-100
                backdrop-blur-lg
                border
                border-blue-200
                px-4
                py-2
                rounded-full
                text-blue-700
                animate-pulse
              "
            >

              React.js

            </div>




            <div
              className="
                absolute
                -bottom-10
                -right-10
                bg-blue-100
                backdrop-blur-lg
                border
                border-blue-200
                px-4
                py-2
                rounded-full
                text-blue-700
                animate-pulse
              "
            >

              Node.js

            </div>



          </div>




        </div>




      </div>


    </section>

  );

}



export default Home;