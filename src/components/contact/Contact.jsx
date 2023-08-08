import { ImProfile } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-row items-center pt-11">
      <div className="flex flex-col w-6/12 items-center">
        <div className="font-bold text-9xl text-ligth">
          <MdConnectWithoutContact />
        </div>
        <div className="text-5xl ml-11 mt-10 w-9/12 text-center">Let´s talk about your next Project!</div>
        <div className="mt-5 w-9/12 text-center">
        The hardest part is getting started, the rest we will build together,
        I can help you connect with the world through your web app.
        I'm excited to work with you and bring your ideas to life.
        Let's talk about your new project over a cup of coffee.
        </div>
      </div>
      <div className="flex flex-col w-6/12 items-center">
        <div className="flex flex-row border-b border-ligth w-9/12 h-20 pt-6">
          <a className="mr-5 text-5xl text-ligth">
            <AiOutlineLinkedin />
          </a>
          <p className="text-5xl ml-11">Linkedin</p>
        </div>
        <div className="flex flex-row border-b border-ligth w-9/12 h-20 pt-6">
          <a className="mr-5 text-5xl text-ligth">
            <FaGithubSquare />
          </a>
          <p className="text-5xl ml-11">Github</p>
        </div>
        <div className="flex flex-row border-b border-ligth w-9/12 h-20 pt-6">
          <a className="mr-5 text-5xl text-ligth">
            <ImProfile />
          </a>
          <p className="text-5xl ml-11">Curriculum</p>
        </div>
        <div className="flex flex-row border-b border-ligth w-9/12 h-20 pt-6">
          <a className="mr-5 text-5xl text-ligth">
            <FaSquareWhatsapp />
          </a>
          <p className="text-5xl ml-11">Whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
