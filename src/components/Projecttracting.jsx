import React from 'react'
import Header from './Header'
import Bar from './bar'
import { Link, useNavigate } from "react-router-dom";

import Card from './card'


const Projecttracting = () => {
  return (
    <div className="">
      <Header />
      <Bar />

      <div className="border-2 border-gray-400 m-5 lg:m-20 md:m-14  rounded-lg p-3 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">


         <Link to='/project-tracker'>
      
        <Card />
      </Link>
          <Card />
          <Card />
         
        </div>
      </div>
    </div>
  );
};

export default Projecttracting;
