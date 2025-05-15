import React, { useState } from "react";
import { EyeIcon, ArrowLeftIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CompanyRegister = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
  
    const removeFile = () => {
      setSelectedFile(null);
    };
  
  const formData = {
    companySection: {
      title: "Company Information",
      fields: [
        { label: "Company Name", placeholder: "Enter Company Name" },
        { label: "EIN Number", placeholder: "Enter EIN Number" },
      ],
      dropdowns: [
        { label: "Industry", placeholder: "Select Industry" },
        {
          label: "Company Size",
          placeholder: "Select Size",
          note: "Optional helps for analytics.",
        },
      ],
    },
    adminSection: {
      title: "Admin Account",
      subtitle:
        "You'll be the first admin for your company. You can invite your team later.",
      fields: [
        { label: "Admin Name", placeholder: "Enter Full Name" },
        {
          label: "Admin Email",
          placeholder: "Enter Email",
          note: "This will be your login cridential",
        },
        {
          label: "Password",
          placeholder: "Create a secure password",
          note: "Must be at least 8 characters",
          hasEye: true,
        },
        {
          label: "Confirm Password",
          placeholder: "Confirm your password",
          hasEye: true,
        },
      ],
    },
  };
  return (
    <div className="flex justify-center w-full min-h-screen" style={{ backgroundImage: "url(we1.png)" }}>
      <div className="w-full max-w-[1440px] relative flex flex-col">
        <header className="flex w-full items-center justify-between py-6 px-4">
          <div className="flex items-center gap-2">
            <img className="" alt="Centaura Logo" src="logo.svg" />
          </div>

          <a
            href="/login"
            style={{ textDecoration: "none", color: "#fff" }}
            className="flex items-center gap-2 text-sm font-normal text-black"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Login
          </a>
        </header>
        <div className="flex flex-col w-full items-center rounded-lg overflow-hidden">
          <div className="flex flex-col items-start gap-6 pt-0 pb-3 px-0 relative self-stretch w-full bg-white">
            <div className="flex flex-col items-center gap-1.5 px-3 py-4 relative self-stretch w-full border-b border-slate-200">
              <h1 className="relative w-fit mt-[-1.00px] font-medium text-[#1e1e1e] text-2xl md:text-[32px] tracking-[0] leading-normal text-center">
                Register Your Company
              </h1>
              <p className="relative w-fit font-normal text-[#757575] text-lg md:text-xl tracking-[0] leading-normal text-center px-4">
                Create your organization and admin account to start exploring
                property and wealth insights.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-6 px-4 py-0 relative self-stretch w-full">
              {/* Company Information Card */}
              <div className="flex flex-col items-start relative w-full lg:flex-1 border border-solid border-slate-400 rounded-lg">
                <div className="flex items-center gap-2.5 p-4 relative self-stretch w-full border-b border-[#b1b1b1]">
                  <h2 className="relative w-fit mt-[-1.00px] font-medium text-[#1e1e1e] text-xl md:text-2xl tracking-[0] leading-normal">
                    {formData.companySection.title}
                  </h2>
                </div>
                <div className="flex flex-col items-start gap-4 p-4 relative self-stretch w-full bg-neutral-100">
                  {/* Company Name Field */}
                  <div className="flex-col h-[74px] items-start gap-2 flex relative self-stretch w-full mt-3">
                    <div className="flex items-center gap-1 relative self-stretch w-full">
                      <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                        Company Name
                      </label>
                    </div>
                    <input
                      className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200"
                      placeholder="Enter Company Name"
                    />
                  </div>

                  {/* Company Logo Upload */}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    <div className="self-stretch w-full flex flex-col items-start gap-2 relative">
                        <div className="flex items-center gap-1 relative self-stretch w-full">
                          <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                            Company Logo
                            </label>
                         </div>
                       <div
                        className="min-w-60 items-center justify-center p-4 bg-white rounded-lg border border-dashed border-[#c0c1c3] flex relative self-stretch w-full"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        >
                         {!selectedFile ? (
                            <div className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
                                <img
                                    className="relative w-20 h-20"
                                     alt="Upload"
                                     src="upload.svg"
                                />
                           <div className="font-normal text-slate-400 leading-3 whitespace-nowrap relative w-fit text-xs tracking-[0]">
                                 Drag or Drop your logo here
                            </div>
                             <input
                              type="file"
                               onChange={handleFileChange}
                               className="hidden"
                               id="fileInput"
                               />
                              <label
                                htmlFor="fileInput"
                             className="px-2 py-1.5 rounded border border-solid border-[#0f6cdd] text-[#0f6cdd] text-xs cursor-pointer"
                               >
                                Browse files
                              </label>
                          </div>
                           ) : (
                             <div className="flex items-center gap-4">
                                              <img
                                                src={URL.createObjectURL(selectedFile)}
                                                alt="Selected"
                                                className="w-full h-full object-cover rounded-lg"
                                              />
                                              <button
                                                onClick={removeFile}
                                                className="text-red-500 text-lg"
                                              >
                                                <FontAwesomeIcon icon={faTrash} />
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <p className="relative self-stretch font-normal text-[#0f6cdd] text-sm tracking-[0] leading-[normal]">
                                        Recommended. Max file size: 5MB
                                      </p>
                                    </div>

                  {/* EIN Number Field */}
                  <div className="self-stretch w-full flex flex-col items-start gap-2 relative">
                    <div className="flex items-center gap-1 relative self-stretch w-full">
                      <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                        EIN Number
                      </label>
                    </div>
                    <input
                      className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200"
                      placeholder="Enter EIN Number"
                    />
                  </div>

                  {/* Industry and Company Size */}
                  <div className="flex items-start gap-6 relative self-stretch w-full">
                    {/* Industry Dropdown */}
                    <div className="h-[74px] flex-1 grow flex flex-col items-start gap-2 relative">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          Industry
                        </label>
                      </div>
                      <select className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200">
                        <option value="" disabled selected>
                          Select Industry
                        </option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Company Size Dropdown */}
                    <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                      <div className="flex-col h-[74px] items-start gap-2 flex relative self-stretch w-full">
                        <div className="flex items-center gap-1 relative self-stretch w-full">
                          <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                            Company Size
                          </label>
                        </div>
                        <select className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200">
                          <option value="" disabled selected>
                            Select Size
                          </option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>
                      {/* <p className="relative self-stretch font-normal text-[#0f6cdd] text-sm tracking-[0] leading-[normal]">
                        Optional helps for analytics.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Account Card */}
              <div className="flex flex-col items-start relative w-full lg:flex-1 border border-solid border-slate-400 rounded-lg">
                <div className="flex items-center gap-2.5 p-4 relative self-stretch w-full border-b border-[#b1b1b1]">
                  <h2 className="relative w-fit mt-[-1.00px] font-medium text-[#1e1e1e] text-xl md:text-2xl tracking-[0] leading-normal">
                    {formData.adminSection.title}
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-between p-4 relative flex-1 self-stretch w-full grow bg-neutral-100">
                  <p className="relative self-stretch mt-[-1.00px] font-normal text-[#0f6cdd] text-lg md:text-xl tracking-[0] leading-normal" style={{ marginTop: "15px" }}>
                    {formData.adminSection.subtitle}
                  </p>

                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full mt-4">
                    {/* Admin Name Field */}
                    <div className="flex-col h-[74px] items-start gap-2 flex relative self-stretch w-full">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          Admin Name
                        </label>
                      </div>
                      <input
                        className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>

                  {/* Admin Email Field */}
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full mt-4">
                    <div className="flex-col h-[74px] items-start gap-2 flex relative self-stretch w-full">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          Admin Email
                        </label>
                      </div>
                      <input
                        className="h-[46px] w-full px-4 py-3 bg-white rounded-lg border border-solid border-slate-200"
                        placeholder="Enter Email"
                      />
                    </div>
                    <p className="relative self-stretch font-normal text-[#0f6cdd] text-sm tracking-[0] leading-[normal]">
                      This will be your login cridential
                    </p>
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full mt-4">
                    <div className="self-stretch w-full flex flex-col items-start gap-2 relative">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          Password
                        </label>
                      </div>
                      <input type="password" 
                      placeholder="Enter Your Password"
                      className="min-w-60 w-full h-[46px] items-center justify-between px-4 py-3 bg-white rounded-lg border border-solid border-slate-200 flex relative self-stretch w-full">
                        
                      </input>
                    </div>
                    <p className="relative self-stretch font-normal text-[#0f6cdd] text-sm tracking-[0] leading-[normal]">
                      Must be at least 8 characters
                    </p>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="flex flex-col items-start gap-6 relative self-stretch w-full mt-4">
                    <div className="flex-col h-[74px] items-start gap-2 flex relative self-stretch w-full">
                      <div className="flex items-center gap-1 relative self-stretch w-full">
                        <label className="relative w-fit mt-[-1.00px] font-medium text-slate-600 text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          Confirm Password
                        </label>
                      </div>
                      <input placeholder="Confirm your password" className="min-w-60 w-full h-[46px] items-center justify-between px-4 py-3 bg-white rounded-lg border border-solid border-slate-200 flex relative self-stretch w-full">
                        
                      </input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="inline-flex items-center gap-2 px-4 md:pl-3 md:pr-0 py-0 relative">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label
                htmlFor="terms"
                className="relative w-fit mt-[-1.00px] font-medium text-sm md:text-base tracking-[0] leading-[22.4px]"
              >
                <span className="text-slate-600">I accept the </span>
                <span className="text-[#0f6cdd]">
                  Terms of Service and Privacy Policy
                </span>
              </label>
            </div>
          </div>

          {/* Register Button */}
          <div className="flex flex-col items-center gap-2.5 px-4 md:px-0 py-3 relative self-stretch w-full bg-white border-t border-slate-200">
            <button className="w-full md:w-auto px-4 py-3 bg-[#0f6cdd] rounded-lg text-neutral-100 text-base">
              Register Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
