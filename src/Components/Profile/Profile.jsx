import React, { useContext } from 'react';
import { userPovider } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {

      const {  user } = useContext(userPovider)

      console.log(user)
    return (
        <section className="p-4">
            <div className="text-center">
                <img className="object-cover w-32 h-32 mx-auto mb-4 rounded-full" src={user?.photoURL} alt="Profile Picture" />
                <h2 className="text-xl font-bold text-gray-700 mb-1">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>
            </div>

            <div className="mt-6">
                <p className="mb-4 text-base text-gray-600">
                    Creation Time: {user?.metadata.creationTime}
                </p>
                <h2 className="mb-2 text-lg font-semibold text-gray-800">My UID:</h2>
                <p className="mb-4 text-base text-gray-500">
                    {user?.uid}
                </p>
                
            </div>
        </section>
    );
};

export default UserProfile;
