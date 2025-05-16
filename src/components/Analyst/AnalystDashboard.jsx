import { useState } from "react";
import { BellIcon, ChevronDownIcon, ChevronLeftIcon, FileBarChartIcon, LayoutDashboardIcon, MapIcon, SearchIcon, SettingsIcon, UsersIcon } from "lucide-react";

export const AnalystDashboard = () => {
  // Menu items data for mapping
  const menuItems = [
    {
      icon: <LayoutDashboardIcon className="h-6 w-6 text-[#0f6cdd]" />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <MapIcon className="h-6 w-6 text-[#5b5b5b]" />,
      label: "Map View",
      active: false,
    },
    {
      icon: <UsersIcon className="h-6 w-6 text-[#5b5b5b]" />,
      label: "Prospects",
      active: false,
    },
    {
      icon: <FileBarChartIcon className="h-6 w-6 text-[#5b5b5b]" />,
      label: "Reports",
      active: false,
    },
    {
      icon: <SettingsIcon className="h-6 w-6 text-[#5b5b5b]" />,
      label: "Settings",
      active: false,
    },
  ];

  // Data for metric cards
  const metricCards = [
    {
      title: "Total Net Worth",
      value: "$128.5M",
      increase: "+15.3%",
      icon: "/home-storage-24dp-e8eaed-fill1-wght300-grad0-opsz24-1.svg",
    },
    {
      title: "Properties Tracked",
      value: "1,284",
      increase: "+48",
      icon: "/home-storage-24dp-e8eaed-fill1-wght300-grad0-opsz24-1.svg",
    },
    {
      title: "Active Regions",
      value: "23",
      increase: "+3",
      icon: "/home-storage-24dp-e8eaed-fill1-wght300-grad0-opsz24-1.svg",
    },
    {
      title: "Top Owners",
      value: "156",
      increase: "+8",
      icon: "/home-storage-24dp-e8eaed-fill1-wght300-grad0-opsz24-1.svg",
    },
  ];

  // Data for Top Owners section
  const topOwners = [
    { name: "John Smith", properties: 12, value: "$45.2M" },
    { name: "Sarah Johnson", properties: 8, value: "$38.7M" },
    { name: "Robert Chen", properties: 15, value: "$31.5M" },
    { name: "Emily Davis", properties: 6, value: "$28.9M" },
  ];

  // Data for Investment Insights section
  const investmentInsights = [
    {
      location: "Manhattan, NY",
      suggestion: "Buy",
      confidence: "92%",
      confidenceColor: "text-[#147618]",
      roi: "+18.5%",
      roiColor: "text-[#147618]",
    },
    {
      location: "Miami Beach, FL",
      suggestion: "Monitor",
      confidence: "85%",
      confidenceColor: "text-[#0f6cdd]",
      roi: "+12.3%",
      roiColor: "text-[#147618]",
    },
    {
      location: "Austin, TX",
      suggestion: "Buy",
      confidence: "78%",
      confidenceColor: "text-[#fbbc05]",
      roi: "+8.7%",
      roiColor: "text-[#147618]",
    },
  ];

  // Tutorial steps data
  const tutorialSteps = [
    {
      title: "Explore the Map",
      description:
        "Use our interactive map to search, filter, and discover high-value properties and owners in key locations",
      image: "/component-6.svg",
    },
    {
      title: "Track Prospects",
      description:
        "Monitor and manage your list of high-value property owners and prospects efficiently.",
      image: "/track-prospects.svg",
    },
    {
      title: "Analyze Reports",
      description:
        "Dive into detailed analytics and reports to uncover investment opportunities.",
      image: "/analyze-reports.svg",
    },
    {
      title: "Customize Settings",
      description:
        "Adjust your dashboard and notification preferences to suit your workflow.",
      image: "/customize-settings.svg",
    },
  ];

  const [tutorialOpen, setTutorialOpen] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);

  const handleNext = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep((prev) => prev + 1);
    } else {
      setTutorialOpen(false);
    }
  };

  const handlePrev = () => {
    if (tutorialStep > 0) {
      setTutorialStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    setTutorialOpen(false);
    setTutorialStep(0);
  };
  
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

return (
    <div className="bg-[#f3f5f6] flex flex-row justify-center w-full min-h-screen">
        <div className="bg-[#f3f5f6] overflow-hidden w-full relative flex">
           
            <aside
                className={`flex ${sidebarCollapsed ? "w-[90px]" : "w-[280px]"} h-full items-start p-6 bg-white border-r border-[#5b5b5b] transition-all duration-300 ease-in-out`}
                style={{
                    transitionProperty: "width,background-color,border-color",
                }}
                onMouseEnter={() => {
                    if (sidebarCollapsed) {
                        // Expand after 0.5s hover
                        sidebarCollapsed && (window.sidebarExpandTimeout = setTimeout(() => setSidebarCollapsed(false), 500));
                    }
                }}
                onMouseLeave={() => {
                    if (window.sidebarExpandTimeout) {
                        clearTimeout(window.sidebarExpandTimeout);
                        window.sidebarExpandTimeout = null;
                    }
                }}
            >
                <div className="flex flex-col items-start relative flex-1 grow w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 relative self-stretch w-full border-b border-[#5b5b5b]">
                        <div className="inline-flex items-center gap-3">
                            {sidebarCollapsed ? (
                                <img className="logo transition-all duration-300 ease-in-out" alt="Component" src="icon-logo.svg" />
                            ) : (
                                <img className="logo transition-all duration-300 ease-in-out" alt="Component" src="logo.svg" />
                            )}
                        </div>
                        {!sidebarCollapsed && (
                            <img
                                className="w-6 h-6 text-[#5b5b5b] cursor-pointer transition-transform duration-300 ease-in-out"
                                src="sidebar-collapse.svg"
                                alt="Collapse sidebar"
                                onClick={() => setSidebarCollapsed((prev) => !prev)}
                                style={{ transform: sidebarCollapsed ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                            />
                        )}
                    </div>

                    <div className="flex flex-col items-start gap-6 pt-4 w-full">
                        {/* Company Profile */}
                        {!sidebarCollapsed ? (
                            <div className="flex flex-col items-start gap-2.5 px-2 py-3 w-full bg-neutral-100 rounded-lg transition-all duration-300 ease-in-out">
                                <div className="flex items-center gap-3 w-full">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                                        <img
                                            className="absolute w-6 h-6 top-3 left-3"
                                            alt="Logomark"
                                            src="icon-logo.svg"
                                        />
                                    </div>
                                    <div className="flex flex-col w-40 items-start gap-1">
                                        <div className="font-medium text-[#1e1e1e] text-xl">
                                            Centaura
                                        </div>
                                        <div className="text-[#8a8a8a] text-sm">Team - 5 Members</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center w-full py-3 transition-all duration-300 ease-in-out">
                                <img
                                    className="w-8 h-8"
                                    alt="Logomark"
                                    src="icon-logo.svg"
                                />
                            </div>
                        )}
                        <nav className="flex flex-col items-start gap-3 w-full">
                            
                                <div className="font-medium text-[#5b5b5b] text-sm transition-opacity duration-300 ease-in-out">MENU</div>
                          

                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-2 px-2 py-1 w-full rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${
                                        item.active
                                            ? "bg-[#0f6cdd0a] border-[0.5px] border-solid border-[#0f6cdd]"
                                            : "hover:bg-gray-50"
                                    } ${sidebarCollapsed ? "justify-center px-0" : ""}`}
                                >
                                    <span className="flex items-center justify-center w-10 h-10 transition-all duration-300 ease-in-out">
                                        {item.icon}
                                    </span>
                                    {!sidebarCollapsed && (
                                        <div
                                            className={`mt-[-0.5px] text-base transition-all duration-300 ease-in-out ${
                                                item.active
                                                    ? "font-medium text-[#0f6cdd]"
                                                    : "font-normal text-[#5b5b5b]"
                                            }`}
                                        >
                                            {item.label}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>

            <div className="flex-1">
                {/* Header */}
                <header className="flex w-full items-center justify-between pt-3 pb-1 px-6 bg-white border-b border-[#5b5b5b]">
                    <h1 className="font-medium text-[#1e1e1e] text-[32px]">Dashboard</h1>

                    <div className="flex items-center gap-4">
                        <div className="relative flex items-center">
                            <SearchIcon className="absolute left-2.5 w-6 h-6 text-[#e3e3e3]" />
                            <input
                                className="w-[336px] pl-10 py-2.5 text-base border border-[#b1b1b1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f6cdd]"
                                placeholder="Search properties, owners, or regions..."
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center justify-center p-2 rounded-full border border-[#757575] hover:bg-gray-50">
                                <BellIcon className="w-6 h-6 text-[#e3e3e3]" />
                            </button>

                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full border border-[#757575] bg-[url(dummypic.svg)] bg-cover">
                                </div>

                                <div className="flex flex-col items-start justify-center">
                                    <div className="font-medium text-[#757575] text-base">
                                        Ethan Miller
                                    </div>
                                    <div className="font-normal text-[#757575] text-sm">Analyst</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6 space-y-6">
                    {/* Welcome Card */}
                    <div className="w-full p-6 bg-white rounded-lg border border-[#b1b1b1]">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[32px] font-medium text-[#1e1e1e] tracking-normal">
                                Welcome, Ethan
                            </h1>
                            <p className="text-xl text-[#757575] font-normal tracking-normal">
                                Explore opportunities and track prospecting insights across key
                                markets.
                            </p>
                        </div>
                    </div>

                    {/* Metrics Section */}
                    <section className="flex flex-col w-full items-start gap-2">
                        <h2 className="font-medium text-[#1e1e1e] text-2xl">Key Metrics</h2>

                        <div className="flex items-center gap-3.5 w-full">
                            {metricCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex-1 bg-white rounded-lg border border-solid border-[#b1b1b1] p-4"
                                >
                                    <div className="flex flex-col items-start gap-3">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="relative w-10 h-10 bg-[#0071da33] rounded-[125px] flex items-center justify-center">
                                                <img className="w-5 h-5" alt="Home storage" src={card.icon} />
                                            </div>

                                            <div className="inline-flex items-end gap-1">
                                                <div className="flex items-center justify-center w-5 h-5 bg-[#14761833] rounded-[35px] overflow-hidden">
                                                    <img
                                                        className="w-[6.67px] h-[9.92px]"
                                                        alt="North"
                                                        src="/north.svg"
                                                    />
                                                </div>
                                                <span className="font-medium text-[#147618] text-base">
                                                    {card.increase}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start gap-1">
                                            <p className="font-normal text-[#5b5b5b] text-xl whitespace-nowrap">
                                                {card.title}
                                            </p>
                                            <p className="font-bold text-black text-[32px]">{card.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Charts and Data Section */}
                    <section className="flex flex-col md:flex-row gap-[22px] w-full">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 flex-1">
                            {/* Property Value Trends */}
                            <div className="bg-white border border-solid border-[#b1b1b1] rounded-lg p-4">
                                <div className="flex items-center justify-between w-full">
                                    <h2 className="font-medium text-[#1e1e1e] text-2xl">
                                        Property Value Trends
                                    </h2>

                                    <button className="flex items-center gap-1.5 px-4 py-3 bg-white border border-solid border-slate-200 rounded-lg hover:bg-gray-50">
                                        <span className="font-normal text-[#1e1e1e] text-base">
                                            Last 30 Days
                                        </span>
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex items-center justify-center gap-2.5 px-[214px] py-40 mt-3 bg-neutral-100 rounded">
                                    <span className="font-medium text-[#5b5b5b] text-sm">
                                        Line Chart Placeholder
                                    </span>
                                </div>
                            </div>

                            {/* Investment Heatmap */}
                            <div className="bg-white border border-solid border-[#b1b1b1] rounded-lg p-4">
                                <div className="flex items-center justify-between w-full">
                                    <h2 className="font-medium text-[#1e1e1e] text-2xl">
                                        Investment Heatmap
                                    </h2>

                                    <button className="text-[#0f6cdd] hover:underline pl-4 pr-0 py-3">
                                        <span className="font-medium text-base">
                                            View Full Map
                                        </span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-center gap-2.5 px-[214px] py-40 mt-3 bg-neutral-100 rounded">
                                    <span className="font-medium text-[#5b5b5b] text-sm">
                                        Map Visualization Placeholder
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4 flex-1">
                            {/* Top Owners */}
                            <div className="bg-white border border-solid border-[#b1b1b1] rounded-lg p-4">
                                <h2 className="font-medium text-[#1e1e1e] text-2xl mb-3">
                                    Top Owners
                                </h2>

                                <div className="flex flex-col gap-2">
                                    {topOwners.map((owner, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-neutral-100 rounded"
                                        >
                                            <div className="flex flex-col gap-1.5">
                                                <div className="font-medium text-[#1e1e1e] text-lg">
                                                    {owner.name}
                                                </div>
                                                <div className="font-normal text-[#5b5b5b] text-xs">
                                                    {owner.properties} properties
                                                </div>
                                            </div>
                                            <div className="font-bold text-[#0f6cdd] text-base">
                                                {owner.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Investment Insights */}
                            <div className="bg-white border border-solid border-[#b1b1b1] rounded-lg p-4">
                                <h2 className="font-medium text-[#1e1e1e] text-2xl mb-3">
                                    Investment Insights
                                </h2>

                                <div className="flex flex-col gap-2">
                                    {investmentInsights.map((insight, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-neutral-100 rounded"
                                        >
                                            <div className="flex flex-col gap-1.5">
                                                <div className="font-medium text-[#1e1e1e] text-lg">
                                                    {insight.location}
                                                </div>
                                                <div className="font-normal text-[#5b5b5b] text-xs">
                                                    Suggestion: <span className="font-semibold">{insight.suggestion}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className={`font-medium ${insight.confidenceColor} text-base`}>
                                                    Confidence: {insight.confidence}
                                                </span>
                                                <span className={`font-medium ${insight.roiColor} text-base`}>
                                                    ROI: {insight.roi}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tutorial Modal */}
                    {tutorialOpen && (
                        <div className="absolute w-full h-full top-0 left-0 bg-[#00000080] flex items-center justify-center z-50">
                            <div className="w-[454px] bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="flex flex-col items-start justify-center gap-6 pt-6 pb-2 px-3">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8" alt="Centaura logo" src={tutorialSteps[tutorialStep].image} />
                                        <div className="font-medium text-[#0f6cdd] text-2xl">Centaura</div>
                                    </div>

                                    <div className="flex flex-col items-start gap-4 w-full">
                                        <div className="flex flex-col items-center gap-6 w-full">
                                            <h2 className="font-medium text-[#1e1e1e] text-[32px]">
                                                {tutorialSteps[tutorialStep].title}
                                            </h2>
                                            <div className="w-[145px] h-[120px] bg-[#5b5b5b] flex items-center justify-center rounded">
                                                {/* Optionally, you can use an image here */}
                                            </div>
                                            <p className="text-[#5b5b5b] text-base text-center">
                                                {tutorialSteps[tutorialStep].description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between w-full">
                                            <div className="inline-flex items-center bg-[#5c5c5c33] rounded-full">
                                                <button
                                                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5c5c5c20] transition-colors disabled:opacity-50"
                                                    onClick={handlePrev}
                                                    disabled={tutorialStep === 0}
                                                    aria-label="Previous"
                                                    type="button"
                                                >
                                                    <img
                                                        className="w-4 h-4 rotate-180"
                                                        alt="Previous"
                                                        src="/arrow-forward-ios-24dp-e3e3e3-fill1-wght300-grad-25-opsz24-1.svg"
                                                    />
                                                </button>
                                            </div>

                                            <div className="flex w-[104px] items-start gap-[1.68px]">
                                                {tutorialSteps.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`flex-1 grow h-[3.35px] rounded-[3.35px] ${
                                                            index === tutorialStep ? "bg-[#0f6cdd]" : "bg-[#eaeaea]"
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            <div className="inline-flex items-center bg-[#0f6cdd33] rounded-full">
                                                <button
                                                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0f6cdd20] transition-colors disabled:opacity-50"
                                                    onClick={handleNext}
                                                    disabled={tutorialStep === tutorialSteps.length - 1}
                                                    aria-label="Next"
                                                    type="button"
                                                >
                                                    <img
                                                        className="w-4 h-4"
                                                        alt="Next"
                                                        src="/arrow-forward-ios-24dp-e3e3e3-fill1-wght300-grad-25-opsz24-1-1.svg"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 border-t border-[#5c5c5c33]">
                                    <button
                                        className="px-4 py-2 text-[#0f6cdd] text-sm font-normal border border-[#0f6cdd] rounded-md hover:bg-[#0f6cdd10] transition-colors"
                                        onClick={handleSkip}
                                        type="button"
                                    >
                                        Skip Tutorial
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-[#0f6cdd] text-white text-sm font-normal rounded-md hover:bg-[#0f6cdd90] transition-colors"
                                        onClick={handleNext}
                                        type="button"
                                    >
                                        {tutorialStep === tutorialSteps.length - 1 ? "Finish" : "Next"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    </div>
);
};