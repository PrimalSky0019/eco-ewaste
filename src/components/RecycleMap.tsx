"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
// FIX 1: Use relative path (../) instead of (@/) to guarantee it finds the file
import { createClient } from "../lib/supabase";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface Bin {
    id: string;
    name: string;
    lat: number;
    lng: number;
    type: string;
    fill_level: number;
}

export default function RecycleMap() {
    const [bins, setBins] = useState<Bin[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const fetchBins = async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from('bins').select('*');

            if (error) {
                console.error("Error fetching bins:", error);
            } else {
                setBins(data || []);
            }
        };

        // FIX 2: Add 'void' to tell TypeScript we know this is a Promise and we are handling it
        void fetchBins();
    }, []);

    if (!isMounted) return <div className="h-[600px] bg-slate-800 animate-pulse rounded-xl" />;

    return (
        <div className="h-[600px] w-full rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl relative z-0">
            <MapContainer
                center={[12.9716, 77.5946]}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {bins.map((bin) => (
                    <Marker key={bin.id} position={[bin.lat, bin.lng]} icon={icon}>
                        <Popup>
                            <div className="font-sans text-slate-900 min-w-[200px]">
                                <h3 className="font-bold text-lg">{bin.name}</h3>
                                <div className="flex justify-between items-center mt-1">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full border border-green-200">
                    {bin.type}
                  </span>
                                    <span className={`text-xs font-bold ${bin.fill_level > 80 ? 'text-red-600' : 'text-slate-500'}`}>
                    {bin.fill_level}% Full
                  </span>
                                </div>

                                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                                    <div
                                        className={`h-full ${bin.fill_level > 80 ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${bin.fill_level}%` }}
                                    />
                                </div>

                                <button className="mt-3 block w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded transition-colors shadow-sm">
                                    Navigate Here
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}