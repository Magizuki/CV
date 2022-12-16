import React from "react";
import Navigation from "./Navigation"
import { Timeline, Progress } from "flowbite-react"

export default function Resume(){
    return (
        <React.Fragment>
            <Navigation width={window.innerWidth} />
            {window.innerWidth < 800 ? (<React.Fragment><br /><br /><br /></React.Fragment>) : (<React.Fragment><br /><br /></React.Fragment>)}
            <div className="w-full lg:flex lg:flex-row flex-col">
                <div className="lg:flex-row flex-col block w-1/2 ml-5">
                    <div className="flex-col">
                        <div className="flex">
                            <img src="assets/icons/education/education.png" alt="web" className="hover:cursor-pointer w-1/5 lg:w-1/6 lg:h-12 h-20" />
                            <span className="text-3xl font-bold lg:text-2xl ml-5 lg:mt-3 mt-5">Education</span>
                        </div>
                        <br />
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        2018 - 2022
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        Bina Nusantara University
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        Computer Science Major with 3.63 Gpa
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        2015 - 2018
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        Fons Vitae 1 Senior High School
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        Science Major
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline> 
                    </div>  
                </div>
                <div className="lg:flex-row flex-col w-1/2 ml-5">
                    <div className="flex-col">
                        <div className="flex">
                            <img src="assets/icons/experience/experience.png" alt="web" className="hover:cursor-pointer w-1/5 lg:w-1/6 lg:h-12 h-20" />
                            <span className="text-3xl font-bold lg:text-2xl ml-5 lg:mt-3 mt-5">Experience</span>
                        </div>
                        <br />
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        2022 - Now
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        PT. Indomobil Finance Indonesia
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        IT Supporting Business Application Staff
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        2021 - 2022
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        PT. Indomobil Finance Indonesia
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        IT Programmer Intern
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>           
            </div>
            <br />
            <div className="w-full lg:flex lg:flex-row flex-col">
                <div className="lg:flex-row flex-col block w-1/2 lg:ml-5">
                    <div className="flex-col">
                        <div className="flex">
                            <span className="text-3xl font-bold lg:text-2xl lg:mt-3 mt-5">Soft Skills</span>
                        </div>
                        <br />
                        <div className="rounded-lg p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                            <Progress
                                progress={70}
                                label="Problem Solving"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={60}
                                label="Time Management"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={50}
                                label="Communication"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={70}
                                label="Decision Making"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={60}
                                label="Creativity"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                        </div>
                    </div>  
                </div>
                <div className="lg:flex-row flex-col w-1/2 lg:ml-5">
                    <div className="flex-col">
                        <div className="flex">
                            <span className="text-3xl font-bold lg:text-2xl lg:mt-3 mt-5">Coding Skills</span>
                        </div>
                        <br />
                        <div className="rounded-lg p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                            <Progress
                                progress={80}
                                label="HTML CSS Javascript"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={50}
                                label="PHP"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={70}
                                label="Visual Basic"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={50}
                                label="React JS"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                            <Progress
                                progress={80}
                                label="SQL"
                                labelPosition="outside"
                                size="lg"
                                labelProgress={true}
                            />
                        </div>
                    </div>
                </div>           
            </div>
            
        </React.Fragment>
    )
}