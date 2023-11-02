import React, { useContext, useEffect, useState } from "react";
import { hero } from "../../assets";
import { indexpic } from "../../assets";
import SearchForm from "../../components/form/SearchForm";

import { Link } from "react-router-dom";


const Hero = () => {
  
  return (
   <section className="hero flex  justify-center min-h-screen" >


<div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ indexpic }  />
    <div>
      <h1 className="text-5xl font-bold text-orange-500 -mt-5">Know Your Neighborhood</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <SearchForm />
      
      <Link to="/login" className="btn bg-orange-500 text-white m-5">
        Add Store
      </Link>
    </div>
  </div>  
</section>

  );
};

export default Hero;
