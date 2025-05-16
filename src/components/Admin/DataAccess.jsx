import { ArrowLeftIcon } from "lucide-react";
import React from "react";

// Data for access level cards
const accessLevels = [
  {
    id: "full",
    letter: "F",
    title: "Full Access",
    description: "Can view all data, export reports, and manage users",
  },
  {
    id: "standard",
    letter: "S",
    title: "Standard",
    description: "Can view most data and export basic reports",
  },
  {
    id: "limited",
    letter: "L",
    title: "Limited",
    description: "Can only view non-sensitive data with no export rights",
  },
  {
    id: "custom",
    letter: "C",
    title: "Custom",
    description: "Customized access based on specific needs",
  },
];

// User data for the table
const users = [
  {
    name: "Anna Thomas",
    email: "anna@centaura.com",
    role: "Admin",
    isAdmin: true,
    accessLevel: "Full Access",
  },
  {
    name: "Jake Miller",
    email: "jake@example.com",
    role: "Admin",
    isAdmin: true,
    accessLevel: "Full Access",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Analyst",
    isAdmin: false,
    accessLevel: "Standard",
  },
  {
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Analyst",
    isAdmin: false,
    accessLevel: "Standard",
  },
  {
    name: "Elena Rodriguez",
    email: "elena@example.com",
    role: "Analyst",
    isAdmin: false,
    accessLevel: "Standard",
  },
];

// Available access level options
const accessOptions = ["Full Access", "Standard", "Limited", "Custom"];

export const DataAccess = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] min-h-[1024px] relative p-6">
        <button
          className="flex items-center gap-2 absolute top-5 left-24 text-[#5b5b5b] text-base"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex flex-col w-full max-w-[1248px] mx-auto mt-[60px] gap-6">
          <header className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                alt="Policy icon"
                src="shield.svg"
              />
              <h1 className="font-medium text-[#1e1e1e] text-[32px]">
                Data Access Policies
              </h1>
            </div>
            <p className="pl-10 text-[#5b5b5b] text-base">
              Manage what data users can access and what actions they can perform.
            </p>
          </header>

          <section className="flex flex-col gap-4">
            {/* Access Levels Card */}
            <div className="border border-gray-200 rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Access Levels Explained</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Manage what data users can access and what actions they can perform.
                </p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {accessLevels.map((level) => (
                  <div
                    key={level.id}
                    className="flex items-center gap-3 p-4 bg-neutral-100 rounded"
                  >
                    <div className="w-11 h-11 bg-[#0f6cdd4c] rounded-full flex items-center justify-center">
                      <span className="text-[#0f6cdd] text-xl">
                        {level.letter}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-medium text-[#1e1e1e] text-lg">
                        {level.title}
                      </h3>
                      <p className="text-[#5b5b5b] text-xs">
                        {level.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Access Card */}
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">User Access Configuration</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Set appropriate access levels for your team members.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left">
                  <thead className="bg-[rgba(0,0,0,0.04)]">
                    <tr>
                      <th className="px-6 py-3 text-sm font-medium tracking-[0.84px]">NAME</th>
                      <th className="px-6 py-3 text-sm font-medium tracking-[0.84px]">EMAIL</th>
                      <th className="px-6 py-3 text-sm font-medium tracking-[0.84px]">ROLE</th>
                      <th className="px-6 py-3 text-sm font-medium tracking-[0.84px]">ACCESS LEVEL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-base font-normal">{user.name}</td>
                        <td className="px-6 py-4 text-base font-normal">{user.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-4 h-4 ml-[-2px] rounded-lg ${
                                user.isAdmin
                                  ? "bg-[#0f6cdd]"
                                  : "bg-red-500 border-2 border-white"
                              }`}
                            />
                            <span className="text-base font-normal">{user.role}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            defaultValue={user.accessLevel}
                            className="min-w-[15rem] px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f6cdd]"
                          >
                            <option disabled>Select access level</option>
                            {accessOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6">
                <button className="bg-[#0f6cdd] hover:bg-[#0f6cdd]/90 text-white px-4 py-2 rounded font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
