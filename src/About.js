import { useState, useEffect } from "react";

function About() {


  const [role, setRole] = useState("Software");

  useEffect(() => {
    const roles = ["Software", "Developer", "Engineer"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setRole(roles[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const highlights = [

    {
      title: "React",
      description: "Frontend Development",
      color: "text-blue-400"
    },


    {
      title: "UX Design",
      description: "User-Centered Design",
      color: "text-blue-400"
    },


    {
      title: "Full Stack",
      description: "Web Applications",
      color: "text-green-400"
    }

  ];




  return (

    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-gray-900
        to-black
        text-white
        px-6
        pt-32
        pb-20
        flex
        items-center
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
          bg-blue-600
          rounded-full
          blur-3xl
          opacity-20
        "
      />


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
          opacity-20
        "
      />





      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >





        {/* DEVELOPER TEXT */}

        <div
          className="
            flex
            justify-center
          "
        >


          <div
            className="
              relative
              w-80
              h-80
              flex
              items-center
              justify-center
            "
          >


            <div
              className="
                text-6xl
                font-extrabold
                text-blue-600
              "
            >

              {role}

            </div>


          </div>


        </div>








        {/* CONTENT */}


        <div>


          <h1
            className="
              text-5xl
              md:text-6xl
              font-extrabold
            "
          >

            About

            <span
              className="
                text-blue-500
              "
            >

              {" "}Me

            </span>


          </h1>







          <p
            className="
              mt-6
              text-gray-300
              text-lg
              leading-relaxed
            "
          >

            I am

            <span
              className="
                text-white
                font-semibold
              "
            >
              {" "}Sean Biningu
            </span>

            , a passionate Developer
            &amp; Engineer student at

            <span
              className="
                text-blue-400
                font-semibold
              "
            >
              {" "}Uncommon.org
            </span>

            , focused on building scalable,
            responsive and user-friendly applications.

          </p>








          <p
            className="
              mt-5
              text-gray-400
              leading-relaxed
            "
          >

            I enjoy turning ideas into digital solutions
            using modern technologies including React,
            JavaScript, Tailwind CSS, Node.js, Express,
            MySQL and MongoDB. My UX Design knowledge
            allows me to create applications that are
            functional, beautiful and easy to use.

          </p>









          {/* HIGHLIGHTS */}


          <div
            className="
              mt-10
              grid
              sm:grid-cols-3
              gap-5
            "
          >


            {
              highlights.map((item)=>(

                <div
                  key={item.title}

                  className="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-2xl
                    p-5
                    hover:-translate-y-3
                    hover:bg-white/20
                    transition
                    duration-300
                  "
                >


                  <h3
                    className={`
                      text-2xl
                      font-bold
                      ${item.color}
                    `}
                  >

                    {item.title}

                  </h3>



                  <p
                    className="
                      mt-2
                      text-gray-400
                      text-sm
                    "
                  >

                    {item.description}
                  </p>

                </div>
              ))
            }
          </div>








          {/* STATUS */}


          <div
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              bg-green-500/10
              border
              border-green-400/20
              px-5
              py-3
              rounded-full
              text-gray-200
            "
          >

            <span
              className="
                w-3
                h-3
                bg-green-400
                rounded-full
                animate-pulse
              "
            />
            Available for opportunities
          </div>
        </div>
      </div>



    </section>

  );

}


export default About;