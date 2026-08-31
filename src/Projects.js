import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import eventplanner from "./eventplanner.png"
import studentmanagement from "./studentmanagement.png"
import joinaCity from "./joina-city.png"
import rateLimiter from "./rate-limiter.png"

function Projects() {


  const projects = [

    {
      title: "Rate Limiter",

      description:
        "An interactive API rate limiter dashboard that tracks request usage, configured limits, and real-time request status.",

      image:
        rateLimiter,

      technologies:[
        "Next.js",
        "TypeScript",
        "API"
      ],

      github:"#",

      demo:"https://rate-limiter-assignment-git-master-quad-coders1.vercel.app/"

    },

    {
      title: "Joina City Mall Portal",

      description:
        "A multi-tenant mall portal for shop owners to manage their store profile, floor location, promotions, analytics and team access.",

      image:
        joinaCity,

      technologies:[
        "React",
        "Tailwind CSS",
        "JavaScript"
      ],

      github:"#",

      demo:"https://joina-project.vercel.app/"

    },

    {
      title: "Student Management Dashboard",

      description:
        "A dashboard application designed to manage student records, information and academic data with a clean user interface.",

      image:
        studentmanagement,

      technologies:[
        "React",
        "Tailwind CSS",
        "JavaScript"
      ],

      github:"#",

      demo:"#"

    },


    {
      title:"Event Planner App",

      description:
        "A responsive event management application that allows users to create, manage and organize events.",

      image:
        eventplanner,

      technologies:[
        "React",
        "CSS",
        "JavaScript"
      ],

      github:"#",

      demo:"#"

    },


    {
      title:"Todo Application",

      description:
        "A productivity application that helps users create, track and manage daily tasks efficiently.",

      image:
        "/images/todo-app.png",

      technologies:[
        "React",
        "Tailwind CSS"
      ],

      github:"#",

      demo:"#"

    }

  ];





  return (

    <section className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-gray-700
      to-black
      text-white
      px-6
      pt-32
      pb-20
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">



        {/* Heading */}

        <div className="
          text-center
          mb-16
        ">


          <h1 className="
            text-5xl
            md:text-6xl
            font-extrabold
          ">


            My

            <span className="
              text-blue-500
            ">
              {" "}Projects
            </span>


          </h1>



          <p className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
          ">


            A collection of applications and projects I have
            built while developing my software engineering skills.


          </p>


        </div>








        {/* Project Cards */}


        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        ">



          {
            projects.map((project)=>(


              <div

                key={project.title}

                className="
                  group
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  flex
                  flex-col
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "

              >





                {/* Image */}

                <div className="
                  h-56
                  overflow-hidden
                  bg-gray-800
                ">


                  <img

                    src={project.image}

                    alt={project.title}

                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "

                  />


                </div>







                {/* Content */}


                <div className="
                  p-6
                  flex
                  flex-col
                  flex-1
                ">



                  <h2 className="
                    text-2xl
                    font-bold
                  ">

                    {project.title}

                  </h2>





                  <p className="
                    mt-3
                    text-gray-400
                    leading-relaxed
                  ">

                    {project.description}

                  </p>






                  {/* Technologies */}


                  <div className="
                    flex
                    flex-wrap
                    gap-2
                    mt-5
                  ">


                    {
                      project.technologies.map((tech)=>(


                        <span

                          key={tech}

                          className="
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            bg-blue-500/20
                            text-blue-300
                            border
                            border-blue-400/20
                          "

                        >

                          {tech}

                        </span>


                      ))
                    }


                  </div>






                  {/* Buttons */}


                  <div className="
                    flex
                    gap-4
                    mt-auto
                    pt-8
                  ">


                    <a

                      href={project.github}

                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-full
                        border
                        border-white/20
                        text-sm
                        hover:bg-white/10
                        transition
                      "

                    >

                      <FaGithub/>

                      GitHub

                    </a>





                    <a

                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"

                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-full
                        bg-blue-600
                        text-sm
                        hover:bg-blue-700
                        transition
                      "

                    >

                      <FaExternalLinkAlt/>

                      Live Demo

                    </a>



                  </div>





                </div>



              </div>


            ))
          }



        </div>





      </div>



    </section>


  );

}


export default Projects;
