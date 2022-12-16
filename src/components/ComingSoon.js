import React from "react";
import Navigation from "./Navigation"

export default function ComingSoon () {

    return(
        <React.Fragment>
            <Navigation width={window.innerWidth} />
            {window.innerWidth < 800 ? (<React.Fragment><br /><br /><br /></React.Fragment>) : (<React.Fragment><br /><br /></React.Fragment>)}
            <div className="text-center">
                <img src="assets/comingsoon.png" className="m-auto" alt="web"/>
                <br />
                {/* <span className="text-5xl font-bold">COMING SOON</span> */}
            </div>
        </React.Fragment>
    )

}