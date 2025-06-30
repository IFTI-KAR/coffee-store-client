import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

const CoffeeDetails = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    fetch(`https://coffee-store-server-three-weld.vercel.app/coffees/${id}`)
      .then(res => res.json())
      .then(data => setCoffee(data));
  }, [id]);

  if (!coffee) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="bg-[#F4F3F0] min-h-screen p-8 md:p-24">
      <Link to="/" className="text-lg font-rancho text-[#374151] flex items-center gap-2 mb-10">
        ← Back to home
      </Link>

      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-10 rounded-lg shadow-md">
        <img src={photo} alt={name} className="w-72 h-auto rounded-md shadow" />
        
        <div>
          <h2 className="text-3xl font-rancho text-[#331A15] mb-4">Niceties</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Chef:</strong> {chef}</p>
          <p><strong>Supplier:</strong> {supplier}</p>
          <p><strong>Taste:</strong> {taste}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Details:</strong> {details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
