import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {

    

    const {_id, name, price, chef, photo } = coffee;
    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        
        if (result.isConfirmed) {

            //deleting
            fetch(`https://coffee-store-server-three-weld.vercel.app/coffees/${_id}`,{
                method:'DELETE'
            })

            .then(res=>res.json())
            .then(data => {
    if (data.deletedCount) {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        const remainingCoffees = coffees.filter(cof => cof._id !== _id);
        setCoffees(remainingCoffees);
    }
});

            
        }
        });

    }

    return (
        <div className="bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 m-3 rounded-xl flex flex-col md:flex-row items-center justify-between p-6 gap-6 border border-[#ddd]">
            {/* Image */}
            <div className="w-[120px] h-[160px] flex-shrink-0">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-contain rounded-md"
                />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-1 text-left">
                <h3 className="text-xl font-bold text-[#403F3F]">Name: <span className="font-normal">{name}</span></h3>
                <p className="text-md text-[#5C5B5B] font-semibold">Chef: <span className="font-normal">{chef}</span></p>
                <p className="text-md text-[#5C5B5B] font-semibold">Price: <span className="font-normal">{price}</span></p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
                <Link to={`/coffee/${_id}`}>
                <button title="View"
                    className="bg-[#D2B48C] hover:scale-105 transition p-3 rounded-md text-white shadow">
                    <FaEye />
                </button>
                </Link>
                
                <Link to={`/updateCoffee/${_id}`}>
    <button title="Edit"
        className="bg-[#3C393B] hover:scale-105 transition p-3 rounded-md text-white shadow">
        <FaPen />
    </button>
</Link>

                <button onClick={()=> handleDelete(_id)} title="Delete"
                    className="bg-[#EA4744] hover:scale-105 transition p-3 rounded-md text-white shadow">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
