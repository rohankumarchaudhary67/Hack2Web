import Link from "next/link";

export default function Sponsors() {
    return (
        <>
            <div className="pt-20 flex flex-col items-center justify-center event-image-bg">

                <h1 className="h1 mt-8 mx-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500" data-aos="zoom-in-up">Sponsorship Plans</h1>

                <div className="flex mt-12 md:mt-24 justify-center items-center gap-8 flex-wrap">

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Title Sponsor</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">2,00,000</span></div>
                                <div className="text-indigo-200">Only give to a Single Company</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>VIP Treatment for any related person to the company.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Booth for the interaction to the participants of the hackathon and student of the colleges.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotional Video on our Social Media Platform and with our Social Media Partner.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on every kit and kit items like pen, diary, Band hands, Id Cards, etc..</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Providing a session for the person related to the company (if any) of 5 to 10 minutes in Opening and Closing ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on stickers for laptop and accessories of participants and team members..</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on official merchandise of the hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>All Benefits of partner sponsor.</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Co-Title Sponsor</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">1,75,000</span></div>
                                <div className="text-indigo-200">Only give to a single Company</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>VIP Treatment for any related person to the company.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Booth for the interaction to the participants of the hackathon and student of the colleges.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on every kit and kit items like pen, diary, Band hands, Id Cards, etc..</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Providing a session for the person related to the company (if any) of 5 to 10 minutes in Opening and Closing ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on stickers for laptop and accessories of participants and team members..</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on official merchandise of the hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>All Benefits of partner sponsor.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Promotional Video on our Social Media Platform and with our Social Media Partner.</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Powered By</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">1,25,000</span></div>
                                <div className="text-indigo-200">Give upto 2 Companies</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Booth for the interaction to the participants of the hackathon and student of the colleges.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotional Video on our Social Media Platform and with our Social Media Partner.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on stickers for laptop and accessories of participants and team members..</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on official merchandise of the hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>All Benefits of partner sponsor.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>VIP Treatment for any related person to the company.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on every kit and kit items like pen, diary, Band hands, Id Cards, etc..</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Providing a session for the person related to the company (if any) of 5 to 10 minutes in Opening and Closing ceremony.</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Co-Powered By</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">1,00,000</span></div>
                                <div className="text-indigo-200">Give upto 2 Companies</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Booth for the interaction to the participants of the hackathon and student of the colleges.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotional Video on our Social Media Platform and with our Social Media Partner.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on official merchandise of the hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>All Benefits of partner sponsor.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>VIP Treatment for any related person to the company.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on every kit and kit items like pen, diary, Band hands, Id Cards, etc..</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Providing a session for the person related to the company (if any) of 5 to 10 minutes in Opening and Closing ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on stickers for laptop and accessories of participants and team members..</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                </div>

                <h1 className="h1 mt-16 md:mt-32 text-center md:px-0 px-2" data-aos="zoom-in-up">Partner Sponsorship Plans</h1>

                <div className="flex my-16 justify-center items-center gap-8 flex-wrap">

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Premium Elite</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">40,000</span></div>
                                <div className="text-indigo-200">Sponsorship name give on the basis of company portfolio.</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on banner and flex.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo will be on social media post and on prize cards of winning ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotion on social media platform of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Poster in every hall and venue of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on winning kit of hackathon</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">ProTech Elite</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">30,000</span></div>
                                <div className="text-indigo-200">Sponsorship name give on the basis of company portfolio.</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on banner and flex.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo will be on social media post and on prize cards of winning ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotion on social media platform of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Poster in every hall and venue of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on winning kit of hackathon</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">Innovate Plus</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">20,000</span></div>
                                <div className="text-indigo-200">Sponsorship name give on the basis of company portfolio.</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on banner and flex.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo will be on social media post and on prize cards of winning ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Promotion on social media platform of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Poster in every hall and venue of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on winning kit of hackathon</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <div className="relative flex flex-col h-full bg-indigo-700 rounded-lg shadow-lg p-5 mx-2 md:mx-0" data-aos="zoom-in">
                            <div className="absolute top-0 right-5">
                                <div className="text-xs inline-flex font-semibold bg-green-100 text-[#bd10cc] rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Avilable Now</div>
                            </div>
                            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
                                <div className="mb-2">
                                    <svg width="42" height="44" >
                                        <defs>
                                            <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                                                <stop stop-color="#5EEAD4" offset="0%" />
                                                <stop stop-color="#2DD4BF" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                                                <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                                                <stop stop-color="#F0FDFA" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                                                <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                                                <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                                            </linearGradient>
                                            <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="d" fill="#fff">
                                                <use />
                                            </mask>
                                            <use fill="url(#b)" />
                                            <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" mask="url(#d)" />
                                            <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" mask="url(#d)" />
                                            <path fill-opacity=".32" fill="#F0FDFA" mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                                        </g>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-indigo-50 leading-snug mb-2">TechStart Basics</h3>
                                <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">₹</span><span className="text-4xl text-indigo-50">10,000</span></div>
                                <div className="text-indigo-200">Sponsorship name give on the basis of company portfolio.</div>
                            </header>
                            <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo on banner and flex.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Brand logo will be on social media post and on prize cards of winning ceremony.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Promotion on social media platform of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Poster in every hall and venue of hackathon.</span>
                                </li>
                                <li className="flex items-center">
                                    <img src="./svg/cross.png" className="h-3 mr-3" alt="" />
                                    <span>Brand logo on winning kit of hackathon</span>
                                </li>
                            </ul>
                            <Link href="/call-to-action"><button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-[#b815ca] hover:bg-[#672f93] text-white focus:outline-none focus-visible:ring-2">Call To Action</button></Link>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}