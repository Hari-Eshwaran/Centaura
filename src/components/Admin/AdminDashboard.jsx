import React, { useState } from "react";
import { 
  PlusIcon, 
  BellIcon, 
  SettingsIcon, 
  ClockIcon, 
  DatabaseIcon, 
  UserCogIcon, 
  UsersIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  HomeIcon
} from "lucide-react";
import { UsersPage } from "./UsersPage";
import { ActivityPage } from "./ActivityPage";
import { AnalyticsPage } from "./AnalyticsPage";

export const AdminDashboard = () => {
  const [selectedNav, setSelectedNav] = useState("admin");

  // Navigation options data
  const navOptions = [
    { id: "admin", label: "Admin", active: true },
    { id: "users", label: "Users", active: false },
    { id: "activity", label: "Activity Logs", active: false },
    { id: "analytics", label: "Analytics", active: false },
  ];

  const users = [
    {
      id: 1,
      name: "Anna Thomas",
      email: "anna@centaura.com",
      role: "Admin",
      roleColor: "#0f6cdd",
      status: "Active",
      statusColor: "#147618",
      statusBgColor: "#1476181a",
      lastLogin: "Today",
      actions: ["View"],
    },
    {
      id: 2,
      name: "Jake Wilson",
      email: "jake@example.com",
      role: "Admin",
      roleColor: "#0f6cdd",
      status: "Active",
      statusColor: "#147618",
      statusBgColor: "#1476181a",
      lastLogin: "Yesterday",
      actions: ["View"],
    },
    {
      id: 3,
      name: "Sarah Miller",
      email: "sarah@example.com",
      role: "Viewer",
      roleColor: "green",
      status: "Inactive",
      statusColor: "#1e1e1e",
      statusBgColor: "#1e1e1e1a",
      lastLogin: "3 days ago",
      actions: ["View"],
    },
    {
      id: 4,
      name: "Ethan Brown",
      email: "ethan@example.com",
      role: "Viewer",
      roleColor: "green",
      status: "Pending",
      statusColor: "#fcbf24",
      statusBgColor: "#fcbf241a",
      lastLogin: "Never",
      actions: ["View", "Resend"],
    },
    {
      id: 5,
      name: "Maria Garcia",
      email: "maria@example.com",
      role: "Viewer",
      roleColor: "green",
      status: "Pending",
      statusColor: "#fcbf24",
      statusBgColor: "#fcbf241a",
      lastLogin: "Never",
      actions: ["View", "Resend"],
    },
  ];


  const usermetrics = [
    { id: 1, title: "Total Users", value: 5, unit: "Users" },
    { id: 2, title: "Active", value: 3, unit: "" },
    { id: 3, title: "Pending", value: 1, unit: "" },
    { id: 4, title: "Admins", value: 2, unit: "Admins" },
  ];





  // Metrics data
  const metrics = [
    {
      title: "Total Users",
      icon: <UsersIcon className="h-4 w-4 text-blue-600" />,
      value: "5",
      label: "Users",
    },
    {
      title: "Pending Access",
      icon: <UserCogIcon className="h-4 w-4 text-blue-600" />,
      value: "2",
      label: "Invites",
    },
    {
      title: "Last Login",
      icon: <ClockIcon className="h-4 w-4 text-blue-600" />,
      value: "Today",
      label: "",
    },
    {
      title: "Roles Breakdown",
      icon: <DatabaseIcon className="h-4 w-4 text-blue-600" />,
      value: "",
      label: "",
      breakdown: [
        { value: "2", label: "Admins" },
        { value: "3", label: "Analysts" },
      ],
    },
  ];

  // Quick action items data
  const quickActions = [
    {
      id: 1,
      title: "Invite Employee",
      iconUrl: "/component-26.svg",
      isPrimary: true,
    },
    {
      id: 2,
      title: "Manage Access Policies",
      iconUrl: "/component-26-2.svg",
      isPrimary: false,
    },
    {
      id: 3,
      title: "Admin Delegation",
      iconUrl: "/component-26-4.svg",
      isPrimary: false,
    },
    {
      id: 4,
      title: "Automate Client Reports",
      iconUrl: "/component-26-3.svg",
      isPrimary: false,
    },
  ];

  // Usage overview data
  const usageItems = [
    {
      id: 1,
      title: "Storage",
      details: "(2GB/10GB)",
      percentage: 20,
      color: "bg-[#5146e6]",
      textColor: "text-[#5146e6]",
    },
    {
      id: 2,
      title: "API Requests",
      details: "(850/1000)",
      percentage: 85,
      color: "bg-[#9334e8]",
      textColor: "text-[#9334e8]",
    },
    {
      id: 3,
      title: "Users",
      details: "(5/15)",
      percentage: 33,
      color: "bg-[#19a249]",
      textColor: "text-[#19a249]",
    },
  ];

  // Activity data
  const recentActivities = [
    {
      title: "Invited ethan@example.in",
      user: "Anna Thomas",
      date: "Oct 5, 2025 - 10:24 AM",
    },
    {
      title: "Changed role of jake@example.in to Admin",
      user: "Anna Thomas",
      date: "Oct 5, 2025 - 3:15 AM",
    },
    {
      title: "Updated Company Information",
      user: "Anna Thomas",
      date: "Oct 5, 2025 - 11:30 AM",
    },
  ];

  // Analytics data
  const analyticsData = [
    {
      title: "Analysts Actively Prospecting",
      value: "4",
      unit: "Users",
      change: "25% from last week",
      increasing: true,
    },
    {
      title: "Avg. Usage Time",
      value: "42",
      unit: "min",
      change: "12% from last week",
      increasing: true,
    },
    {
      title: "Prospect Reports Uploaded",
      value: "28",
      unit: "",
      change: "5% from last week",
      increasing: false,
    },
    {
      title: "Client Reports Generated",
      value: "14",
      unit: "",
      change: "30% from last week",
      increasing: true,
    },
  ];

  const renderAdminContent = () => (
    <>
      {/* Welcome Section */}
      <div className="w-full flex items-start gap-8 p-6 bg-white border border-[#b1b1b1] rounded-lg m-4">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-[32px] font-medium text-[#1e1e1e] mt-[-1.00px]">
              Welcome, Anna
            </h2>
            <p className="text-xl text-[#757575] font-normal">
              You're the Admin of Centaura. Invite analysts or manage
              access to prospecting tools.
            </p>
          </div>

          <button 
            className="bg-[#0f6cdd] text-white px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-[#0d5ec2] transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
            <span className="text-base font-normal">
              Invite Employee
            </span>
          </button>
        </div>
      </div>

      {/* Key Metrics Section */}
      <section className="flex flex-col w-full gap-2 p-4">
        <h2 className="font-medium text-[#1e1e1e] text-2xl">Key Metrics</h2>
        <div className="flex flex-wrap items-center gap-3.5 w-full">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] border border-solid border-[#b1b1b1] bg-white rounded-lg p-5"
            >
              <div className="flex flex-col items-start gap-[11px]">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-8 h-8 bg-[#0071da33] rounded-full flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <span className="font-normal text-[#5b5b5b] text-xl">
                    {metric.title}
                  </span>
                </div>

                {metric.breakdown ? (
                  <div className="flex items-start gap-2">
                    {metric.breakdown.map((item, idx) => (
                      <div key={idx} className="flex items-baseline gap-1.5">
                        <span className="font-bold text-black text-[32px]">
                          {item.value}
                        </span>
                        <span className={`font-normal ${idx === 0 ? "text-[#5b5b5b] text-xl" : "text-[#1e1e1e] text-base leading-6"}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-bold text-black text-[32px]">
                      {metric.value}
                    </span>
                    {metric.label && (
                      <span className="font-normal text-[#5b5b5b] text-xl">
                        {metric.label}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions and Usage Overview */}
      <div className="flex gap-4 p-4">
        {/* Quick Actions */}
        <div className="w-[336px] bg-white border border-solid border-[#b1b1b1] rounded-lg">
          <div className="flex flex-col items-start gap-6 py-4">
            <div className="flex flex-col items-start gap-4 px-4 w-full">
              <h2 className="font-medium text-[#1e1e1e] text-2xl">
                Quick Actions
              </h2>

              <div className="flex flex-col items-start gap-3 w-full">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    className={`flex items-center gap-2 px-4 py-3 w-full justify-start h-auto rounded-lg ${
                      action.isPrimary
                        ? "bg-[#0f6cdd] text-white hover:bg-[#0d5ec2]"
                        : "border border-solid border-[#d9d9d9] text-[#5b5b5b] hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <img src={action.iconUrl} alt="" className="w-4 h-4" />
                    <span className="font-normal text-base">
                      {action.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 px-4 w-full">
              <h2 className="font-medium text-[#1e1e1e] text-2xl">
                Usage Overview
              </h2>

              <div className="flex flex-col gap-4 w-full">
                {usageItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-1 items-start w-full"
                  >
                    <div className="flex justify-between items-start w-full">
                      <div className="inline-flex items-start gap-1">
                        <span className="font-medium text-[#5c5c5cf5] text-sm text-right">
                          {item.title}
                        </span>
                        <span className="font-medium text-[#5c5c5cf5] text-sm text-right">
                          {item.details}
                        </span>
                      </div>
                      <span className={`font-medium text-sm text-right ${item.textColor}`}>
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="relative w-full h-2">
                      <div className="w-full h-2 bg-[#d9d9d9] rounded-lg" />
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-lg ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Analytics */}
        <div className="flex-1">
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white border border-[#b1b1b1] rounded-lg">
              <div className="flex flex-row items-center justify-between p-4 pb-0">
                <h2 className="font-medium text-2xl text-[#1e1e1e]">
                  Recent Activity
                </h2>
                <button className="bg-[#0f6cdd] text-white px-4 py-2 rounded-lg hover:bg-[#0d5ec2] transition-colors">
                  <span className="text-sm font-normal">View All</span>
                </button>
              </div>
              <div className="p-4">
                <div className="flex flex-col items-start gap-6">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 px-3 py-2 w-full"
                    >
                      <div className="relative w-10 h-10 bg-[#0071da33] rounded-full flex items-center justify-center">
                        <HomeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-start justify-center gap-0.5">
                        <div className="font-medium text-xl text-[#1e1e1e] whitespace-nowrap">
                          {activity.title}
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="font-normal text-sm text-[#5b5b5b]">
                            {activity.user}
                          </div>
                          <div className="font-normal text-sm text-[#5b5b5b]">
                            {activity.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Analytics */}
            <div className="bg-white border border-[#b1b1b1] rounded-lg">
              <div className="flex flex-row items-center justify-between p-4 pb-0">
                <h2 className="font-medium text-2xl text-[#1e1e1e]">
                  Quick Analytics
                </h2>
                <div className="opacity-0">
                  <button className="bg-[#0f6cdd] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm font-normal">View All</span>
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {analyticsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-[11px] px-5 py-4 rounded-lg bg-[#f5f5f5]"
                    >
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 bg-[#0071da33] rounded-full flex items-center justify-center">
                          <HomeIcon className="w-4 h-4" />
                        </div>
                        <div className="font-normal text-xl text-[#5b5b5b] whitespace-nowrap">
                          {item.title}
                        </div>
                      </div>
                      <div className="flex items-end justify-between w-full">
                        <div className="flex items-baseline gap-1.5">
                          <div className="font-bold text-[32px] text-black">
                            {item.value}
                          </div>
                          {item.unit && (
                            <div className="font-normal text-xl text-[#5b5b5b] whitespace-nowrap">
                              {item.unit}
                            </div>
                          )}
                        </div>
                        <div className="flex items-end gap-1">
                          <div
                            className={`w-5 h-5 flex items-center justify-center rounded-full ${
                              item.increasing ? "bg-[#1476184c]" : "bg-[#c00f0c4c]"
                            }`}
                          >
                            {item.increasing ? (
                              <ArrowUpIcon className="w-[6.67px] h-[9.92px] text-[#147618]" />
                            ) : (
                              <ArrowDownIcon className="w-[6.67px] h-[9.92px] text-[#bf0f0c]" />
                            )}
                          </div>
                          <div
                            className={`font-medium text-base ${
                              item.increasing ? "text-[#147618]" : "text-[#bf0f0c]"
                            }`}
                          >
                            {item.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    switch (selectedNav) {
      case "users":
        return <UsersPage />;
      case "activity":
        return <ActivityPage />;
      case "analytics":
        return <AnalyticsPage />;
      default:
        return renderAdminContent();
    }
  };

  return (
    <main className="bg-[#f3f5f6] min-h-screen w-full">
        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-24 py-4 w-full bg-white border-b border-[#757575] sticky top-0 z-10">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <img className="logo" alt="Component" src="logo.svg" />
           
          </div>

          {/* Navigation toggle group */}
                <div className="border border-solid border-[#757575] rounded-[100px] p-0.5 flex">
                {navOptions.map((option) => (
                  <button
                  key={option.id}
                  onClick={() => setSelectedNav(option.id)}
                  className={`flex items-center justify-center gap-1 px-3 py-2 rounded-[100px] ${
                    selectedNav === option.id
                    ? "bg-[#0f6cdd] text-[#e6e6e6] font-medium"
                    : "bg-transparent text-[#757575] font-normal"
                  }`}
                  >
                  {option.id === "admin" && (
                    <HomeIcon className="w-5 h-5" />
                  )}
                  {option.id === "users" && (
                    <UsersIcon className="w-5 h-5" />
                  )}
                  {option.id === "activity" && (
                    <ClockIcon className="w-5 h-5" />
                  )}
                  {option.id === "analytics" && (
                    <DatabaseIcon className="w-5 h-5" />
                  )}
                  <span className={`text-base ${selectedNav === option.id ? "font-medium" : "font-normal"}`}>
                    {option.label}
                  </span>
                  </button>
                ))}
                </div>

                {/* User section */}
          <div className="flex items-center gap-2">
            {/* Notification button */}
            <button className="flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#757575] hover:bg-gray-50">
              <BellIcon className="w-6 h-6 text-[#757575]" />
            </button>

            {/* Settings button */}
            <button className="flex items-center justify-center p-2 bg-white rounded-full border border-solid border-[#757575] hover:bg-gray-50">
              <SettingsIcon className="w-6 h-6 text-[#757575]" />
            </button>

            {/* User profile */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border border-solid border-[#757575] overflow-hidden">
                <img src="google.svg" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-normal text-[#757575] text-base">
                  Anna Thomas
                </span>
                <span className="font-normal text-[#757575] text-[10px]">
                  Admin
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-[#f3f5f6] w-full max-w-[1440px] mx-auto flex flex-col">

        {/* Main Content */}
        {renderContent()}
      </div>
    </main>
  );
};