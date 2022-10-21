export default function Introduction() {
    return(
        <div className="w-full bg-white dark:bg-[#302C40] rounded-lg p-5">
            <span className="text-3xl font-bold">About Me</span>
            <br />
            <br />
            <hr className="w-40 h-1 font-bold bg-blue-600 border-none rounded-md" />
            <br />
            <span>
              Hello, my name is Christopher Irvine Sendjaya with Irvine as my nickname. 
              I am fresh graduate from Binus University in Computer Science major with 3.63 GPA. 
              I am from duren sawit, east jakarta. 
              My hobbies are playing game, listening music, and watching film. 
              I have abilities to develop a website and i can also build and manage a database system which can be used for storing website or other data. Previously i already have experience as internship programmer in PT.Indomobil Finance Indonesia for 1 year and currently i still work in that company as IT Supporting Business Application Staff. 
              For more detail about me, can be seen in my cv.
            </span>
            <br />
            <br />
            <span className="text-3xl font-bold">What I'm Doing</span>
            <br />
            <br />
            <hr className="w-40 h-1 font-bold bg-blue-600 border-none rounded-md" />
            <br />
            <div className="flex-row">
              <div className="flex gap-6 w-full">
                  <div className="flex rounded-lg w-1/2 h-1/5 gap-3 p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                    <img src="assets/icons/website/website.png" className="hover:cursor-pointer w-1/5 h-20" alt="Web" />
                    <span className="text-2xl ml-10 mt-5">Web Development</span>
                  </div>
                  <div className="flex rounded-lg w-1/2 h-1/5 gap-3 p-5 bg-white dark:bg-[#302C40] lg:bg-[#F5F6F7] text-[#44566C] lg:dark:bg-[#272333] dark:text-[#DEDDE0]">
                    <img src="assets/icons/database/database.png" className="hover:cursor-pointer w-1/5 h-20" alt="Web" />
                    <span className="text-2xl ml-10 mt-5">Database Management</span>
                  </div>
              </div>
            </div>
          </div>
    );
}