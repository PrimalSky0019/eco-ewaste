import Link from "next/link";
import { MapPin, ScanLine, Trophy } from "lucide-react";

export default function Home() {
  return (
      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">

        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block p-3 rounded-full bg-green-500/10 mb-4 ring-1 ring-green-500/50">
            <span className="text-green-400 font-mono text-sm">HAXPLORE EDITION v2.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            EcoSnap
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            The AI-powered assistant for tracking, recycling, and rewarding your e-waste.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">

          {/* Button 1: Map */}
          <Link href="/map" className="group relative p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-green-500/50 transition-all hover:-translate-y-1">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            <MapPin className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Find Bins &rarr;</h2>
            <p className="text-slate-500 text-sm">Locate the nearest e-waste drop-off points using GPS.</p>
          </Link>

          {/* Button 2: Scan (We will build this next) */}
          <Link href="/scan" className="group relative p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            <ScanLine className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">AI Scan &rarr;</h2>
            <p className="text-slate-500 text-sm">Identify items and estimate value with AI vision.</p>
          </Link>

          {/* Button 3: Leaderboard */}
          <Link href="/leaderboard" className="group relative p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-yellow-500/50 transition-all hover:-translate-y-1">
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            <Trophy className="w-10 h-10 text-yellow-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Rewards &rarr;</h2>
            <p className="text-slate-500 text-sm">Track your eco-impact and earn crypto-credits.</p>
          </Link>

        </div>
      </main>
  );
}