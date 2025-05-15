import React from "react";
import { SearchIcon, PlusIcon } from "lucide-react";
import "../../css/user.css"


const Metrics = () => {
  const metrics = [
    { title: "Total Users", value: 5, unit: "Users" },
    { title: "Active", value: 3 },
    { title: "Pending", value: 1 },
    { title: "Admins", value: 2, unit: "Admins" }
  ];

  return (
    <section className="py-4">
      <h2 className="text-2xl font-medium mb-4">Key Metrics</h2>
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="p-5 bg-white rounded-lg border">
            <div className="text-gray-600 text-xl">{metric.title}</div>
            <div className="text-3xl font-bold mt-2">
              {metric.value} {metric.unit && <span className="text-xl font-normal text-gray-600">{metric.unit}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const UserTable = () => {
  const users = [
    { name: "Anna Thomas", email: "anna@example.com", role: "Admin", status: "Active", lastLogin: "Today" },
    { name: "Jake Wilson", email: "jake@example.com", role: "Admin", status: "Active", lastLogin: "Yesterday" },
    { name: "Sarah Miller", email: "sarah@example.com", role: "Viewer", status: "Inactive", lastLogin: "3 days ago" },
    { name: "Ethan Brown", email: "ethan@example.com", role: "Viewer", status: "Pending", lastLogin: "Never" }
  ];

  return (
    <div className="bg-white rounded-lg ">
      <div className="p-4 flex justify-between items-center gap-2">
        <div className="flex-1">
          <div className="flex gap-2 items-center border rounded-lg p-2">
            <SearchIcon className="text-gray-400" />
            <input placeholder="Search by name or email" className="border-none outline-none w-full" />
          </div>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-lg p-2">
            <option>Role: All</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Status: All</option>
          </select>
        </div>
      </div>

      <table className="w-full rounded-lg border border-separate custom-table">
        <thead className="bg-gray-50">
          <tr >
            <th className="text-left p-4">NAME</th>
            <th className="text-left p-4">ROLE</th>
            <th className="text-left p-4">STATUS</th>
            <th className="text-left p-4">LAST LOGIN</th>
            <th className="text-right p-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i} className="border-t">
              <td className="p-4">
                <div>{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' :
                  user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {user.status}
                </span>
              </td>
              <td className="p-4">{user.lastLogin}</td>
              <td className="p-4 text-right">
                <button className="text-gray-600 hover:text-gray-900">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 flex justify-between items-center border-t">
        <div>Showing 4 of 4 users</div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded">Previous</button>
          <button className="px-4 py-2 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

const UsersPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <div className="p-6">
        <div className="mb-6 bg-white p-6 rounded-lg border">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-medium">Users</h1>
              <p className="text-xl text-gray-600 mt-2">Manage user access and permissions</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <PlusIcon size={16} />
              <span>Invite Employee</span>
            </button>
          </div>
        </div>
        <Metrics />
        <div className="mt-6">
          <UserTable />
        </div>
      </div>
    </main>
  );
};

export { UsersPage };