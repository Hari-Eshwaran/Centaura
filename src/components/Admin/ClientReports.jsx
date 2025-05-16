import { ArrowLeftIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Modal } from "./modal";

const reports = [
  {
    title: "Weekly User Activity",
    type: "User Activity",
    status: "Active",
    frequency: "Weekly",
    nextDate: "Oct 10, 2025",
    recipients: 2,
    actionText: "Pause",
  },
  {
    title: "Monthly Financial Summary",
    type: "Financial",
    status: "Active",
    frequency: "Monthly",
    nextDate: "Nov 1, 2025",
    recipients: 1,
    actionText: "Pause",
  },
  {
    title: "Daily System Status",
    type: "System",
    status: "Pause",
    frequency: "Daily",
    nextDate: "Oct 6, 2025",
    recipients: 2,
    actionText: "Activate",
  },
];

export const ClientReports = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activateSchedule, setActivateSchedule] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white bg-[url('/admin-dashboard.png')] bg-cover bg-center w-[1440px] h-[1024px] relative">
        {/* Back Button */}
        <button className="inline-flex px-4 py-3 absolute top-4 left-24 rounded-lg items-center justify-center gap-2 text-[#5b5b5b] text-base">
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        {/* Header Section */}
        <div className="flex flex-col w-[1248px] items-start gap-6 absolute top-[91px] left-24">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <img className="w-8 h-8" alt="Icon" src="calender.svg" />
                <h1 className="text-[32px] text-[#1e1e1e] font-medium">
                  Automate Client Reports
                </h1>
              </div>
              <div className="pl-10">
                <p className="text-[#5b5b5b] text-base">
                  Automate your report generation and delivery.
                </p>
              </div>
            </div>

            {/* New Schedule Button */}
            <button
                onClick={openModal}
                className="inline-flex px-4 py-3 bg-[#0f6cdd] rounded-lg text-white items-center gap-2"
                >
                <PlusIcon className="w-4 h-4" />
                <span className="text-base">New Schedule</span>
            </button>
          </div>

          {/* Reports Card Container */}
          <div className="flex flex-col items-start gap-4 p-6 w-full rounded-lg border border-[#d9d9d9] bg-white">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex flex-col h-[238px] flex-1 p-6 rounded-lg border border-[#d9d9d9] bg-white"
                >
                  {/* Top Header */}
                  <div className="flex items-start justify-between w-full px-2 py-4">
                    <div className="flex items-start gap-2">
                      <img
                        className="w-5 h-5"
                        alt="Icon"
                        src="sheet.svg"
                      />
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-base text-[#1e1e1e] font-medium">
                          {report.title}
                        </h3>
                        <p className="text-xs text-[#5b5b5b] whitespace-nowrap">
                          Type: {report.type}
                        </p>
                      </div>
                    </div>

                    {/* Badge */}
                    <div
                      className={`px-3 py-1.5 rounded-2xl text-[10px] font-medium ${
                        report.status === "Active"
                          ? "bg-[#1476181a] text-[#147618]"
                          : "bg-[#5c5c5c1a] text-[#5b5b5b]"
                      }`}
                    >
                      {report.status}
                    </div>
                  </div>

                  {/* Middle Section */}
                  <div className="flex justify-between items-center w-full text-[#5b5b5b] text-base mb-1">
                    <div className="flex items-center gap-1">
                      <img
                        className="w-6 h-6"
                        alt="Schedule Icon"
                        src="clock.svg"
                      />
                      <span>{report.frequency}</span>
                    </div>
                    <span>Next : {report.nextDate}</span>
                  </div>

                  <p className="text-sm text-[#5b5b5b] mb-4">
                    Recipients : {report.recipients}{" "}
                    {report.recipients === 1 ? "person" : "people"}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 w-full">
                    <button className="flex-1 px-4 py-2 border border-[#d9d9d9] rounded text-sm text-[#1e1e1e] font-medium hover:bg-gray-100">
                      {report.actionText}
                    </button>
                    <button className="px-4 py-2 border border-[#d9d9d9] rounded hover:bg-gray-100">
                      <Trash2Icon className="w-4 h-4 text-[#C00F0C]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
  <div className="p-6">
    <h2 className="text-xl font-semibold text-[#1e1e1e] mb-1">Create Scheduled Report</h2>
    <p className="text-sm text-[#5b5b5b] mb-4">Set up automated report generation and delivery.</p>

    {/* Report Name */}
    <label className="block text-sm mb-1 text-[#1e1e1e]">Report Name</label>
    <input
      type="text"
      placeholder="Enter Report Name"
      className="w-full border rounded-md p-2 mb-4 text-sm border-gray-300"
    />

    {/* Type and Frequency */}
    <div className="flex gap-4 mb-4">
      <div className="flex-1">
        <label className="block text-sm mb-1 text-[#1e1e1e]">Report Type</label>
        <select className="w-full border rounded-md p-2 text-sm border-gray-300">
          <option>Select Type</option>
          <option>User Activity</option>
          <option>Financial</option>
          <option>System</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm mb-1 text-[#1e1e1e]">Frequency</label>
        <select className="w-full border rounded-md p-2 text-sm border-gray-300">
          <option>Select Frequency</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
    </div>

    {/* Recipients */}
    <label className="block text-sm mb-1 text-[#1e1e1e]">Recipients</label>
    <input
      type="text"
      placeholder="email@example.in, another@example.in"
      className="w-full border rounded-md p-2 mb-1 text-sm border-gray-300"
    />
    <p className="text-xs text-[#5b5b5b] mb-4">Enter email addresses separated by commas.</p>

    {/* Toggle Switch */}
    <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 mb-6">
      <div>
        <p className="text-sm font-medium text-[#1e1e1e]">Activate Schedule</p>
        <p className="text-xs text-[#5b5b5b]">Start sending this report on schedule.</p>
    </div>
<label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={isModalOpen && activateSchedule}
    onChange={() => setActivateSchedule((prev) => !prev)}
  />
        <button
            type="button"
            onClick={() => setActivateSchedule((prev) => !prev)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
            activateSchedule ? 'bg-[#0f6cdd]' : 'bg-gray-200'
            }`}
        >
            <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                activateSchedule ? 'translate-x-6' : 'translate-x-0'
            }`}
            />
        </button>
</label>
    </div>
      {/* Action Buttons */}
      <div className="flex justify-between gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 w-1/2 rounded border text-sm text-gray-600 hover:bg-gray-100"
          >
          Cancel
        </button>
        <button className="px-4 py-2 w-1/2  rounded bg-[#0f6cdd] text-white text-sm font-medium hover:bg-[#0b56b2]">
          Create Schedule
        </button>
            </div>
  </div>
</Modal>

    </div>
  );
};
