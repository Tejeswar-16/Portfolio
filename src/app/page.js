"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [aboutMe,setAboutMe] = useState(true);
  const [projects,setProjects] = useState(false);
  const [resume,setResume] = useState(false);
  const [contact,setContact] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#11071F] via-indigo-900 to-purple-800">
        <h1 className="select-none font-sans text-4xl flex justify-center font-bold pt-5 text-indigo-200">Tejeswar S</h1>
        <h1 className="select-none font-sans text-lg flex justify-center text-white italic">Curious mind with driven spirit</h1>
        <div className="mx-auto flex flex-col mt-5 w-75 md:w-180 lg:w-250">
          <div className="mx-auto flex flex-col md:flex md:flex-row justify-between bg-gradient-to-b from-purple-800 via-indigo-900 to-purple-950 rounded-xl shadow-lg w-75 md:w-180 lg:w-250 md:h-50">
            <Image className="select-none mx-auto md:mx-0 md:ml-5 mt-5 mb-5 rounded-xl shadow-xl" src="/Image.jpg" width={130} height={0} alt="profile-pic"></Image>
            <div>
              <h1 className="select-none ml-5 md:ml-0 font-sans mt-2 md:mt-5 text-gray-400">EMAIL</h1>
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQXhxBmbrvfXQqxSCTsVMBvcHwFvWSsPNNXSZvjKjczzRttJsvBPzPzSvCRLMgDTtFfTl"><h1 className="font-sans ml-5 md:ml-0 text-white">tejeswarsakthidaran@gmail.com</h1></Link>
              <h1 className="select-none ml-5 md:ml-0 font-sans mt-2 text-gray-400">MOBILE</h1>
              <h1 className="font-sans ml-5 md:ml-0 text-white">+91 9342430433</h1>
              <h1 className="select-none ml-5 md:ml-0 font-sans mt-2 text-gray-400">UNIVERSITY</h1>
              <h1 className="font-sans ml-5 md:ml-0 text-white">SASTRA Deemed University</h1>
            </div>
            <div className="flex flex-row justify-between md:flex md:flex-col">
              <div className="bg-indigo-950 ml-4 md:ml-0 mb-2 md:mb-0 mt-2 mr-4 p-2 rounded-xl w-15 hover:cursor-pointer">
                <Link href="https://www.linkedin.com/in/tejeswarsakthidaran09/"><Image className="select-none" src="/linkedin.png" width={50} height={10} alt="linkedin-pic"></Image></Link>
              </div>
              <div className="bg-indigo-950 mt-2 mr-4 mb-2 md:mb-0 p-2 rounded-xl w-15 hover:cursor-pointer">
                <Link href="https://github.com/Tejeswar-16"><Image className="select-none mt-2 rounded-xl" src="/github.png" width={70} height={10} alt="girhub-pic"></Image></Link>
              </div>
              <div className="bg-indigo-950 mt-2 mb-2 mr-4 p-2 rounded-xl w-15 hover:cursor-pointer">
                <a href="/Resume_Tejeswar S.pdf" target="_blank" rel="noopener noreferrer"><Image className="select-none rounded-xl" src="/download.png" width={70} height={10} alt="girhub-pic"></Image></a>
              </div>
            </div>
          </div>
          <div className="mb-5 select-none mt-5 bg-gradient-to-b from-purple-800 via-indigo-900 to-purple-950 rounded-xl shadow-lg w-75 md:w-180 lg:w-250">
              <nav>
                <div className="fixed left-0 bottom-0 right-0 md:static flex flex-row justify-between border-b border-fuchsia-100 p-2 md:p-5 bg-gradient-to-r from-purple-900 via-purple-800 to-violet-700 md:rounded-xl">
                    <h1 onClick={() => {setAboutMe(true);setProjects(false);setContact(false);setResume(false)}} className={!aboutMe ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer md:text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold md:text-2xl bg-violet-300 text-black rounded-xl p-2"}>About</h1>
                    <h1 onClick={() => {setProjects(true);setAboutMe(false);setContact(false);setResume(false)}} className={!projects ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer md:text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold md:text-2xl bg-violet-300 text-black rounded-xl p-2"}>Projects</h1>
                    <h1 onClick={() => {setResume(true);setProjects(false);setContact(false);setAboutMe(false)}} className={!resume ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer md:text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold md:text-2xl bg-violet-300 text-black rounded-xl p-2"}>Skills</h1>
                    <h1 onClick={() => {setContact(true);setProjects(false);setAboutMe(false);setResume(false)}} className={!contact ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer md:text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold md:text-2xl bg-violet-300 text-black rounded-xl p-2"}>Contact</h1>
                </div>
              </nav>
              {
                aboutMe && 
                  <div>
                  <div className="m-4">
                    <div className="rounded-xl shadow-xl p-4 border-t-[4px] border-purple-600 bg-[#381260]">
                      <p className="font-sans text-md text-justify text-white">Hello there! I&apos;m Tejeswar, currently pursuing a Bachelor of Technology in Computer Science and Engineering at SASTRA Deemed University. I&apos;m a passionate and driven aspiring software engineer.</p>
                      <br></br>
                      <p className="font-sans text-md text-justify text-white">Throughout my academic journey, I&apos;ve developed proficiency in multiple programming languages such as C, C++, Java, JavaScript, and XML. I&apos;m also experienced with frameworks and tools including React.js, Next.js, Tailwind CSS, Android (Java/XML), Firebase, Firestore, and relational databases like MySQL and Oracle.</p>
                      <br></br>
                      <p className="font-sans text-md text-justify text-white">I am eager to improve my skills and knowledge to contribute to innovative software development projects and continuously expand my expertise in this dynamic field.</p>
                    </div>
                  </div>
                  <div className="m-4">
                    <div className="rounded-xl shadow-xl p-4 border-t-[4px] border-purple-600 bg-[#381260]">
                      <h1 className="font-sans text-pink-100 font-semibold text-2xl">Education</h1>
                      <div className="flex flex-col md:flex md:flex-row md:justify-between">
                        <div className="bg-violet-900 p-4 rounded-xl shadow-lg shadow-white my-5 w-60 md:w-75 lg:w-100">
                          <h1 className="font-sans font-semibold text-lg text-gray-100">B.Tech Computer Science & Engineering</h1>
                          <ol className="list-disc ml-5 mt-2">
                            <li className="font-sans text-md text-gray-100">August 2023 to Present</li>
                            <li className="font-sans text-md text-gray-100">SASTRA Deemed University</li>
                            <li className="font-sans text-md text-gray-100">CGPA - 9.6/10</li>
                            <li className="font-sans text-md text-gray-100">Tanjore</li>
                          </ol>
                        </div>
                        <div className="bg-violet-900 p-4 rounded-xl shadow-lg shadow-white my-5 w-60 md:w-75 lg:w-100">
                          <h1 className="font-sans font-semibold text-lg text-gray-100">Senior Secondary Education</h1>
                          <ol className="list-disc ml-5 mt-2">
                            <li className="font-sans text-md text-gray-100">June 2021 to March 2023</li>
                            <li className="font-sans text-md text-gray-100">Srimathi Sundaravalli Memorial School</li>
                            <li className="font-sans text-md text-gray-100">Grade - 95%</li>
                            <li className="font-sans text-md text-gray-100">Chennai</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              }
              {
                projects && 
                  <div>
                    <div className="m-4">
                      <div className="rounded-xl shadow-xl p-4 border-t-[4px] border-purple-600 bg-[#381260]">
                        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
                          <div className="flex flex-col">
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">DLBTS - 2025</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">June 2025</h1>
                                </div>
                                <div className="flex flex-col justify-between md:flex md:flex-row md:justify-end">
                                  <Link href="https://github.com/Tejeswar-16/dlbts-2025"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 md:mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                  <Link href="https://dlbts-2025.vercel.app/"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl mt-1 md:mt-0 p-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">Try App</h1></Link>
                                </div>
                              </div>
                              <Image src="/dlbts.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">A Firebase - powered responsive web app for managing registration, analysis and judging of participants across 43
                                events for DLBTS - 2025 conducted by Sri Sathya Sai Seva Organisations (India), Kancheepuram South
                                District, Tamilnadu.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">AI Chatbot</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">December 2024</h1>
                                </div>
                              </div>
                              <Image src="/chatbot.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Built an AI ChatBot by integrating Gemini API (Application Programming Interface) to provide personalized and efficient assistance. This was in Java and XML built using Android Studio.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Bus Reservation System</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">June 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Bus_Reservation_System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/brs.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed a Bus Reservation System using Java Swing for the GUI and MySQL as the backend database. The system allows users to sign up, log in, and book tickets by selecting from a list of available buses. Users can enter passenger details for reservation. (Payment gateway integration is pending).</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Virtual Examination System</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">June 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Virtual-Examination-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/ves.png" alt="dlbts-pic" width={800} height={500}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed a Virtual Examination System using Java Swing for the GUI and MySQL as the backend. The system supports two roles: Admin and Student. Admins can add/remove students, create questions, and view results. Only students registered by the admin can log in and take exams. Both admins and students have access to view exam results.</p>
                            </div>
                            {/*********/}
                          </div>
                          <div className="flex flex-col">
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 lg:w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Expense Tracker Mobile Application</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">December 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Expense-Tracker"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>        
                                </div>
                              </div>
                              <Image src="/et.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed an expense tracker app in Android Studio integrated with Firebase database. This app helps users maintain their expenses in an organized manner. Users can add, update, and delete expenses, as well as view their expense statistics using bar graphs and pie charts. The app also features an integrated AI chat system and a secure login to protect user data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 lg:w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Student Management System</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">September 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Student-Management-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/sms.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed using Java Swing integrated with MySQL database which allows the user to add student data into the database, retrieve from database, update the credentials of students and also delete the data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 lg:w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Employee Management System</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">February 2023</h1>
                                  <h1 className="font-sans text-sm md:text-base text-pink-200 italic text-justify">(My first app developed during 12th grade, which sparked my passion for software development)</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Employee-Management-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/ems.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed an Employee Management System using Python Tkinter for the GUI and SQLite as the backend database. The system allows users to add, update, remove, and view employee records, offering a simple and effective interface for managing employee data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-60 md:w-120 lg:w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-lg md:text-xl text-white">Calculator</h1>
                                  <h1 className="font-sans font-semibold text-sm md:text-base text-white">May 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Calculator"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/calc.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-sm md:text-base text-justify text-white p-4">Developed a GUI-based Calculator using Java Swing that performs basic arithmetic operations such as addition, subtraction, multiplication, division, negation as well as advanced functions like square, square root, and reciprocal.</p>
                            </div>
                            {/*********/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              }
              {
                resume && 
                  <div>
                      <div className="mx-auto bg-violet-900 rounded-xl shadow-lg shadow-white w-70 md:w-170 lg:w-200 my-5 pb-4">
                        <h1 className="flex justify-center font-sans font-bold text-xl md:text-3xl text-violet-100 p-4">Skills</h1>
                        <div className="bg-[#381260] rounded-xl m-4">
                          <h1 className="font-sans font-bold ml-4 text-lg md:text-2xl text-white pt-4 pb-4">FRAMEWORKS</h1>
                          <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between">
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/next.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Next.js</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/react.png" alt="next-logo" width={55} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">React.js</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/tailwind.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">TailwindCSS</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/java.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Java Swing</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/tkinter.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Tkinter</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/android.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Android</h1>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#381260] rounded-xl m-4">
                          <h1 className="font-sans font-bold ml-4 text-lg md:text-2xl text-white pt-4 pb-4">LANGUAGES</h1>
                          <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between">
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/c.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">C</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/c++.png" alt="next-logo" width={55} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">C++</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/java.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Java</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/js.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">JavaScript</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/python.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Python</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/xml.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">XML</h1>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#381260] rounded-xl m-4">
                          <h1 className="font-sans font-bold ml-4 text-lg md:text-2xl text-white pt-4 pb-4">DATABASES</h1>
                          <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between">
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/mysql.png" alt="next-logo" width={90} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">MySQL</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/oracle.png" alt="next-logo" width={55} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Oracle</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/firestore.png" alt="next-logo" width={55} height={50}></Image>
                                <h1 className="font-sans font-semibold ml-7 md:ml-0 text-md md:text-lg lg:text-xl text-pink-100 mb-4">Firebase Firestore</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/mongo.png" alt="next-logo" width={55} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">MongoDB</h1>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#381260] rounded-xl m-4">
                          <h1 className="font-sans font-bold ml-4 text-lg md:text-2xl text-white pt-4 pb-4">TOOLS & PLATFORMS</h1>
                          <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between">
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/git.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Git</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/githublogo.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">GitHub</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/androi studio.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">Android Studio</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/intellij.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg::text-xl text-pink-100 mb-4">IntellIJ</h1>
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <Image className="bg-pink-200 rounded-xl p-2 mb-2" src="/vscode.png" alt="next-logo" width={50} height={50}></Image>
                                <h1 className="font-sans font-semibold text-md md:text-lg lg:text-xl text-pink-100 mb-4">VS Code</h1>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br></br>

                      <div className="mx-auto bg-violet-900 rounded-xl shadow-lg shadow-white w-70 md:w-170 lg:w-200 my-5 pb-4">
                        <h1 className="flex justify-center font-sans font-bold text-xl md:text-3xl text-violet-100 p-4">Experience</h1>
                        <div className="bg-[#381260] rounded-xl m-4 pb-4">
                          <h1 className="font-sans font-bold ml-4 pt-4 text-lg md:text-2xl text-white">Member of App Development Cluster</h1>
                          <div className="flex flex-row justify-between">
                            <h1 className="font-sans mt-2 ml-4 text-sm md:text-base text-yellow-200">Association of Computing Engineers (ACE)</h1>
                            <h1 className="font-sans mt-2 mr-4 text-sm md:text-base text-yellow-200">September 2024 - Present</h1>
                          </div>
                          <p className="font-sans text-white text-sm md:text-base p-4 text-justify">As an App Developer in the Association of Computing Engineers (ACE), I collaborated with a talented team to design and implement intent-based workflows and perform web scraping for API development. This experience strengthened my skills in modern app technologies, collaborative development, and building impactful digital solutions.</p>
                        </div>

                        <div className="bg-[#381260] rounded-xl m-4 pb-4">
                          <h1 className="font-sans font-bold ml-4 pt-4 text-lg md:text-2xl text-white">Certificate Automation</h1>
                          <div className="flex flex-row justify-between">
                            <h1 className="font-sans mt-2 ml-4 text-sm md:text-base text-yellow-200">Sri Sathya Sai Seva Organisations (India)</h1>
                            <h1 className="font-sans mt-2 mr-4 text-sm md:text-base text-yellow-200">June 2025</h1>
                          </div>
                          <p className="font-sans text-white text-sm md:text-base p-4 text-justify">Managed participant data using Python and automated the generation of 300+ certificates for an online summer course titled “Sathyam, Sivam, Sundaram”, conducted by Sri Sathya Sai Seva Organisations (India). Leveraged Google Sheets, Autocrat, and Google Slides for dynamic certificate creation and distribution, ensuring efficiency and accuracy.</p>
                        </div>
                      </div>
                  </div>
              }
              {
                contact &&
                  <div className="flex justify-center m-2">
                      <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-70 md:w-200 m-10">
                        <h1 className="flex justify-center font-sans font-bold pt-4 text-xl md:text-2xl text-violet-200">Let&apos;s Work Together!</h1>
                        <h1 className="flex justify-center font-sans ml-5 text-md md:text-lg text-violet-200 italic">Feel free to connect with me for collaborations or networking.</h1>
                        <form action="https://formsubmit.co/tejeswarsakthidaran@gmail.com" method="POST">
                          <div>
                            <div className="flex flex-col items-center md:flex-row md:justify-between">
                              <input name="fullname" className="mx-auto font-sans p-2 mt-5 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-65 md:w-82 lg:w-70" type="text" required placeholder="Full Name"/>
                              <input name="email" className="mx-auto font-sans p-2 md:mt-5 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-65 md:w-82 lg:w-70" type="email" required placeholder="Email Address"/>
                            </div>
                            <div className="flex justify-center">
                              <input name="subject" className="font-sans p-2 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-65 md:w-170" type="text" required placeholder="Subject"/>
                            </div>
                            <div className="flex justify-center">
                              <textarea name="message" className="font-sans p-2 mx-2 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-65 md:w-170 h-40" required placeholder="Message"/>
                            </div>
                            <div className="flex justify-center">
                              <button type="submit" className="font-sans text-white text-xl bg-gradient-to-r from-purple-900 via-purple-800 to-violet-700 rounded-xl shadow-md shadow-white p-2 mb-5 hover:cursor-pointer">Send Message</button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              }
          </div>
        </div>
      </div>
    </>
  );
}
