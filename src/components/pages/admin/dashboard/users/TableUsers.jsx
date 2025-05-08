const TableUsers = ({ users }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Profile Picture
            </th><th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {users.length > 0 ? users.map((user, index) => (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">
              {user.firstName}
            </td><td className="px-6 py-4">
            {user.lastName}
          </td><td className="px-6 py-4">
            {user.email}
          </td><td className="px-6 py-4">
            {user.isAdmin ? <span className='text-red-500' >admin</span> : <span className='text-green-500 font-semibold' >user</span> }
          </td><td className="px-6 py-4">
            {user.isBlocked ? <span className='text-red-500' >blocked</span> : <span className='text-green-500 font-semibold' >active</span> }
          </td><td className="px-6 py-4">
            {user.phoneNumber}
          </td><td className="px-6 py-4">
            <img className="h-10 w-10" src={user.profileImage} alt="" />
          </td><td className="px-6 py-4">
            <button className="bg-blue-500 p-2 ml-2 rounded-sm text-white font-semibold hover:cursor-pointer">Update</button>
            <button className="bg-red-500 p-2 ml-2 rounded-sm text-white font-semibold hover:cursor-pointer">Delete</button>
          </td>
          </tr>
        )): (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">No Users Found !</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
