import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";

export const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("profile-information");
  const [switches, setSwitches] = useState({
    "Email Notifications": true,
    "New User Alerts": true,
    "Weekly Reports": true,
    "Security Alerts": true
  });

  const notificationSettings = [
    {
      title: "Email Notifications",
      description: "Recieve notifications via email.",
      enabled: true,
    },
    {
      title: "New User Alerts",
      description: "Get notified when a new user joins.",
      enabled: true,
    },
    {
      title: "Weekly Reports",
      description: "Receive weekly activity summary.",
      enabled: true,
    },
    {
      title: "Security Alerts",
      description: "Important security notifications.",
      enabled: true,
    },
  ];

  const menuItems = [
    {
      icon: "/component-26.svg",
      label: "Dashboard Settings",
    },
    {
      icon: "/component-26-1.svg",
      label: "Report History",
    },
  ];

  const handleSwitchToggle = (title) => {
    setSwitches(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[auto] relative">
        {/* Back Button */}
        <button className="px-4 py-3 absolute top-4 left-24 rounded-lg inline-flex items-center justify-center gap-2 overflow-hidden hover:bg-gray-100 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          <span className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-base text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Back to Dashboard
          </span>
        </button>

        {/* Profile Section */}
            <div className="flex flex-col w-[336px] items-center gap-8 absolute top-[107px] left-24">
              <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
                <div className="relative w-[172px] h-[172px] rounded-[100px] overflow-hidden [background:linear-gradient(137deg,rgba(73,56,210,1)_0%,rgba(180,231,238,1)_100%),linear-gradient(0deg,rgba(15,108,221,1)_0%,rgba(15,108,221,1)_100%)]">
                  <div className="absolute top-[57px] left-[58px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#e7e7e7] text-5xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
                AT
                  </div>
                </div>

                <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-[32px] tracking-[0] leading-[normal]">
                Anna Thomas
                  </div>
                  <div className="relative w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                anna@centura.com
                  </div>
                </div>

                <span className="px-3 py-1.5 bg-[#0f6cdd33] rounded-2xl text-[#0f6cdd] text-[13px] font-medium">
                  Administrator
                </span>
              </div>

              <div className="flex flex-col items-start gap-3 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t border-[#d9d9d9]">
                <div className="h-px w-full bg-[#d9d9d9]" />
                {menuItems.map((item, index) => (
                  <button
                key={index}
                className="flex items-center gap-2 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#d9d9d9] hover:bg-gray-50 transition-colors justify-start"
                  >
                <div className={`relative w-4 h-4 bg-[url(${item.icon})] bg-[100%_100%]`} />
                <span className="text-[#5b5b5b] text-base whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
                  {item.label}
                </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="absolute top-[107px] left-[536px]">
              <div className="inline-flex items-center p-1 bg-[#e6e6e6] rounded-lg border border-solid border-[#757575]">
                {["profile-information", "notification-preferences", "security-settings"].map((tab) => (
                  <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center justify-center gap-1 px-3 py-2 rounded transition-all
                  ${activeTab === tab 
                    ? "bg-white shadow-[0px_2px_8px_#63636333] font-medium text-[#1e1e1e]" 
                    : "text-[#757575]"}`}
                  >
                <span className="relative w-fit font-normal text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            {activeTab === "profile-information" && (
              <div className="flex flex-col w-[624px] items-start gap-6 absolute top-[198px] left-[536px]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-2xl tracking-[0] leading-[normal]">
                  Profile Information
                </h2>
                <div className="flex  gap-4 w-full">
                <div className="flex flex-col gap-4 w-1/2">
                  <div>
                <label className="block text-[#5b5b5b] text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  value="Anna Thomas"
                  readOnly
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded bg-gray-50 text-[#1e1e1e]"
                />
                  </div>
                  <div>
                <label className="block text-[#5b5b5b] text-sm mb-1">Email</label>
                <input
                  type="email"
                  value="anna@centura.com"
                  readOnly
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded bg-gray-50 text-[#1e1e1e]"
                />
                  </div>
                  </div>
                  <div className="flex flex-col gap-4 w-1/2">
                  <div>
                <label className="block text-[#5b5b5b] text-sm mb-1">Phone No.</label>
                <input
                  type="text"
                  value="(123) 456-7890"
                  readOnly
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded bg-gray-50 text-[#1e1e1e]"
                />
                  </div>
                  <div>
                <label className="block text-[#5b5b5b] text-sm mb-1">Company</label>
                <input
                  type="text"
                  value="Centaura"
                  readOnly
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded bg-gray-50 text-[#1e1e1e]"
                />
                </div>
                </div>
                </div>
              </div>
            )}


            {activeTab === "notification-preferences" && (
              <div className="flex flex-col w-[624px] items-start gap-6 absolute top-[198px] left-[536px]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-2xl tracking-[0] leading-[normal]">
                  Notification Preferences
                </h2>

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {notificationSettings.map((setting, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 relative self-stretch w-full flex-[0_0_auto] rounded border border-solid border-[#d9d9d9] bg-white"
                  >
                    <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-lg tracking-[0] leading-[normal]">
                    {setting.title}
                      </h3>
                      <p className="relative self-stretch [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-xs tracking-[0] leading-[normal]">
                    {setting.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSwitchToggle(setting.title)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                    switches[setting.title] ? 'bg-[#0f6cdd]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      switches[setting.title] ? 'translate-x-6' : 'translate-x-0'
                    }`}
                      />
                    </button>
                  </div>
                ))}
                  </div>

                  <button className="px-3 py-2 relative flex-[0_0_auto] bg-[#0f6cdd] rounded inline-flex items-center justify-center gap-2 overflow-hidden hover:bg-[#0f6cdd]/90 transition-colors">
                <span className="text-neutral-100 text-sm relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-right tracking-[0] leading-[normal]">
                  Save Preferences
                </span>
                  </button>
                </div>
              </div>
            )}


                {activeTab === "security-settings" && (
                  <div className="flex flex-col w-[624px] items-start gap-6 absolute top-[198px] left-[536px]">
                    <h2 className="text-2xl font-medium text-[#1e1e1e]">Security Settings</h2>
    
                    {/* Password */}
                    <div className="flex flex-col items-start gap-4">
                      <h3 className="text-lg font-medium text-[#1e1e1e]">Password</h3>
                      <button className="px-4 py-2 border border-[#b1b1b1b2] rounded hover:bg-gray-50 transition">
                        <span className="text-sm font-medium text-[#1e1e1e]">Change Password</span>
                      </button>
                    </div>
    
                    {/* Two-Factor Authentication */}
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex flex-col items-start gap-1.5">
                        <h3 className="text-lg font-medium text-[#1e1e1e]">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-xs font-normal text-[#5b5b5b] whitespace-nowrap">
                          Add an extra layer of security to your account by requiring a code in addition to your password.
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-[#1e1e1e] text-sm text-[#e7e7e7] font-medium rounded hover:bg-[#333] transition">
                        Enable 2FA
                      </button>
                    </div>
    
                    {/* Login Sessions */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <div className="flex flex-col items-start gap-4 w-full">
                        <h3 className="text-lg font-medium text-[#1e1e1e]">Login Sessions</h3>
                        <div className="w-full border border-[#d9d9d9] rounded">
                          <div className="flex items-start justify-between p-4">
                            <div className="flex flex-col items-start gap-1.5">
                              <h4 className="text-lg font-medium text-[#1e1e1e]">Current Session</h4>
                              <p className="text-xs text-[#5b5b5b]">Started: Today at 10:22 AM</p>
                            </div>
                            <span className="text-xs font-medium text-[#147618]">Active</span>
                          </div>
                        </div>
                      </div>
                      <button className="mt-2 px-4 py-2 border border-[#b1b1b1b2] rounded hover:bg-gray-50 transition">
                        <span className="text-sm font-medium text-[#ea4335]">Sign Out All Devices</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        };
               