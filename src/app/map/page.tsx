"use client";

import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// ⚠️ CRITICAL: Load the map lazily to avoid "Window is not defined" error
const RecycleMap = dynamic(() => import("@/components/RecycleMap"), {
    ssr: false, // Disable Server-Side Rendering for this component
    loading: () => <p className="text-white">Loading Map...</p>
});

export default function MapPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-4">

            {/* Header */}
            <div className="max-w-4xl mx-auto mb-6 flex items-center gap-4">
                <Link href="/" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                        Find Nearest Bin
                    </h1>
                    <p className="text-slate-400 text-sm">Locating smart bins in your area...</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-4xl mx-auto">
                <RecycleMap />
            </div>

            {/* Legend / Info */}
            <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold">Smart Bin</span>
                    </div>
                    <p className="text-xs text-slate-500">Accepts Phones, Cables, Batteries</p>
                </div>
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-semibold">Recycling Center</span>
                    </div>
                    <p className="text-xs text-slate-500">Large items (Laptops, Monitors)</p>
                </div>
            </div>
        </main>
    );
}