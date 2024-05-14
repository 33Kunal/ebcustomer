import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm  overflow-hidden shadow-lg bg-white border-[2px] m-2 rounded-lg">
           
            <div className="px-6 py-4 ">

                <div className='flex gap-x-10  justify-between'>
                <div>

                <div className="font-bold text-xl mb-2">Project ID</div>
                <p className="text-gray-700 text-base">
                    Ristesh Pathak
                </p>

                </div>

                <div>
                <div className="font-bold text-xl  mb-2">Product</div>
                <p className="text-gray-700 text-base">
                    Wind Turbine
                </p>
                </div>
                </div>
            <div>
                <div className="font-bold text-xl mt-4 mb-2">Status</div>
                <p className="text-gray-700 text-base">
                    Approved by admin
                </p>

                </div>
               
            </div>
        </div>
    );
};

export default Card;
