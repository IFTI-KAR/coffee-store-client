import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import backk from '../assets/images/more/1.png';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees,setCoffees]=useState(initialCoffees)
    return (
        <div
            className="min-h-screen bg-fixed bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${backk})`,
            }}
        >
            {/* Optional semi-transparent overlay */}
            <div className="min-h-screen bg-white/80 px-4 py-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-brown-800 mb-8">
                        --- Sip & Savor --- <br /> Our Popular Products
                    </h1>
                    <div className="flex justify-center mb-8">
                        <Link to="/addCoffee">
  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
    Add Coffee
  </button>
</Link>

                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coffees.map(coffee => (
                            <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
