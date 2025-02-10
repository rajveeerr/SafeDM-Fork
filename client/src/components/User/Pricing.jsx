import React from 'react'
import Triple from '/src/assets/triple.png'
import Single from '/src/assets/single.png'
import Grid from '/src/assets/Grid.png';
import { Check, Circle } from 'lucide-react';

const Pricing = () => {
    return (
        <div
            className="min-h-screen w-full bg-[#1a1b23] relative flex items-center justify-center px-4 py-8 md:py-12 lg:py-16"
            style={{
                background: 'linear-gradient(179deg, #000 1.34%, #1A1B23 64.44%, #000 99.13%)',
                boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
                backdropFilter: 'blur(20px)'
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                    backgroundImage: `url(${Grid})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />
            <div className='relative z-10 w-full'>
                <div className="max-w-[700px] mx-auto text-center mb-4 sm:mb-10 md:mb-14 lg:mb-20 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white my-6 sm:my-8 md:my-10">
                        Experience{' '}
                        <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600 bg-clip-text">
                            Premium
                        </span>{' '}
                        Safety{' '}
                        <div className="relative inline-block">
                            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 bg-clip-text">
                                Features.
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="323"
                                height="19"
                                viewBox="0 0 323 19"
                                fill="none"
                                className="absolute -bottom-6 left-4 w-full scale-75 sm:scale-90 md:scale-100"
                            >
                                <path
                                    d="M0.18987 18.0002C90.956 6.55323 282.295 -10.3784 321.523 13.4712"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4">
                        Unlock advanced security, priority support, and exclusive tools to safeguard your online experience.
                    </p>
                </div>
                <div className='max-w-[1240px] pb-30 mx-auto grid md:grid-cols-2 gap-8 justify-items-center px-4'>
                    <div className='w-full max-w-[440px] bg-gradient-to-b from-gray-100/10 to-transparent backdrop-blur-sm border border-gray-700 shadow-lg flex flex-col rounded-xl my-8 md:my-0 p-4 sm:p-6 hover:scale-105 duration-300 relative overflow-hidden hover:border-purple-600'>
                        <img className='w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3' src={Single} alt="/" />
                        <h2 className='text-3xl sm:text-4xl font-bold text-white text-center py-4 sm:py-6'>Free Plan</h2>
                        <div className='text-left font-medium text-white'>
                            <p className='py-2 sm:py-3 items-center mx-4 sm:mx-8 border-t border-gray-700/50 mt-8 flex'><Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mx-2" />Real-time LinkedIn message screening</p>
                            <p className='py-2 sm:py-3 items-center mx-4 sm:mx-8 flex'><Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mx-2" />Basic message blocking</p>
                            <p className='py-2 sm:py-3 items-center mx-4 sm:mx-8 flex'><Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mx-2" />User blocking management</p>
                            <p className='py-2 sm:py-3 items-center mx-4 sm:mx-8 border-b border-gray-700/50 flex'><Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0 mx-2" />Message history tracking</p>
                        </div>
                        <button className='bg-white mx-auto w-full sm:w-[200px] px-6 py-3 my-6 rounded-lg text-gray-500 font-semibold hover:opacity-90 transition-all'>Start Trial</button>
                    </div>
                    <div className='w-full max-w-[440px] bg-gradient-to-b from-purple-600/10 to-transparent backdrop-blur-sm border border-gray-700 shadow-lg flex flex-col rounded-xl my-8 md:my-0 p-4 sm:p-6 hover:scale-105 duration-300 relative overflow-hidden hover:border-purple-600'>
                        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400'></div>
                        <div className='absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs px-3 py-1 rounded-full'>Premium</div>
                        <img className='w-12 h-12 sm:w-16 sm:h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3' src={Triple} alt="/" />
                        <h2 className='text-3xl sm:text-4xl font-bold text-white text-center py-4 sm:py-6'>Pro Plan</h2>
                        <div className='text-left my-4 sm:my-6 font-medium text-gray-300'>
                            <p className='py-2 items-center mx-4 sm:mx-8 flex border-t border-gray-700/50'><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mx-2" />Auto-save screenshot as evidence of harassment</p>
                            <p className='py-2 items-center mx-4 sm:mx-8 flex'><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mx-2" />Access to view Top hidden users with most tags</p>
                            <p className='py-2 items-center mx-4 sm:mx-8 flex'><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mx-2" />Priority support and more tag value</p>
                            <p className='py-2 items-center mx-4 sm:mx-8 flex border-b border-gray-700/50'><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mx-2" />More storage & extended message history</p>
                        </div>
                        <div className='w-full max-w-[350px] mx-auto grid text-white md:grid-cols-2 gap-4 sm:gap-6'>
                            <div className='border bg-gradient-to-r from-purple-600 to-purple-400 border-gray-700 shadow-lg flex flex-col rounded-xl my-4 text-center md:my-0 p-3'>
                                <div className=''>
                                    <p className='text-sm sm:text-md'>Monthly Plan</p>
                                    <p className='text-2xl sm:text-3xl font-bold'>2$</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm sm:text-md mt-3'>(Early bird)</p>
                                    <p className='text-2xl sm:text-3xl font-bold'>1$</p>
                                </div>
                            </div>
                            <div className='border bg-gradient-to-r from-purple-600 to-purple-400 border-gray-700 shadow-lg flex flex-col rounded-xl my-4 text-center md:my-0 p-3'>
                                <div className='py-3'>
                                    <p className='text-sm sm:text-md'>Annual Plan</p>
                                    <p className='text-2xl sm:text-3xl font-bold'>12$</p>
                                </div>
                                <div>
                                    <p className='bg-white text-purple-600 mt-6 sm:mt-8'>Get 50% OFF</p>
                                </div>
                            </div>
                        </div>
                        <button className='bg-white mx-auto w-full sm:w-[200px] px-6 py-3 my-6 rounded-lg text-purple-600 font-semibold hover:opacity-90 transition-all'>Get Premium</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Pricing;