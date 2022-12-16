import { useState } from "react"
import { Link } from "react-router-dom";


export default function Navigation(props) {

    const [flag, setFlag] = useState(1)

    const expandNav = () => {
        setFlag(2)
    };

    const shrinkNav = () => {
        setFlag(1)
    };

    // const largeNav = (<div className="w-full h-full bg-blue-600 z-10">
    //                     <div className="block m-auto w-1/2">
    //                         <span className="text-center hover:underline">Profile</span>
    //                         <span className="text-center hover:underline">Resume</span>
    //                         <span className="text-center hover:underline">Portfolio</span>
    //                         <span className="text-center hover:underline">Close</span>
    //                     </div>
    //                 </div>)

    const navClicked = (<div className="bg-blue-600 h-10 rounded-md flex items-center text-white">
                            <Link to="/">
                                <span className="ml-3 hover:underline">
                                    Profile 
                                </span>
                            </Link>
                             <Link to="/Resume">
                                <span className="ml-3 hover:underline">
                                    Resume 
                                </span>
                             </Link>
                             <Link to="/Portfolio">
                                <button className="ml-3 hover:underline">
                                    Portfolio 
                                </button>
                             </Link>  
                            <button onClick={shrinkNav} className="material-symbols-outlined ml-3 h-8 hover:h-10">
                                Close
                            </button>  
                        </div>) 

    const navDefault = (<div>
                            <button onClick={expandNav} className="bg-blue-600 hover:-translate-y-1 hover:scale-110 rounded-md w-8 h-8 p-1 transition duration-0 material-symbols-outlined cursor-pointer hover:duration-150 ease-in-out text-white">
                                menu 
                            </button>     
                        </div>)

                            

    // useEffect(() => {
    //     //setCurrentNav(navDefault)
    // }, [])
    
    return (
        <div className="absolute top-3 right-2 lg:right-3">
            {flag === 1 ? (navDefault) : (navClicked)}  
            {/* {flag === 1 ? (navDefault) : (props.width === null || props.width === undefined ? (navClicked) : (largeNav))}    */}
        </div>
    );
};
