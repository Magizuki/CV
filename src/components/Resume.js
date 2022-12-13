import React from "react";
import Navigation from "./Navigation"

export default function Resume(){
    return (
        <React.Fragment>
            <Navigation width={window.innerWidth} />
            {window.innerWidth < 800 ? (<React.Fragment><br /><br /><br /></React.Fragment>) : (<React.Fragment><br /><br /></React.Fragment>)}
            <div className="w-full lg:flex flex">
                <div className="flex w-1/2">
                    <img src="assets/icons/education/education.png" alt="web" className="hover:cursor-pointer w-1/5 lg:ml-5 lg:w-1/6 lg:h-12 h-20" />
                    <span className="text-3xl font-bold lg:text-2xl ml-5 lg:mt-3 mt-5">Education</span>
                    <br />
                    <br />
                    
                </div>
                <div className="flex w-1/2">
                    <img src="assets/icons/experience/experience.png" alt="web" className="hover:cursor-pointer ml-12 lg:ml-10 w-1/5 lg:w-1/6 lg:h-12 h-20" />
                    <span className="text-3xl font-bold lg:text-2xl ml-5 lg:mt-3 mt-5">Experience</span>
                    <br />
                    <br />
                    
                </div>           
            </div>
        </React.Fragment>
    )
}