import { ArrowLeftIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";


export const AdminDelegation = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Anna Thomas",
      email: "anna@centaura.com",
      status: "Active",
      role: "Admin",
      action: "Primary Admin",
      isPrimary: true,
    },
    {
      name: "Jake Miller",
      email: "jake@example.com",
      status: "Active",
      role: "Admin",
      action: "Demote to Viewer",
      isPrimary: false,
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "Active",
      role: "Analyst",
      action: "Promote to Admin",
      isPrimary: false,
    },
    {
      name: "Michael Chen",
      email: "michael@example.com",
      status: "Active",
      role: "Analyst",
      action: "Promote to Admin",
      isPrimary: false,
    },
    {
      name: "Elena Rodriguez",
      email: "elena@example.com",
      status: "Active",
      role: "Analyst",
      action: "Promote to Admin",
      isPrimary: false,
    },
  ];

  const delegationInfoCards = [
    {
      title: "Full Access",
      description:
        "Administrators have complete access to all features, settings, and user data.",
    },
    {
      title: "User Management",
      description:
        "Admins can invite, remove, and modify access levels for all users.",
    },
    {
      title: "Shared Responsibility",
      description:
        "Multiple admins can distribute workload and responsibilities across the team.",
    },
  ];

return (
    <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full max-w-[1440px] min-h-[1024px] relative">
            <button className="flex items-center gap-2 absolute top-4 left-24 text-base text-[#5b5b5b] font-normal">
                <ArrowLeftIcon className="w-4 h-4" />
                Back to Dashboard
            </button>

            <div className="flex flex-col w-[1248px] items-start gap-6 absolute top-[91px] left-24">
                {/* Header Section */}
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <img src="useradd.svg" alt="Component" className="w-8 h-8" />
                            <h1 className="text-[32px] font-medium text-[#1e1e1e]">
                                Admin Delegation
                            </h1>
                        </div>
                        <p className="pl-10 text-base text-[#5b5b5b] font-normal">
                            Share administrative responsibilities with trusted team members.
                        </p>
                    </div>

                    <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center bg-[#0f6cdd] text-white px-4 py-2 rounded-md text-sm font-medium"
                            >
                            <PlusCircleIcon className="w-4 h-4 mr-2" />
                            Add Admin
                    </button>

                </div>

                {/* Info Cards */}
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full bg-white border border-gray-200 rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-medium text-[#1e1e1e]">What is Admin Delegation?</h2>
                            <p className="text-sm text-[#5b5b5b]">
                                Understanding the responsibilities and capabilities of administrators.
                            </p>
                        </div>
                        <div className="p-4 flex gap-4">
                            {delegationInfoCards.map((card, index) => (
                                <div key={index} className="flex-1 bg-neutral-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-medium text-[#1e1e1e] mb-1.5">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-[#5b5b5b]">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Members Table */}
                    <div className="w-full bg-white border border-gray-200 rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-medium text-[#1e1e1e]">Team Members & Permissions</h2>
                            <p className="text-sm text-[#5b5b5b]">
                                Manage administrative access for your team.
                            </p>
                        </div>
                        <div className="overflow-x-auto p-4">
                            <table className="min-w-full text-left border border-[#d9d9d9] rounded-lg overflow-hidden">
                                <thead className="bg-[rgba(0,0,0,0.04)]">
                                    <tr className="border-b border-[#ebebeb]">
                                        <th className="px-4 py-2 text-sm font-medium text-[#1e1e1e] tracking-[0.84px]">NAME</th>
                                        <th className="px-4 py-2 text-sm font-medium text-[#1e1e1e] tracking-[0.84px]">EMAIL</th>
                                        <th className="px-4 py-2 text-sm font-medium text-[#1e1e1e] tracking-[0.84px]">STATUS</th>
                                        <th className="px-4 py-2 text-sm font-medium text-[#1e1e1e] tracking-[0.84px]">ROLE</th>
                                        <th className="px-4 py-2 text-sm font-medium text-[#1e1e1e] tracking-[0.84px] text-right">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teamMembers.map((member, index) => (
                                        <tr key={index} className="border-b border-[#ebebeb]">
                                            <td className="px-4 py-3 text-base text-[#1e1e1e] font-normal">
                                                {member.name}
                                            </td>
                                            <td className="px-4 py-3 text-base text-[#1e1e1e] font-normal">
                                                {member.email}
                                            </td>
                                            <td className="px-4 py-3 text-base text-[#1e1e1e] font-normal">
                                                <div className="flex items-center gap-1">
                                                    <img className="w-5 h-5 " src="Green-Tick.svg" />
                                                    {member.status}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-base text-[#1e1e1e] font-normal">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className={`w-4 h-4 ml-[-2px] rounded-lg ${
                                                            member.role === "Admin"
                                                                ? "bg-[#0f6cdd]"
                                                                : "bg-red-500 border-2 border-white"
                                                        }`}
                                                    />
                                                    {member.role}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-right text-base font-normal">
                                                <a href="#"
                                                    className={
                                                        member.isPrimary
                                                            ? "text-[#5b5b5b]"
                                                            : "text-[#1e1e1e]"
                                                    }
                                                >
                                                    {member.action}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 z-50">
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
                {/* Modal in top right */}
                <div className="absolute top-8 right-8">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Invite a New Administrator</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            This will give the user full administrative access to the company portal.
                        </p>

                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter Email Address..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-400"
                        />

                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 text-sm rounded mb-6">
                            <strong>Security Notice:</strong> Administrators have full access to company data and settings.
                            Only invite trusted team members.
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
                            >
                                Send Invite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

    </div>
);
};
