import React from "react";
import Navigation from "./Navigation"

export default function Resume(){
    return (
        <React.Fragment>
            <Navigation width={window.innerWidth} />
            {window.innerWidth < 800 ? (<React.Fragment><br /><br /></React.Fragment>) : ""}
            <div className="w-full flex">
                <div className="flex w-1/2">
                    <img src="assets/icons/education/education.png" />
                    <span className="text-xl font-bold lg:text-3xl">Education</span>
                    <br />
                    <br />
                    
                </div>
                <div className="flex w-1/2">
                    <img src="assets/icons/experience/experience.png" />
                    <span className="text-xl font-bold lg:text-3xl">Experience</span>
                    <br />
                    <br />
                    
                </div>           
            </div>
        </React.Fragment>
    )
}