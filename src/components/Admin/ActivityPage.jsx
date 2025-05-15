import React from "react";
import { ActivityIcon, SearchIcon } from "lucide-react";

export const ActivityPage = () => {
  const activities = [
    {
      id: 1,
      action: "User Login",
      user: "Anna Thomas",
      details: "Logged in from Chrome on Windows",
      timestamp: "2025-01-15 14:30:00",
      type: "auth"
    },
    {
      id: 2,
      action: "Report Generated",
      user: "John Doe",
      details: "Generated Q4 Performance Report",
      timestamp: "2025-01-15 13:45:00",
      type: "report"
    },
    {
      id: 3,
      action: "User Invited",
      user: "Sarah Wilson",
      details: "Invited new analyst (mike@xyz.com)",
      timestamp: "2025-01-15 12:15:00",
      type: "user"
    },
    {
      id: 4,
      action: "Settings Updated",
      user: "Anna Thomas",
      details: "Updated security settings",
      timestamp: "2025-01-15 11:30:00",
      type: "settings"
    },
    {
      id: 5,
      action: "Data Export",
      user: "Emily Brown",
      details: "Exported client data report",
      timestamp: "2025-01-15 10:45:00",
      type: "data"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-[#1e1e1e]">Activity Logs</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search activities..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f6cdd] focus:border-transparent"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-lg border border-[#b1b1b1] p-4 space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-[#0071da33] rounded-full flex items-center justify-center">
              <ActivityIcon className="w-5 h-5 text-[#0f6cdd]" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg text-[#1e1e1e]">{activity.action}</h3>
                <span className="text-sm text-gray-500">{activity.timestamp}</span>
              </div>
              <p className="text-[#5b5b5b] mt-1">{activity.details}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-[#0f6cdd]">{activity.user}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{activity.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};