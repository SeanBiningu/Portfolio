import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";


function Skills() {


  const skillGroups = [

    {
      title: "Frontend Development",

      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 />
        },

        {
          name: "CSS3",
          icon: <FaCss3Alt />
        },

        {
          name: "JavaScript",
          icon: <FaJs />
        },

        {
          name: "React",
          icon: <FaReact />
        },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />
        },
      ]
    },



    {
      title: "Backend Development",

      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />
        },

        {
          name: "Express.js",
          icon: <SiExpress />
        },

        {
          name: "MongoDB",
          icon: <SiMongodb />
        },

        {
          name: "MySQL",
          icon: <SiMysql />
        },
      ]
    },



    {
      title: "Tools & Technologies",

      skills: [

        {
          name: "Git",
          icon: <FaGitAlt />
        },

        {
          name: "GitHub",
          icon: <FaGithub />
        },

        {
          name: "VS Code",
          icon: <VscVscode />
        },

        {
          name: "Figma",
          icon: <FaFigma />
        },

      ]
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
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-16">

          <h1
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            "
          >

            My

            <span className="text-blue-500">
              {" "}Skills
            </span>

          </h1>


          <p
            className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
            "
          >

            Technologies and tools I use to create
            modern, responsive and scalable applications.

          </p>


        </div>





        {/* Skill Cards */}


        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >


          {
            skillGroups.map((group)=>(


              <div

                key={group.title}

                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-3
                transition
                duration-500
                "

              >


                <h2
                  className="
                  text-2xl
                  font-bold
                  mb-8
                  text-blue-400
                  "
                >

                  {group.title}

                </h2>





                <div
                  className="
                  grid
                  grid-cols-2
                  gap-5
                  "
                >



                  {
                    group.skills.map((skill)=>(


                      <div

                        key={skill.name}

                        className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        bg-black/20
                        rounded-2xl
                        p-5
                        hover:bg-blue-600/20
                        hover:scale-105
                        transition
                        duration-300
                        "

                      >



                        <div
                          className="
                          text-5xl
                          text-blue-400
                          "
                        >

                          {skill.icon}

                        </div>



                        <p
                          className="
                          text-gray-200
                          text-sm
                          text-center
                          "
                        >

                          {skill.name}

                        </p>



                      </div>


                    ))
                  }



                </div>



              </div>


            ))
          }



        </div>






        {/* Quote */}


        <div
          className="
          mt-16
          text-center
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-6
          backdrop-blur-lg
          "
        >

          <p className="text-gray-300 italic">

            "Continuously learning, improving and building
            solutions through technology."

          </p>


        </div>



      </div>


    </section>

  );

}


export default Skills;