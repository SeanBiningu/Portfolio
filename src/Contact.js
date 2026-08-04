import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";


function Contact() {


  const contactInfo = [

    {
      icon: <FaPhone />,
      title: "Phone",
      detail: "+263 71 070 9893"
    },


    {
      icon: <FaEnvelope />,
      title: "Email",
      detail: "seanbiningu6@email.com"
    },


    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      detail: "Harare, Zimbabwe"
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

            Contact

            <span className="
              text-blue-500
            ">

              {" "}Me

            </span>

          </h1>



          <p className="
            mt-5
            text-gray-400
            text-lg
            max-w-2xl
            mx-auto
          ">

            Have a project idea, collaboration,
            or opportunity? Let's build something amazing together.

          </p>


        </div>






        <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-start
        ">





        {/* LEFT SIDE */}


        <div>


          <h2 className="
            text-3xl
            font-bold
            mb-8
          ">

            Get In Touch

          </h2>




          <div className="
            space-y-6
          ">


          {
            contactInfo.map((item)=>(


              <div

                key={item.title}

                className="
                  flex
                  items-center
                  gap-6
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-3xl
                  p-6
                  hover:-translate-y-2
                  hover:bg-white/20
                  transition
                  duration-300
                "

              >



                <div className="
                  text-4xl
                  text-blue-400
                ">

                  {item.icon}

                </div>





                <div>

                  <h3 className="
                    text-xl
                    font-semibold
                  ">

                    {item.title}

                  </h3>


                  <p className="
                    text-gray-400
                    mt-1
                  ">

                    {item.detail}

                  </p>


                </div>



              </div>



            ))
          }


          </div>







          {/* SOCIALS */}


          <div className="
            flex
            gap-5
            mt-10
          ">



            <a
              href="https://github.com/"
              target="_blank"
              className="
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                border
                border-white/20
                text-2xl
                hover:bg-blue-600
                hover:scale-110
                transition
              "
            >

              <FaGithub />

            </a>





            <a
              href="https://linkedin.com/"
              target="_blank"
              className="
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-white/10
                border
                border-white/20
                text-2xl
                hover:bg-blue-600
                hover:scale-110
                transition
              "
            >

              <FaLinkedin />

            </a>



          </div>




        </div>









        {/* FORM */}



        <div className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/20
          rounded-3xl
          p-8
          shadow-2xl
        ">


          <h2 className="
            text-3xl
            font-bold
            mb-8
          ">

            Send Message

          </h2>




          <form className="
            space-y-6
          ">



            <input

              type="text"

              placeholder="Your Name"

              className="
                w-full
                bg-black/30
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/30
                transition
              "

            />






            <input

              type="email"

              placeholder="Your Email"

              className="
                w-full
                bg-black/30
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/30
                transition
              "

            />







            <textarea

              rows="5"

              placeholder="Your Message"

              className="
                w-full
                bg-black/30
                border
                border-white/20
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/30
                transition
              "

            />







            <button

              className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                hover:scale-105
                transition
                duration-300
                font-bold
              "

            >

              Send Message

              <FaPaperPlane />

            </button>




          </form>



        </div>






        </div>





      </div>



    </section>

  );

}


export default Contact;