'use client'
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import 'react-toastify/dist/ReactToastify.css'

export default function Register_Yourself() {

    const router = useRouter();
    const [progress, setProgress] = useState(0);

    const [registrationData, setRegistrationData] = React.useState({
        firstName: "",
        lastName: "",
        collegeName: "",
        collegeYear: "",
        email: "",
        contactNumber: "",
        githubUsername: ""
    })

    const submitRegistration = async () => {
        if (registrationData.firstName == "") {
            toast.error("Please provide your first name...");
        } else if (registrationData.lastName == "") {
            toast.error("Please provide your last name...");
        } else if (registrationData.collegeName == "") {
            toast.error("Please provide your college name...");
        } else if (registrationData.collegeYear == "") {
            toast.error("Please select your college year...");
        } else if (registrationData.email == "") {
            toast.error("Please provide your email...");
        } else if (registrationData.contactNumber == "") {
            toast.error("Please provide a contact number...");
        } else if (registrationData.githubUsername == "") {
            toast.error("Please provide your github username...");
        }
        else {
            try {
                setProgress(30);
                const response = await axios.post("/api/registration", registrationData);
                console.log(response.data);
                setProgress(90);
                router.push("/join-team")
            } catch (error: any) {
                console.log(error.message);
                toast.error(error.message);
            }
        }
    }

    return (
        <>
            <LoadingBar
                color="#fe00fe"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <ToastContainer />
            <div className="min-h-screen event-image-bg pb-24 w-screen">
                <div className="flex flex-col items-center flex-1 mt-24 justify-center px-4 sm:px-0">
                    <h1 className="h1 text-center mb-8 color-heading" data-aos="zoom-in-up">Register Yourself</h1>
                    <div className="flex rounded-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 shadow-2xl shadow-[rgba(255,1,254,255)] p-8" data-aos="zoom-in-down">
                        <div className="w-full">
                            <div>
                                <div className="flex flex-col md:flex-row -mx-3">
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none" value={registrationData.firstName} onChange={(e) => setRegistrationData({ ...registrationData, firstName: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none " value={registrationData.lastName} onChange={(e) => setRegistrationData({ ...registrationData, lastName: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">College Name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none" value={registrationData.collegeName} onChange={(e) => setRegistrationData({ ...registrationData, collegeName: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">College Year</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-black text-lg"></i></div>
                                            <select
                                                className="w-full -ml-10 pl3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none text-black" value={registrationData.collegeYear} onChange={(e) => setRegistrationData({ ...registrationData, collegeYear: e.target.value })}
                                            >
                                                <option value="" className=" text-black"></option>
                                                <option value="1st Year" className="text-black">1st Year</option>
                                                <option value="2nd Year" className="text-black">2nd Year</option>
                                                <option value="3rd Year" className="text-black">3rd Year</option>
                                                <option value="4th Year" className="text-black">4th Year</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none" value={registrationData.email} onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Contact Number</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none" value={registrationData.contactNumber} onChange={(e) => setRegistrationData({ ...registrationData, contactNumber: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">GitHub Username</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-3 text-black pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none" value={registrationData.githubUsername} onChange={(e) => setRegistrationData({ ...registrationData, githubUsername: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full flex justify-center items-center px-3 mb-5">
                                        <button className="btn text-white bg-[#fe00fe] rounded-lg hover:bg-[#672f93] w-full mb-4 sm:w-auto sm:mb-0 shadow-xl shadow-black hover:shadow-gray-600" onClick={submitRegistration}>Continue to Team</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}