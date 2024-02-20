import Link from "next/link";

export default function Event() {
    return (
        <>
            <div className="event-image-bg h-screen w-screen pt-20 flex flex-col justify-center items-center md:px-24">
                <div className="flex justify-center items-center flex-col md:px-24">
                    <h1 className="my-4 text-4xl md:text-6xl text-white opacity-75 font-bold leading-tight text-center md:text-left" data-aos="zoom-in">
                        <span className="text-white">
                            Hack2Web
                        </span>
                    </h1>
                    <h1 className="h1 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">Code, Create & Conquer</h1>
                    <p className="md:text-2xl mb-8 text-center pt-6 text-blue-300 px-6 md:px-24" data-aos="fade-up-right">
                        A Hackathon designed to bring together web development enthusiasts and creative minds from various colleges and universities.
                    </p>
                </div>
                <div className="flex justify-center items-center flex-col md:px-24">
                    <h1 className="h1 text-4xl">Event Details</h1>
                    <div className="flex flex-col justify-between">
                        <div className="flex justify-between items-start mt-2" data-aos="zoom-out-left">
                            <h1 className="px-2 text-xl md:text-2xl font-bold">Date: </h1>
                            <h1 className="px-2 text-xl md:text-2xl">02 & 03 May, 2024</h1>
                        </div>
                        <div className="flex justify-between items-start mt-2" data-aos="zoom-out-right">
                            <h1 className="px-2 text-xl md:text-2xl font-bold">Venue: </h1>
                            <h1 className="px-2 text-xl md:text-2xl">SLIET, Punjab, India</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="/register-yourself">
                        <button
                            className="btn text-white bg-[#fe00fe] rounded-lg hover:bg-[#672f93] w-full mb-4 sm:w-auto sm:mb-0 shadow-xl shadow-black hover:shadow-gray-600 mt-12"
                            type="button"
                        >
                            Register Now
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}