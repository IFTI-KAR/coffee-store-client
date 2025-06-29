import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import {
  FaEye,
  FaPen,
  FaTrash,
  FaTimesCircle,
  FaUserEdit,
  FaUserAlt,
} from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null); // 'view' or 'edit'

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6b21a8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
            if (data.deletedCount) {
              Swal.fire('Deleted!', 'User has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedUser = {
      ...selectedUser,
      name: form.name.value,
      address: form.address.value,
      email: form.email.value,
      phone: form.phone.value,
      photo: form.photo.value,
    };

    fetch(`http://localhost:3000/users/${selectedUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUsers(
            users.map((u) => (u._id === selectedUser._id ? updatedUser : u))
          );
          Swal.fire('Updated!', 'User information updated.', 'success');
        }
        setModalType(null);
        setSelectedUser(null);
      });
  };

  return (
    <div className="min-h-screen  px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#6b3e26] mb-8">
          ☕ Coffee Users: <span className="text-[#c47f41]">{users.length}</span>
        </h2>

        <div className="overflow-x-auto shadow-xl rounded-xl bg-white border border-[#e0c2a2]">
          <table className="table w-full text-sm">
            <thead className="bg-[#f2d2b4] text-[#5c3823] uppercase">
              <tr>
                <th>#</th>
                <th>User Info</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-[#fff4e7]">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-4">
                      <img
                        className="w-12 h-12 rounded-full ring ring-[#c47f41]"
                        src={user.photo}
                        alt={user.name}
                      />
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.address}</p>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="text-center space-x-2">
                    <button
                      title="View"
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        setSelectedUser(user);
                        setModalType('view');
                      }}
                    >
                      <FaEye />
                    </button>
                    <button
                      title="Edit"
                      className="text-green-600 hover:text-green-800"
                      onClick={() => {
                        setSelectedUser(user);
                        setModalType('edit');
                      }}
                    >
                      <FaPen />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl relative">
              <button
                className="absolute top-2 right-2 text-2xl text-red-500 hover:text-red-700"
                onClick={() => {
                  setSelectedUser(null);
                  setModalType(null);
                }}
              >
                <FaTimesCircle />
              </button>

              {modalType === 'view' ? (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#6b3e26]">
                    <FaUserAlt className="text-[#c47f41]" /> Viewing{' '}
                    {selectedUser.name}
                  </h3>
                  <img
                    src={selectedUser.photo}
                    alt={selectedUser.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#c47f41]"
                  />
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Phone:</strong> {selectedUser.phone}</p>
                  <p><strong>Address:</strong> {selectedUser.address}</p>
                </div>
              ) : (
                <form onSubmit={handleEditSubmit}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#6b3e26]">
                    <FaUserEdit className="text-[#6b21a8]" /> Edit{' '}
                    {selectedUser.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <input
                      type="text"
                      name="name"
                      defaultValue={selectedUser.name}
                      placeholder="Name"
                      className="border px-4 py-2 rounded"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      defaultValue={selectedUser.email}
                      placeholder="Email"
                      className="border px-4 py-2 rounded"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      defaultValue={selectedUser.phone}
                      placeholder="Phone"
                      className="border px-4 py-2 rounded"
                      required
                    />
                    <input
                      type="text"
                      name="photo"
                      defaultValue={selectedUser.photo}
                      placeholder="Photo URL"
                      className="border px-4 py-2 rounded"
                    />
                    <textarea
                      name="address"
                      defaultValue={selectedUser.address}
                      placeholder="Address"
                      className="border px-4 py-2 rounded"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
