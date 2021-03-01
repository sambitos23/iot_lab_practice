import React from "react";

export default class LandingPage extends React.Component{
    render(){
        return(
            <div className="bg-gray-200 font-sans flex flex-col items-center">
                <header className="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
                    <div className="max-w-4xl w-full">
                        <div className="flex justify-between items-center text-red-400">
                            <svg className="h-9 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 32"><path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z"/></svg>
                            <button type="button" className="text-gray-200 sm:hidden hover:text-gray-400">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                            </button>
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl text-indigo-100">Want to learn Tailwind CSS?</h1>
                            <p className="text-sm text-indigo-200">Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step.</p>
                            
                            <div className="relative mt-4 flex">
                                <div >
                                    <a href="#" className="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 py-2 text-xs rounded-full uppercase">
                                        Enroll Now
                                    </a>
                                </div>

                                <div className="absolute right-0 bg-white rounded-full flex items-center justify-center p-5 border-4 border-pink-500">
                                    <svg className="w-16 h-16" width="256px" height="154px" viewBox="0 0 256 154" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                            <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
                                                <stop stop-color="#2298BD" offset="0%"></stop>
                                                <stop stop-color="#0ED7B5" offset="100%"></stop>
                                            </linearGradient>
                                            <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </header>

                
                <main className="mt-16 w-full flex flex-col items-center">
                    <div className="max-w-4xl mx-4">
                        <h2 className="font-bold text-xl text-indigo-700 pb-1 border-b border-indigo-600">How It Works</h2>
                        <p className="text-sm mt-4 text-gray-600">Tailwind is designed for rapid development of modern applications. At its core, it is a robust mobile-first design system built with developer experience in mind. After using Tailwind CSS, you will find it difficult to go back to use anything else. Learn all about it in this all-inclusive course.</p>

                        <h2 className="font-bold text-xl text-indigo-700 pb-1 mt-8 border-b border-indigo-600">Avantages</h2>

                        <div className="flex flex-col sm:flex-row sm:-mx-2">
                            <div className="sm:w-1/3 mt-4">
                                <div className="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                                    <div className="bg-gray-200 text-indigo-700 w-16 p-2 rounded-full">
                                        <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                                    </div>
                                    <div className="mt-4 font-bold">No Custom CSS</div>
                                    <div className="text-center mt-2 text-gray-600 text-sm">Tailwind's advanced class extraction will leave your project free of custom CSS.</div>
                                </div>
                            </div>

                            <div class="mt-4 sm:w-1/3">
                                <div class="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                                    <div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                        <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z"/></svg>
                                    </div>
                                    <div class="mt-4 font-bold">Developer Experience</div>
                                    <div class="text-center mt-2 text-gray-600 text-sm">Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing.</div>
                                </div>
                            </div>
                            
                            <div class="mt-4 sm:w-1/3">
                                <div class="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                                    <div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                        <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z"/></svg>
                                    </div>
                                    <div class="mt-4 font-bold">Mobile Friendly</div>
                                    <div class="text-center mt-2 text-gray-600 text-sm">Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy.</div>
                                </div>
                                </div>
                            </div>
                        </div> 


                        <div class="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
                            <h2 className="font-bold text-xl text-gray-400">Sign up to download the free PDF</h2>
                            
                            <form className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0 " action="#" method="post">
                                <div className="flex flex-col md:flex-row md:-mx-2">
                                    <label for="first_name" className="sr-only">First Name</label>
                                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="First name" id="first_name"/>
                                    
                                    <label for="last_name" className="sr-only">Last Name</label>
                                    <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Last name" id="last_name"/>
                                </div>
                                <div class="flex flex-col md:flex-row  md:-mx-2">
                                    <label for="email" class="sr-only">Email address</label>
                                    <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="email" placeholder="john@email.com" id="email"/>
                                    
                                    <label for="title" class="sr-only">Title</label>
                                    <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Your title" id="title"/>
                                </div>
                                <div class="flex flex-col md:flex-row md:-mx-2">
                                    <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Create account</button>
                                </div>
                            </form>
                        </div>   
                </main>


                <footer className="bg-gray-800 w-full text-center pb-8">
                    <p className="text-xs text-gray-600 font-light">Copyright © 2021 Scrimba</p>
                </footer>
            </div>
        )
    }
}