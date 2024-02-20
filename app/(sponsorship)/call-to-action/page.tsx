'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function Call_To_Action() {

    const router = useRouter();
    const [progress, setProgress] = useState(0)

    const [sponsorQuery, setSponsorQuery] = React.useState({
        firstName: "",
        lastName: "",
        positionInCompany: "",
        contactEmail: "",
        contactNumber: "",
        companyName: "",
        sponsorType: "",
        query: ""
    })

    const submitQuery = async () => {

        if (sponsorQuery.firstName == "") {
            toast.error("Provide a first name...");
        }
        else if (sponsorQuery.lastName == "") {
            toast.error("Provide a last name...")
        }
        else if (sponsorQuery.positionInCompany == "") {
            toast.error("Provide your position in your company...")
        }
        else if (sponsorQuery.contactEmail == "") {
            toast.error("Provide your contact email...")
        }
        else if (sponsorQuery.contactNumber == "") {
            toast.error("Provide your contact number...")
        }
        else if (sponsorQuery.companyName == "") {
            toast.error("Provide your company name...")
        }
        else if (sponsorQuery.sponsorType == "") {
            toast.error("Select a sponsor type...")
        }
        else {
            try {
                setProgress(30);
                const response = await axios.post("/api/sponsorquery", sponsorQuery);
                console.log(response.data);
                setProgress(90);
                router.push("/sponsors")
            } catch (error: any) {
                console.log(error.message);
                toast.error(error.message);
            }
        }
    }

    return (
        <>
            <LoadingBar
                color='#fe00fe'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <ToastContainer />
            <div className=" event-image-bg pb-24 w-screen">
                <div className="flex flex-col items-center flex-1 mt-24 justify-center px-4 sm:px-0">
                    <h1 className="h1 mb-8 color-heading text-center" data-aos="zoom-in-up">Sponsor's Query</h1>
                    <div className="flex rounded-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 shadow-2xl shadow-[rgba(255,1,254,255)] p-8" data-aos="zoom-in-down">
                        <div className="w-full">
                            <div>
                                <div className="flex flex-col md:flex-row -mx-3">
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="firstName" className="text-sm text-black font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-black text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" id="firstName" value={sponsorQuery.firstName} onChange={(e) => setSponsorQuery({ ...sponsorQuery, firstName: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" value={sponsorQuery.lastName} onChange={(e) => setSponsorQuery({ ...sponsorQuery, lastName: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Postion in Company</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" value={sponsorQuery.positionInCompany} onChange={(e) => setSponsorQuery({ ...sponsorQuery, positionInCompany: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Contact Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" value={sponsorQuery.contactEmail} onChange={(e) => setSponsorQuery({ ...sponsorQuery, contactEmail: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Contact Number</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" value={sponsorQuery.contactNumber} onChange={(e) => setSponsorQuery({ ...sponsorQuery, contactNumber: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Company Name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg text-black border-2 border-gray-200 outline-none" value={sponsorQuery.companyName} onChange={(e) => setSponsorQuery({ ...sponsorQuery, companyName: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Query for which sponsorship</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-black text-lg"></i></div>
                                            <select
                                                className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none text-black"
                                                value={sponsorQuery.sponsorType}
                                                onChange={(e) => setSponsorQuery({ ...sponsorQuery, sponsorType: e.target.value })}
                                            >
                                                <option value="" selected className="text-black"></option>
                                                <option value="title" className="text-black">Title Sponsorship</option>
                                                <option value="co-title" className="text-black">Co-Title Sponsorship</option>
                                                <option value="powered-by" className="text-black">Powered By Sponsorship</option>
                                                <option value="co-powered-by" className="text-black">Co-Powered By Sponsorship</option>
                                                <option value="premium-elite" className="text-black">Premium Elite</option>
                                                <option value="pro-tech-elite" className="text-black">Pro-tech Elite</option>
                                                <option value="innovate-plus" className="text-black">Innovate Plus</option>
                                                <option value="tech-start-basic" className="text-black">Tech-Start Basic</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Your Query?</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <textarea className="w-full -ml-10 pl-3 pr-3 py-2 text-black rounded-lg border-2 border-gray-200 outline-none" value={sponsorQuery.query} onChange={(e) => setSponsorQuery({ ...sponsorQuery, query: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full flex justify-center items-center px-3 mb-5">
                                        <button className="btn text-white bg-[#fe00fe] rounded-lg hover:bg-[#672f93] w-full mb-4 sm:w-auto sm:mb-0 shadow-xl shadow-black hover:shadow-gray-600" onClick={submitQuery}>Submit Query</button>
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