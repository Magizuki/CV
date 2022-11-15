// import { Badge } from "flowbite-react"
import { Button } from "flowbite-react"
import React, { useEffect, useRef, useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Introduction from "./Introduction"
import Resume from "./Resume"

export default function Profile() {

  const refDark = useRef(null)
  const refLight = useRef(null)
  const refToogle = useRef(null)
  const [facebookUrl, setFacebookUrl] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [linkedinUrl, setLinkedInUrl] = useState('')
  const [prefFacebookImg, setPrefFacebookImg] = useState('')
  const [prefGithubImg, setPrefGithubImg] = useState('')
  const [prefLinkedInImg, setPrefLinkedInImg] = useState('')

  useEffect(() => {
    
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      // setBadgeColor("gray");
      setFacebookUrl('facebook_dark');
      setGithubUrl('github_dark');
      setLinkedInUrl('linkedin_dark');
    } else {
      document.documentElement.classList.remove('dark');
      // setBadgeColor("indigo");
      setFacebookUrl('facebook_light');
      setGithubUrl('github_light');
      setLinkedInUrl('linkedin_light');
    }

    refToogle.current.focus()
    doClick()

  }, [])

  const doClick = () => {
    var themeToggleDarkIcon = refDark.current;
    var themeToggleLightIcon = refLight.current;

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    refDark.current = themeToggleDarkIcon
    refLight.current = themeToggleLightIcon

    var themeToggleBtn = refToogle.current;

    themeToggleBtn.addEventListener('click', function() {

      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
              setFacebookUrl('facebook_dark');
              setGithubUrl('github_dark');
              setLinkedInUrl('linkedin_dark');
              // setBadgeColor("gray");
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
              setFacebookUrl('facebook_light');
              setGithubUrl('github_light');
              setLinkedInUrl('linkedin_light');
              // setBadgeColor("indigo");
          }

      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
              setFacebookUrl('facebook_light');
              setGithubUrl('github_light');
              setLinkedInUrl('linkedin_light');
              // setBadgeColor("indigo");
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
              setFacebookUrl('facebook_dark');
              setGithubUrl('github_dark');
              setLinkedInUrl('linkedin_dark');
              // setBadgeColor("gray");
          }
      }
    
    });

    refToogle.current = themeToggleBtn
    
  }

  const changeImgOnHover = (flag, hoverStatus) => {

    if(hoverStatus === "hover"){
      if(flag === 1){
        if(facebookUrl.includes('_dark') || facebookUrl.includes('_light')){
          setPrefFacebookImg(facebookUrl)
          setFacebookUrl('facebook_hover')
        }
      }
      else if(flag === 2){
        if(githubUrl.includes('_dark') || githubUrl.includes('_light')){
          setPrefGithubImg(githubUrl)
          setGithubUrl('github_hover')
        }
      }
      else if(flag === 3){
        if(linkedinUrl.includes('_dark') || linkedinUrl.includes('_light')){
          setPrefLinkedInImg(linkedinUrl)
          setLinkedInUrl('linkedin_hover')
        }
      }
    }
    else{
      if(flag === 1){
        setFacebookUrl(prefFacebookImg)
        setPrefFacebookImg('')
      }
      else if(flag === 2){
        setGithubUrl(prefGithubImg)
        setPrefGithubImg('')
      }
      else if(flag === 3){
        setLinkedInUrl(prefLinkedInImg)
        setPrefLinkedInImg('')
      }
    }

  }
  
  return (
    <div className="bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0] w-full h-full lg:p-10 p-3">
      <div className="">
          <button id="theme-toggle" ref={refToogle} onClick={doClick} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm px-1.5 w-8 h-8">
              <svg id="theme-toggle-dark-icon" ref={refDark} className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" ref={refLight} className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button>
      </div>
      <br />
      {/* <br /> */}
      <div className="lg:gap-8 lg:columns-2 lg:flex flex-row">
          <div className="lg:w-1/2 bg-white dark:bg-[#302C40] rounded-lg w-full">
            <br />
            <img className="rounded-lg w-40 h-48 m-auto block" src="assets/MyImage.jpg" alt="" />
            <br />
            <div className="text-center"> 
              <span className="font-semibold text-3xl">Christopher <span className="font-bold">Irvine</span></span>
              <br />
              <span className="font-semibold text-3xl">Sendjaya</span>
              <br /> 
              <br />
              <div className="m-auto block text-center">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Full Stack Developer
                </span>
              </div>
              <br />
              <div className="gap-3 columns-3 flex items-center justify-center">
                <a href="https://m.facebook.com/IrvineSendjaya"><img src={`assets/icons/facebook/${facebookUrl}.png`} className="hover:cursor-pointer w-6 h-6" alt="Facebook" onMouseOver={() => changeImgOnHover(1, "hover")} onMouseLeave={() => changeImgOnHover(1, "leave")} /></a>
                <a href="https://github.com/Magizuki"><img src={`assets/icons/github/${githubUrl}.png`} className="hover:cursor-pointer w-6 h-6" alt="Github" onMouseOver={() => changeImgOnHover(2, "hover")} onMouseLeave={() => changeImgOnHover(2, "leave")}/></a>
                <a href="https://www.linkedin.com/in/christopher-irvine-sendjaya-39bba01b6/"><img src={`assets/icons/linkedin/${linkedinUrl}.png`} className="hover:cursor-pointer w-6 h-6" alt="Linkedin" onMouseOver={() => changeImgOnHover(3, "hover")} onMouseLeave={() => changeImgOnHover(3, "leave")}/></a>
              </div>
              <br />
            </div>
            <div className="flex-row gap-2 ml-10">
              <div className="gap-1 columns-2 flex my-5">
                <img src="assets/icons/date/calendar.png" className="hover:cursor-pointer w-6 h-6" alt="Date Of Birth" /><span className="text-lg">March 27, 2000</span> 
              </div>
              <div className="gap-1 columns-2 flex my-5">
                <img src="assets/icons/location/location-pin.png" className="hover:cursor-pointer w-6 h-6" alt="Place of Birth" /><span className="text-lg">Jakarta, Indonesia</span>
              </div>
              <div className="gap-1 columns-2 flex my-5">
                <img src="assets/icons/email/email.png" className="hover:cursor-pointer w-6 h-6" alt="Email" /><span className="text-lg">irvinesens@gmail.com</span>
              </div>
              <div className="gap-1 columns-2 flex my-5">
                <img src="assets/icons/phone/smartphone.png" className="hover:cursor-pointer w-6 h-6" alt="Phone" /><span className="text-lg">081908063088</span>
              </div>
            </div>
            <br />
            <div className="flex justify-center items-center">
              <a href="assets/CV - CHRISTOPHER IRVINE SENDJAYA.pdf" download>
                <Button>
                  Download CV
                </Button>
              </a>
            </div>
            <br />
          </div>
          <div className="w-full bg-white dark:bg-[#302C40] rounded-lg p-5 static lg:relative">
            <Router>
              <Routes>
                {/* <React.Fragment><Navigation width={window.innerWidth} /></React.Fragment> */}
                <Route path="/" element={<Introduction />}></Route>
                <Route path="/Resume" element={<Resume />}></Route>
              </Routes>
            </Router>
            {/* <Introduction /> */}
          </div>
      </div>
      <br />
      <div className="text-center"><span>Copyright &#169;2022</span></div> 
    </div>
  )

}