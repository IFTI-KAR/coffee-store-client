import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id, name, chef, price, taste, supplier, photo, details} = useLoaderData();

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        // send updated coffee to the db
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coffee updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    return (
        <div>
            <h1 className="text-4xl text-center mt-6 text-[#374151] font-bold font-rancho mb-8">
          Update Coffee Details
        </h1>
            <div className='bg-[#F4F3F0] p-12 md:p-24 my-9'>
            <div>
                <h2 className='text-lg text-[#374151] font-rancho mb-6'>Back to home</h2>

            </div>
            
            <form onSubmit={handleUpdateCoffee} className='mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className="label">Name</label>
                        <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" placeholder="Enter coffee name" />
                    </div>
                    <div>
                        <label className="label">Chef</label>
                        <input type="text" name="chef" defaultValue={chef} className="input input-bordered w-full" placeholder="Enter coffee chef" />
                    </div>
                    <div>
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered w-full" placeholder="Enter coffee supplier" />
                    </div>
                    <div>
                        <label className="label">Taste</label>
                        <input type="text" name="taste" defaultValue={taste} className="input input-bordered w-full" placeholder="Enter coffee taste" />
                    </div>
                    <div>
                        <label className="label">Price</label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" placeholder="Enter coffee price" />
                    </div>
                    <div>
                        <label className="label">Details</label>
                        <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className='mt-6'>
                    <label className="label">Photo</label>
                    <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" placeholder="Enter photo URL" />
                </div>
                <div className='mt-10'>
                    <input 
                        type="submit" 
                        value="Update Coffee" 
                        className='w-full bg-[#D2B48C] text-[#331A15] border border-black py-3 rounded text-xl font-rancho cursor-pointer hover:opacity-90 transition' 
                    />
                </div>
            </form>
        </div>
            
        </div>
    );
};

export default UpdateCoffee;