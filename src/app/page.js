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
        <h1 className="select-none font-sans text-lg ml-70 flex justify-center text-white italic">- Curious mind with driven spirit</h1>
        <div className="mx-auto flex flex-col mt-5 w-250">
          <div className="mx-auto flex flex-row justify-between bg-gradient-to-b from-purple-800 via-indigo-900 to-purple-950 rounded-xl shadow-lg w-250 h-50">
            <Image className="select-none ml-5 mt-5 mb-5 rounded-xl shadow-xl" src="/Image.jpg" width={130} height={0} alt="profile-pic"></Image>
            <div>
              <h1 className="select-none font-sans mt-5 text-gray-400">EMAIL</h1>
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQXhxBmbrvfXQqxSCTsVMBvcHwFvWSsPNNXSZvjKjczzRttJsvBPzPzSvCRLMgDTtFfTl"><h1 className="font-sans text-white">tejeswarsakthidaran@gmail.com</h1></Link>
              <h1 className="select-none font-sans mt-2 text-gray-400">MOBILE</h1>
              <h1 className="font-sans text-white">+91 9342430433</h1>
              <h1 className="select-none font-sans mt-2 text-gray-400">UNIVERSITY</h1>
              <h1 className="font-sans text-white">SASTRA Deemed University</h1>
            </div>
            <div className="flex flex-col">
              <div className="bg-purple-950 mt-2 mr-4 p-2 rounded-xl w-15 hover:cursor-pointer">
                <Link href="https://www.linkedin.com/in/tejeswarsakthidaran09/"><Image className="select-none" src="/linkedin.png" width={50} height={10} alt="linkedin-pic"></Image></Link>
              </div>
              <div className="bg-purple-950 mt-2 mr-4 p-2 rounded-xl w-15 hover:cursor-pointer">
                <Link href="https://github.com/Tejeswar-16"><Image className="select-none mt-2 rounded-xl" src="/github.png" width={70} height={10} alt="girhub-pic"></Image></Link>
              </div>
              <div className="bg-purple-950 mt-2 mb-2 mr-4 p-2 rounded-xl w-15 hover:cursor-pointer">
                <a href="/Resume_Tejeswar S.pdf" target="_blank" rel="noopener noreferrer"><Image className="select-none rounded-xl" src="/download.png" width={70} height={10} alt="girhub-pic"></Image></a>
              </div>
            </div>
          </div>
          <div className="mb-5 select-none mt-5 bg-gradient-to-b from-purple-800 via-indigo-900 to-purple-950 rounded-xl shadow-lg w-250">
              <nav>
                <div className="flex flex-row justify-between border-b border-fuchsia-100 p-5 bg-gradient-to-r from-purple-900 via-purple-800 to-violet-700 rounded-xl">
                    <h1 onClick={() => {setAboutMe(true);setProjects(false);setContact(false);setResume(false)}} className={!aboutMe ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold text-2xl bg-violet-300 text-black rounded-xl p-2"}>About Me</h1>
                    <h1 onClick={() => {setProjects(true);setAboutMe(false);setContact(false);setResume(false)}} className={!projects ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold text-2xl bg-violet-300 text-black rounded-xl p-2"}>Projects</h1>
                    <h1 onClick={() => {setResume(true);setProjects(false);setContact(false);setAboutMe(false)}} className={!resume ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold text-2xl bg-violet-300 text-black rounded-xl p-2"}>Resume</h1>
                    <h1 onClick={() => {setContact(true);setProjects(false);setAboutMe(false);setResume(false)}} className={!contact ? "font-sans font-semibold text-fuchsia-200 hover:cursor-pointer text-xl hover:bg-violet-300 hover:text-black hover:rounded-xl transition duration-300 ease-in-out p-2" : "font-sans font-semibold text-2xl bg-violet-300 text-black rounded-xl p-2"}>Contact</h1>
                </div>
              </nav>
              {
                aboutMe && 
                  <div>
                  <div className="m-4">
                    <div className="rounded-xl shadow-xl p-4 border-t-[4px] border-purple-600 bg-[#381260]">
                      <p className="font-sans text-md text-justify text-white">Hello there! I'm Tejeswar, currently pursuing a Bachelor of Technology in Computer Science and Engineering at SASTRA Deemed University. I'm a passionate and driven aspiring software engineer.</p>
                      <br></br>
                      <p className="font-sans text-md text-justify text-white">Throughout my academic journey, I've developed proficiency in multiple programming languages such as C, C++, Java, JavaScript, and XML. I'm also experienced with frameworks and tools including React.js, Next.js, Tailwind CSS, Android (Java/XML), Firebase, Firestore, and relational databases like MySQL and Oracle.</p>
                      <br></br>
                      <p className="font-sans text-md text-justify text-white">I am eager to improve my skills and knowledge to contribute to innovative software development projects and continuously expand my expertise in this dynamic field.</p>
                    </div>
                  </div>
                  <div className="m-4">
                    <div className="rounded-xl shadow-xl p-4 border-t-[4px] border-purple-600 bg-[#381260]">
                      <h1 className="font-sans text-pink-100 font-semibold text-2xl">Education</h1>
                      <div className="flex flex-row justify-between">
                        <div className="bg-violet-900 p-4 rounded-xl shadow-lg shadow-white my-5 w-100">
                          <h1 className="font-sans font-semibold text-lg text-gray-100">B.Tech Computer Science & Engineering</h1>
                          <ol className="list-disc ml-5 mt-2">
                            <li className="font-sans text-md text-gray-100">August 2023 to Present</li>
                            <li className="font-sans text-md text-gray-100">SASTRA Deemed University</li>
                            <li className="font-sans text-md text-gray-100">CGPA - 9.6/10</li>
                            <li className="font-sans text-md text-gray-100">Tanjore</li>
                          </ol>
                        </div>
                        <div className="bg-violet-900 p-4 rounded-xl shadow-lg shadow-white my-5 w-100">
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
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col">
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">DLBTS - 2025</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">June 2025</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/dlbts-2025"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                  <Link href="https://dlbts-2025.vercel.app/"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">Try App</h1></Link>
                                </div>
                              </div>
                              <Image src="/dlbts.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">A Firebase - powered responsive web app for managing registration, analysis and judging of participants across 24
                                events for DLBTS - 2025 conducted by Sri Sathya Sai Seva Organisations (India), Kancheepuram South
                                District, Tamilnadu.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">AI Chatbot</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">December 2024</h1>
                                </div>
                              </div>
                              <Image src="/chatbot.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Built an AI ChatBot by integrating Gemini API (Application Programming Interface) to provide personalized and efficient assistance. This was in Java and XML built using Android Studio.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Bus Reservation System</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">June 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Bus_Reservation_System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/brs.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed a Bus Reservation System using Java Swing for the GUI and MySQL as the backend database. The system allows users to sign up, log in, and book tickets by selecting from a list of available buses. Users can enter passenger details for reservation. (Payment gateway integration is pending).</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-120 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Virtual Examination System</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">June 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Virtual-Examination-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/ves.png" alt="dlbts-pic" width={800} height={500}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed a Virtual Examination System using Java Swing for the GUI and MySQL as the backend. The system supports two roles: Admin and Student. Admins can add/remove students, create questions, and view results. Only students registered by the admin can log in and take exams. Both admins and students have access to view exam results.</p>
                            </div>
                            {/*********/}
                          </div>
                          <div className="flex flex-col">
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Expense Tracker Mobile Application</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">December 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Expense-Tracker"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>        
                                </div>
                              </div>
                              <Image src="/et.png" alt="dlbts-pic" width={500} height={500}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed an expense tracker app in Android Studio integrated with Firebase database. This app helps users maintain their expenses in an organized manner. Users can add, update, and delete expenses, as well as view their expense statistics using bar graphs and pie charts. The app also features an integrated AI chat system and a secure login to protect user data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Student Management System</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">September 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Student-Management-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/sms.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed using Java Swing integrated with MySQL database which allows the user to add student data into the database, retrieve from database, update the credentials of students and also delete the data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Employee Management System</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">February 2023</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Employee-Management-System"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/ems.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed an Employee Management System using Python Tkinter for the GUI and SQLite as the backend database. The system allows users to add, update, remove, and view employee records, offering a simple and effective interface for managing employee data.</p>
                            </div>
                            {/*********/}
                            <div className="bg-violet-900 rounded-xl shadow-lg shadow-white w-105 my-5">
                              <div className="flex flex-row justify-between p-4">
                                <div className="flex flex-col">
                                  <h1 className="font-sans font-semibold text-xl text-white">Calculator</h1>
                                  <h1 className="font-sans font-semibold text-md text-white">May 2024</h1>
                                </div>
                                <div className="flex justify-end">
                                  <Link href="https://github.com/Tejeswar-16/Calculator"><h1 className="font-sans bg-gray-900 rounded-xl shadow-xl p-2 mr-2 text-white hover:cursor-pointer transition-transform duration-300 hover:scale-110">GitHub</h1></Link>
                                </div>
                              </div>
                              <Image src="/calc.png" alt="dlbts-pic" width={500} height={400}></Image>
                              <p className="font-sans text-md text-justify text-white p-4">Developed a GUI-based Calculator using Java Swing that performs basic arithmetic operations such as addition, subtraction, multiplication, division, negation as well as advanced functions like square, square root, and reciprocal.</p>
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
                      Sairam
                  </div>
              }
              {
                contact &&
                  <div className="m-4">
                      <div className="bg-violet-900 rounded-xl shadow-lg shadow-white m-10">
                        <h1 className="flex justify-center font-sans font-bold pt-4 text-2xl text-violet-200">Let's Work Together!</h1>
                        <h1 className="flex justify-center font-sans text-lg text-violet-200 italic">Feel free to connect with me for collaborations or networking.</h1>
                        <div className="flex flex-row justify-between">
                          <input className="font-sans p-2 mt-5 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-70 ml-30" type="text" required placeholder="Full Name"/>
                          <input className="font-sans p-2 mt-5 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-70 mr-10" type="email" required placeholder="Email Address"/>
                        </div>
                        <input className="font-sans p-2 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-182 ml-30" type="text" required placeholder="Subject"/>
                        <textarea className="font-sans p-2 mb-5 text-xl text-indigo-300 border border-purple-300 rounded-xl w-182 h-40 ml-30" required placeholder="Message"/>
                        <div className="flex justify-center">
                          <button className="font-sans text-white text-xl bg-gradient-to-r from-purple-900 via-purple-800 to-violet-700 rounded-xl shadow-md shadow-white p-2 mb-5 hover:cursor-pointer">Send Message</button>
                        </div>
                      </div>
                  </div>
              }
          </div>
        </div>
      </div>
    </>
  );
}
