import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react ,{useState} from 'react'
import "./App.css";
import logo from "./assets/logo1.png";
import phones from "./assets/phones.png";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";




function App() {
  const [emailInput, setEmailInput] = useState('')

  const clearInput = () => {
    console.log(emailInput)
    setEmailInput('')
    alert('Thank you, you will be notified as we launch our platform')
  }

  return (
    <>
      <div className="wrapper flex justify-center w-[100%] h-[100vh] p-3">
        <div className="hero bg-[#D9D9D9] w-[100%] pt-7 pb-7 rounded-3xl">
          <div className="hero-top w-[100%] flex justify-center">
            <img src={logo} alt="ESPIRONS" className="w-56" />
            
          </div>
          <div className="content pt-16 flex pl-10">
            <div className="left-content w-[40%] border-white border-r-[1px] flex justify-center">
              <img src={phones} alt="show" className="w-96" />
            </div>
            <div className="right-content pl-5 w-[60%] flex flex-col justify-center items-center ">
              <h3 className="text-6xl text-[#45474B] tracking-tighter w-[70%]">
                We’re working hard to bring something epic to your{" "}
                <span className="underline decoration-[#F4CE14]">Esports</span>{" "}
                journey - stay tuned!
              </h3>
              <div className="input-container flex w-[70%] pt-5">
                <input
                  type="email"
                  onChange={(e)=> setEmailInput(e.target.value)}
                  value={emailInput}
                  placeholder="Enter your email"
                  className="bg-[#45474B] pl-4 p-2 pt-3 w-[45%]"
                />
                <div onClick={clearInput} className="bg-[#F4CE14] flex justify-center items-center p-2 pt-3 text-[#45474B] text-xl cursor-pointer">
                  Get Notified
                </div>
              </div>
              <div className="w-[70%] subheadingInput">
                <h4 className="text-start text-[#45474B] w-[47%] pt-3 text-sm">
                  Enter your email to be the first to know when we launch.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerWrapper flex justify-center w-[100%] h-[55vh] p-3">
        <div className="footer bg-[#D9D9D9] w-[100%] rounded-3xl p-3">
          <div className="footer-content bg-[#000000] h-[100%] w-[100%] pt-16 rounded-3xl flex flex-col justify-between items-center">
            <div className="bg-[#D9D9D9] w-[25%] rounded-xl flex flex-col gap-7 items-center p-10 pb-1">
              <img src={logo} alt="ESPIRONS" className="w-[70%]" />
              <span className="flex flex-col justify-between items-center">
                <span className="flex gap-x-3">
                  <a href="https://www.instagram.com/espirons_official/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="mr-1 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://youtube.com/@espirons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-2xl cursor-pointer"
                    />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="cursor-pointer"
                    />
                  </a>
                </span>
                <h4 className="text-[#45474B] text-sm">Follow our handles</h4>
              </span>
            </div>
            <div className="w-[50%] border-white border-t-[1px] flex justify-center p-1">
              <h4 className="text-[#c6c1c1] text-sm">
                Copyright © 2024 ESPIRONS. All rights reserved.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
