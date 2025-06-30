import React from 'react';
import Swal from 'sweetalert2';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router';
const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee)

        fetch('https://coffee-store-server-three-weld.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Coffee added successfully!"
                });
                form.reset()
            }
        })
    };

    return (
        <div className='bg-[#F4F3F0] p-12 md:p-24 my-9'>
            <div>
                <Link to={'/'}><h2 className='text-lg text-[#374151] font-rancho mb-6 flex items-center'><IoMdArrowRoundBack />Back to home</h2></Link>
                

            </div>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-rancho text-[#374151]'>Add New Coffee</h1>
                <p className='text-[#1B1A1A99] max-w-3xl mx-auto'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
            </div>
            <form onSubmit={handleAddCoffee} className='mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input input-bordered w-full" placeholder="Enter coffee name" />
                    </div>
                    <div>
                        <label className="label">Chef</label>
                        <input type="text" name="chef" className="input input-bordered w-full" placeholder="Enter coffee chef" />
                    </div>
                    <div>
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" className="input input-bordered w-full" placeholder="Enter coffee supplier" />
                    </div>
                    <div>
                        <label className="label">Taste</label>
                        <input type="text" name="taste" className="input input-bordered w-full" placeholder="Enter coffee taste" />
                    </div>
                    <div>
                        <label className="label">Price</label>
                        <input type="text" name="price" className="input input-bordered w-full" placeholder="Enter coffee price" />
                    </div>
                    <div>
                        <label className="label">Details</label>
                        <input type="text" name="details" className="input input-bordered w-full" placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className='mt-6'>
                    <label className="label">Photo</label>
                    <input type="text" name="photo" className="input input-bordered w-full" placeholder="Enter photo URL" />
                </div>
                <div className='mt-10'>
                    <input 
                        type="submit" 
                        value="Add Coffee" 
                        className='w-full bg-[#D2B48C] text-[#331A15] border border-black py-3 rounded text-xl font-rancho cursor-pointer hover:opacity-90 transition' 
                    />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
