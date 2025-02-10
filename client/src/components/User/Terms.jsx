import React from 'react';
import Grid from '/src/assets/Grid.png';

const Terms = () => {
    return (
        <div
            className="min-h-screen w-full bg-[#1a1b23] relative flex items-center justify-center "
            style={{
                background: 'linear-gradient(179deg, #000 1.34%, #1A1B23 64.44%, #000 99.13%)',
                boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
                backdropFilter: 'blur(20px)'
            }}
        >

            <div
                className="absolute top-0 left-0 w-full h-full opacity-70"
                style={{
                    backgroundImage: `url(${Grid})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />

<div className='p-20'>
            <div className="max-w-4xl z-10 mx-auto px-16 py-20 bg-gradient-to-b from-purple-600/2 to-transparent backdrop-blur-sm border border-purple-700 shadow-lg flex flex-col rounded-xl my-8 md:my-0  sm:p-6"
            style={{
                border: '1px solid #7210FA',
                background: 'linear-gradient(238deg, #1A1928 3.38%, #09090D 39.75%, #180E26 48.42%, #07070B 57.09%, #040406 86.32%)',
                boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
                backdropFilter: 'blur(20px)'
              }}>
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-white mb-2">Terms of Use</h1>
                    <p className="text-gray-400">Effective Date: February 9, 2024</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-white text-md mb-16">
                        Your use of Safire is governed by the terms and conditions herein.
                        Please read these terms carefully before proceeding.
                    </p>

                    <h2 className="text-3xl font-bold text-purple-700 mt-8 pb-3 mb-6 border-b border-gray-700">About Safire</h2>
                    <p className="text-white text-md mb-16">
                        Safire is designed to help users document and manage unwanted
                        interactions on LinkedIn. Our primary focus is user privacy and security while providing
                        effective documentation and reporting tools.
                    </p>

                    <h2 className="text-3xl font-bold text-purple-700 mt-8 pb-3 mb-6 border-b border-gray-700">Data Privacy & Security</h2>
                    <div className="space-y-4 text-white text-md mb-16">
                        <p>
                            <strong className="text-white">Message Storage: </strong> We only save messages that
                            are detected as harassment or abuse. Your regular conversations and other messages
                            remain private and are not stored by our system.
                        </p>
                        <p>
                            <strong className="text-white">Data Protection: </strong> We do not share your
                            personal information, stored messages, or any other data with third parties. Your
                            privacy and security are our top priority.
                        </p>
                    </div>

                    <div className="mt-12 p-4 bg-gray-50 rounded-lg">
                        <p className="text-md text-gray-600">
                            For any questions about these terms or our privacy practices, please contact
                            our support team.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            );
};

            export default Terms;
