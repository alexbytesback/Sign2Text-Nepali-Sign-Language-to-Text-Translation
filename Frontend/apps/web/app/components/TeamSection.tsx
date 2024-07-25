import React from 'react';

const TeamSection = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="text-center">
                <p className="text-gray-500 text-lg font-bold pb-3">Our Team</p>
                <h1 className="text-3xl md:text-5xl text-gray-800 font-extrabold pb-6">Meet the Exceptional Minds Behind Our Organization</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {/* Add team member cards here */}
            </div>
        </div>
    );
};

export default TeamSection;
