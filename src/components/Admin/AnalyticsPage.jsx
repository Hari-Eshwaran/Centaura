import React from "react";
import { BarChart3Icon, TrendingUpIcon, TrendingDownIcon, CalendarIcon } from "lucide-react";

export const AnalyticsPage = () => {
  const metrics = [
    {
      title: "Total Reports Generated",
      value: "1,234",
      change: "+12.5%",
      increasing: true
    },
    {
      title: "Active Users",
      value: "856",
      change: "+8.2%",
      increasing: true
    },
    {
      title: "Avg. Session Duration",
      value: "24m",
      change: "-3.1%",
      increasing: false
    },
    {
      title: "Completion Rate",
      value: "92%",
      change: "+5.3%",
      increasing: true
    }
  ];

  const timeRanges = ["Last 7 days", "Last 30 days", "Last 3 months", "Last year"];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-[#1e1e1e]">Analytics Dashboard</h1>
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
            {timeRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#0f6cdd] text-[#0f6cdd] rounded-lg hover:bg-[#0f6cdd] hover:text-white transition-colors">
            <CalendarIcon className="w-4 h-4" />
            <span>Custom Range</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-[#b1b1b1]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#5b5b5b] text-sm">{metric.title}</h3>
              <div className="w-8 h-8 bg-[#0071da33] rounded-full flex items-center justify-center">
                <BarChart3Icon className="w-4 h-4 text-[#0f6cdd]" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-[#1e1e1e]">{metric.value}</span>
              <div className={`flex items-center gap-1 ${
                metric.increasing ? "text-green-600" : "text-red-600"
              }`}>
                {metric.increasing ? (
                  <TrendingUpIcon className="w-4 h-4" />
                ) : (
                  <TrendingDownIcon className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg border border-[#b1b1b1]">
        <h2 className="text-xl font-medium text-[#1e1e1e] mb-4">Usage Trends</h2>
        <div className="h-[400px] bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Chart visualization would go here</span>
        </div>
      </div>
    </div>
  );
};