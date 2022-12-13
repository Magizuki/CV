import React from "react";
import Navigation from "./Navigation"

export default function Introduction() {
    return(
        <React.Fragment>
            <Navigation width={window.innerWidth} />
            <div className="w-full">
              {window.innerWidth < 800 ? (<React.Fragment><br /><br /></React.Fragment>) : ""}
              <span className="text-xl font-bold lg:text-3xl">About Me</span>
              <br />
              <br />
              <hr className="w-20 lg:w-40 h-1 font-bold bg-blue-600 border-none rounded-md" />
              <br />
              <span>
                Hello, my name is Christopher Irvine Sendjaya with Irvine as my nickname. 
                I am fresh graduate from Binus University in Computer Science major with 3.63 GPA. 
                I am from duren sawit, east jakarta. 
                Currently i work in PT. Indomobil Finance Indonesia as IT Supporting Business Application Staff. 
                For more detail about me, can be seen in my cv.
              </span>
              <br />
              <br />
              <span className="text-xl font-bold lg:text-3xl">What I'm Doing</span>
              <br />
              <br />
              <hr className="w-20 lg:w-40 h-1 font-bold bg-blue-600 border-none rounded-md" />
              <br />
              <div className="lg:flex-row block">
                <div className="lg:flex block gap-6 w-full">
                    <div className="flex items-center rounded-lg lg:w-1/2 w-full h-1/5 gap-3 p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                      <img src="assets/icons/website/website.png" className="hover:cursor-pointer w-12 lg:w-1/3 lg:h-24 h-16" alt="Web" />
                      <span className="text-2xl ml-10 mt-5">Web Development</span>
                    </div>
                    <div className="flex items-center rounded-lg lg:w-1/2 w-full h-1/5 gap-3 p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                      <img src="assets/icons/database/database.png" className="hover:cursor-pointer w-12 lg:w-1/3 lg:h-24 h-16" alt="Web" />
                      <span className="text-2xl ml-10 mt-5">Database Management</span>
                    </div>
                </div>
              </div>
            </div>
        </React.Fragment>
    );
}