import {
    FilterIcon,
    MinusIcon,
    PlusIcon,
    SearchIcon,
    BellIcon,
    LayoutDashboardIcon,
    MapIcon,
    UsersIcon,
    FileBarChartIcon,
    SettingsIcon
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Set your Mapbox access token here
mapboxgl.accessToken = "pk.eyJ1IjoiaGFyaXNod2FyYW4iLCJhIjoiY21hZHhwZGs2MDF4YzJxczh2aDd0cWg1MyJ9.qcu0lpqVlZlC2WFxhwb1Pg";

// Property data for mapping
const properties = [
    {
        id: 1,
        address: "123 Park Avenue",
        location: "Manhattan, NY",
        estimated: "$4.5M",
        lastSale: "2022",
        confidence: 92,
        confidenceColor: "#147618",
        coords: [-73.9712, 40.7648],
    },
    {
        id: 2,
        address: "456 Madison Street",
        location: "Manhattan, NY",
        estimated: "$3.2M",
        lastSale: "2021",
        confidence: 85,
        confidenceColor: "#0f6cdd",
        coords: [-73.9772, 40.7580],
    },
    {
        id: 3,
        address: "789 Fifth Avenue",
        location: "Manhattan, NY",
        estimated: "$7.3M",
        lastSale: "2023",
        confidence: 75,
        confidenceColor: "#fbbc05",
        coords: [-73.9742, 40.7640],
    },
    {
        id: 4,
        address: "789 Fifth Avenue",
        location: "Manhattan, NY",
        estimated: "$7.3M",
        lastSale: "2023",
        confidence: 75,
        confidenceColor: "#fbbc05",
        coords: [-73.9680, 40.7650],
    },
    {
        id: 5,
        address: "789 Fifth Avenue",
        location: "Manhattan, NY",
        estimated: "$7.3M",
        lastSale: "2023",
        confidence: 75,
        confidenceColor: "#fbbc05",
        coords: [-73.9650, 40.7610],
    },
];

const mapStyles = [
    { label: "Streets", value: "mapbox://styles/mapbox/streets-v11" },
    { label: "Satellite", value: "mapbox://styles/mapbox/satellite-v9" },
    { label: "Outdoors", value: "mapbox://styles/mapbox/outdoors-v11" },
    { label: "Light", value: "mapbox://styles/mapbox/light-v10" },
    { label: "Dark", value: "mapbox://styles/mapbox/dark-v10" },
    { label: "Terrain", value: "mapbox://styles/mapbox/satellite-streets-v11" },
];

export const Mapview = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mapStyle, setMapStyle] = useState(mapStyles[0].value);
    const mapContainer = useRef(null);
    const mapRef = useRef(null);

    // Initialize Mapbox map
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: mapStyle,
                center: [-73.9712, 40.7648],
                zoom: 12,
            });

            // Add zoom and rotation controls to the map.
            mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");
        }
        // Only update style if map is already initialized and style has changed
        else if (
            mapRef.current.isStyleLoaded() &&
            mapRef.current.getStyle().sprite !== undefined &&
            mapRef.current.getStyle().sprite.indexOf(mapStyle) === -1
        ) {
            mapRef.current.setStyle(mapStyle);
        }
    }, [mapStyle]);



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

    // Zoom handlers
    const handleZoomIn = () => {
        if (mapRef.current) mapRef.current.zoomIn();
    };
    const handleZoomOut = () => {
        if (mapRef.current) mapRef.current.zoomOut();
    };

    // --- CLUSTERING & POLYGONS LOGIC ---

    // Example: Fetch property data from Firestore (pseudo-code, replace with your Firestore logic)
    // import { getDocs, collection } from "firebase/firestore";
    // useEffect(() => {
    //     async function fetchProperties() {
    //         const querySnapshot = await getDocs(collection(db, "properties"));
    //         // Map Firestore docs to GeoJSON features
    //         const features = querySnapshot.docs.map(doc => ({
    //             type: "Feature",
    //             geometry: {
    //                 type: "Point",
    //                 coordinates: doc.data().coords,
    //             },
    //             properties: { ...doc.data() }
    //         }));
    //         setGeojson({ type: "FeatureCollection", features });
    //     }
    //     fetchProperties();
    // }, []);

    // For demonstration, convert static properties to GeoJSON
    const geojson = {
        type: "FeatureCollection",
        features: properties.map((p) => ({
            type: "Feature",
            geometry: { type: "Point", coordinates: p.coords },
            properties: { ...p }
        }))
    };

    // Add clustering and polygons to Mapbox
    useEffect(() => {
        if (!mapRef.current) return;

        let cleanupFns = [];

        const addLayersAndSources = () => {
            // Remove previous sources/layers if they exist
            if (mapRef.current.getLayer("property-pins")) mapRef.current.removeLayer("property-pins");
            if (mapRef.current.getSource("properties")) mapRef.current.removeSource("properties");
            if (mapRef.current.getLayer("parcel-fill")) mapRef.current.removeLayer("parcel-fill");
            if (mapRef.current.getSource("parcels")) mapRef.current.removeSource("parcels");

            // Add property pins as symbol layer (mappins)
            mapRef.current.addSource("properties", {
                type: "geojson",
                data: geojson,
            });

            mapRef.current.loadImage(
                "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
                (error, image) => {
                    if (error) return;
                    if (!mapRef.current.hasImage("custom-pin")) {
                        mapRef.current.addImage("custom-pin", image);
                    }
                    mapRef.current.addLayer({
                        id: "property-pins",
                        type: "symbol",
                        source: "properties",
                        layout: {
                            "icon-image": "custom-pin",
                            "icon-size": 0.7,
                            "icon-allow-overlap": true,
                        },
                    });
                }
            );

            // Example: Add parcel polygons (replace with real GeoJSON from Firestore/PostGIS)
            const dummyParcel = {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        geometry: {
                            type: "Polygon",
                            coordinates: [[
                                [-73.972, 40.765],
                                [-73.971, 40.765],
                                [-73.971, 40.764],
                                [-73.972, 40.764],
                                [-73.972, 40.765]
                            ]]
                        },
                        properties: { id: 1 }
                    }
                ]
            };
            mapRef.current.addSource("parcels", {
                type: "geojson",
                data: dummyParcel
            });
            mapRef.current.addLayer({
                id: "parcel-fill",
                type: "fill",
                source: "parcels",
                paint: {
                    "fill-color": "#0f6cdd",
                    "fill-opacity": 0.2
                }
            });

            // Hover Popup Card
            let popup;
            const mouseEnter = (e) => {
                mapRef.current.getCanvas().style.cursor = "pointer";
                const feature = e.features[0];
                const props = feature.properties;
                // You may want to parse JSON if properties are stringified
                let property = props;
                if (typeof props === "object" && props.address) {
                    property = props;
                } else {
                    property = JSON.parse(props);
                }
                // Dummy image for now, replace with property.image if available
                const imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
                popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                    offset: 25,
                    className: "property-popup"
                })
                    .setLngLat(feature.geometry.coordinates)
                    .setHTML(`
                        <div style="width:260px;padding:0;">
                            <img src="${imageUrl}" alt="Property" style="width:100%;height:120px;object-fit:cover;border-radius:8px 8px 0 0;" />
                            <div style="padding:12px;">
                                <div style="font-weight:600;font-size:16px;color:#1e1e1e;">${property.address}</div>
                                <div style="color:#5b5b5b;font-size:13px;margin-bottom:4px;">${property.location}</div>
                                <div style="display:flex;justify-content:space-between;font-size:13px;">
                                    <span>Est. Value: <b>${property.estimated}</b></span>
                                    <span>Last Sale: <b>${property.lastSale}</b></span>
                                </div>
                                <div style="margin:8px 0;">
                                    <span style="font-size:13px;color:#5b5b5b;">Confidence: </span>
                                    <span style="font-size:13px;font-weight:600;color:${property.confidenceColor};">${property.confidence}%</span>
                                </div>
                                <div style="font-size:13px;color:#5b5b5b;margin-bottom:8px;">
                                    Owner: <b>${property.owner || "Sarah Johnson"}</b>
                                </div>
                                <div style="display:flex;gap:8px;">
                                    <button style="flex:1;padding:6px 0;background:#0f6cdd;color:#fff;border:none;border-radius:4px;font-size:13px;cursor:pointer;">View Details</button>
                                    <button style="flex:1;padding:6px 0;background:#fff;color:#0f6cdd;border:1px solid #0f6cdd;border-radius:4px;font-size:13px;cursor:pointer;">Compare</button>
                                </div>
                            </div>
                        </div>
                    `)
                    .addTo(mapRef.current);
            };
            const mouseLeave = () => {
                mapRef.current.getCanvas().style.cursor = "";
                if (popup) {
                    popup.remove();
                    popup = null;
                }
            };
            mapRef.current.on("mouseenter", "property-pins", mouseEnter);
            mapRef.current.on("mouseleave", "property-pins", mouseLeave);
            cleanupFns.push(() => mapRef.current.off("mouseenter", "property-pins", mouseEnter));
            cleanupFns.push(() => mapRef.current.off("mouseleave", "property-pins", mouseLeave));
        };

        // If style is loaded, add layers/sources immediately, else wait for styledata event
        if (mapRef.current.isStyleLoaded()) {
            addLayersAndSources();
        } else {
            mapRef.current.once("styledata", addLayersAndSources);
            cleanupFns.push(() => mapRef.current.off("styledata", addLayersAndSources));
        }

        // Clean up listeners and layers/sources on unmount or style change
        return () => {
            cleanupFns.forEach((fn) => fn && fn());
            if (!mapRef.current) return;
            if (mapRef.current.getLayer("property-pins")) mapRef.current.removeLayer("property-pins");
            if (mapRef.current.getSource("properties")) mapRef.current.removeSource("properties");
            if (mapRef.current.getLayer("parcel-fill")) mapRef.current.removeLayer("parcel-fill");
            if (mapRef.current.getSource("parcels")) mapRef.current.removeSource("parcels");
        };
    }, [mapStyle]);

    return (
       <div className="bg-[#f3f5f6] flex flex-row justify-center w-full min-h-screen">
            <div className="bg-[#f3f5f6] overflow-hidden w-full relative flex">
                {/* Sidebar ... unchanged ... */}
                <aside
                    className={`flex ${sidebarCollapsed ? "w-[90px]" : "w-[280px]"} h-full items-start p-6 bg-white border-r border-[#5b5b5b] transition-all duration-300 ease-in-out`}
                    style={{
                        transitionProperty: "width,background-color,border-color",
                    }}
                    onMouseEnter={() => {
                        if (sidebarCollapsed) {
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
                    {/* Sidebar content ... unchanged ... */}
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
                                    <div className="h-10 w-10 rounded-full border border-[#757575] bg-[url(dummypic.svg)] bg-cover"></div>
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

                    {/* Properties Panel */}
                    <div
                        className={`absolute top-20 h-[934px] transition-all duration-300 ease-in-out`}
                        style={{
                            left: sidebarCollapsed ? 104 : 296,
                            width: "20%",
                            zIndex: 2,
                        }}
                    >
                        <div className="h-full bg-white rounded-lg overflow-hidden shadow-none">
                            <div className="flex flex-col items-start gap-4 px-4 py-3 border-b border-[#5b5b5b]">
                                <div className="flex items-center justify-between w-full">
                                    <h2 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-xl">
                                        Properties
                                    </h2>
                                    <button className="p-2 rounded-lg hover:bg-gray-100">
                                        <FilterIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="h-[870px] overflow-y-auto">
                                {properties.map((property) => (
                                    <div
                                        key={property.id}
                                        className="flex items-start gap-4 p-4 border-b border-[#5b5b5b]"
                                    >
                                        <div className="flex flex-col items-start gap-3 p-0 w-full">
                                            <div className="flex flex-col items-start gap-3 w-full">
                                                <div className="flex items-start justify-between w-full">
                                                    <div className="flex flex-col items-start justify-center gap-0.5">
                                                        <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-base">
                                                            {property.address}
                                                        </div>
                                                        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-sm">
                                                            {property.location}
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="w-4 h-4"
                                                        alt="Emp dashboard"
                                                        src="wishlist.svg"
                                                    />
                                                </div>
                                                <div className="flex items-start gap-24">
                                                    <div className="flex flex-col items-start justify-center gap-0.5">
                                                        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-sm">
                                                            Estimated
                                                        </div>
                                                        <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-base">
                                                            {property.estimated}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center gap-0.5">
                                                        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-sm">
                                                            Last Sale
                                                        </div>
                                                        <div className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#1e1e1e] text-base">
                                                            {property.lastSale}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start gap-1.5 w-full">
                                                    <div className="flex items-start justify-between w-full">
                                                        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-sm">
                                                            Confidence
                                                        </div>
                                                        <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#5b5b5b] text-sm">
                                                            {property.confidence}%
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-2 bg-[#d9d9d9] rounded-lg overflow-hidden">
                                                        <div
                                                            className="h-full rounded-lg transition-all duration-300 ease-in-out"
                                                            style={{
                                                                width: `${property.confidence}%`,
                                                                backgroundColor: property.confidenceColor,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 w-full">
                                                <button className="flex-1 h-8 px-3 py-2 text-xs [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#5b5b5b] rounded-lg border border-[#d9d9d9] hover:bg-gray-50">
                                                    Owner Profile
                                                </button>
                                                <button className="flex-1 h-8 px-3 py-2 text-xs [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#5b5b5b] rounded-lg border border-[#d9d9d9] hover:bg-gray-50">
                                                    Property Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mapbox Map View */}
                    <div
                        className="absolute top-20 right-6"
                        style={{
                            left: sidebarCollapsed ? 104 + "px" : 296 + "px",
                            width: "auto",
                            height: "auto",
                            zIndex: 0,
                        }}
                    >
                        {/* Map style switcher */}
                        <div className="absolute top-6 left-6 z-10 bg-white rounded-lg shadow px-3 py-2 flex items-center gap-2">
                            <span className="text-sm text-[#5b5b5b]">Terrain View:</span>
                            <select
                                className="border border-[#b1b1b1] rounded px-2 py-1 text-sm"
                                value={mapStyle}
                                onChange={(e) => setMapStyle(e.target.value)}
                            >
                                {mapStyles.map((style) => (
                                    <option key={style.value} value={style.value}>
                                        {style.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Map container */}
                        <div
                            ref={mapContainer}
                            className="w-full h-full rounded-lg overflow-hidden"
                            style={{ minHeight: "936px", minWidth: "984px" }}
                        />
                        {/* Zoom Controls */}
                        <div className="absolute bottom-6 right-6 flex flex-col bg-black rounded-lg z-10">
                            <button className="p-2 text-white hover:bg-gray-800" onClick={handleZoomIn}>
                                <PlusIcon className="w-8 h-8" />
                            </button>
                            <div className="h-px bg-gray-700" />
                            <button className="p-2 text-white hover:bg-gray-800" onClick={handleZoomOut}>
                                <MinusIcon className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .mapboxgl-popup-content {
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 14px;
                }
                .mapbox-marker {
                    cursor: pointer;
                }
                canvas.mapboxgl-canvas {
                    width: auto !important;
                    height: auto !important;
                }
            `}</style>
        </div>
    );
};