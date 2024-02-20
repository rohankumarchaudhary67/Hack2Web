export default function Join_Team() {
    return (
        <>
            <div className="min-h-screen event-image-bg pb-24 w-screen">
                <div className="flex flex-col items-center flex-1 mt-24 justify-center px-4 sm:px-0">
                    <h1 className="h1 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Join a Team</h1>
                    <div className="flex rounded-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 shadow-2xl shadow-[rgba(255,1,254,255)] p-8" data-aos="zoom-in-down">
                        <div className="w-full">
                            <div>

                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label htmlFor="" className="text-sm text-black font-semibold px-1">Select any - </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-black text-lg"></i></div>
                                            <select
                                                className="w-full -ml-10 pl3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none text-black"
                                            >
                                                <option value="" className=" text-black"></option>
                                                <option value="1st Year" className="text-black">Join a Team</option>
                                                <option value="2nd Year" className="text-black">Create your own team</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex -mx-3">
                                    <div className="w-full flex justify-center items-center px-3 mb-5">
                                        <button className="btn text-white bg-[#fe00fe] rounded-lg hover:bg-[#672f93] w-full mb-4 sm:w-auto sm:mb-0 shadow-xl shadow-black hover:shadow-gray-600">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}