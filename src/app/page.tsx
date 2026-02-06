import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Camera, MapPin, Trophy, Recycle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">

        {/* HEADER / NAVBAR */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight text-primary">EcoSnap v2.0</span>
            </div>
            <nav className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </nav>
          </div>
        </header>

        <main className="flex-1">

          {/* HERO SECTION - The "Wow" Factor */}
          <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 -z-10">
              <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1920&auto=format&fit=crop"
                  alt="Green City Background"
                  fill
                  className="object-cover brightness-[0.4]"
                  priority
              />
            </div>

            <div className="container px-4 relative z-10">
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
                Live for HAXPLORE Hackathon
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                Recycle Smart. <br />
                <span className="text-green-400">Earn Rewards.</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                The AI-powered assistant that tells you exactly what your e-waste is worth and where to drop it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                  <Link href="/login"> {/* Change to /scan if auth is ready */}
                    Start AI Scan <Camera className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg text-black bg-white hover:bg-gray-100 border-none" asChild>
                  <Link href="/map">
                    Find Bins <MapPin className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FEATURES GRID - The "Functional" Part */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to go Green</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We combined the best features of Eco Snap Sort with advanced AI detection.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Camera className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle>AI Waste Detection</CardTitle>
                    <CardDescription>Instant identification of gadgets & value estimation.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 text-primary" asChild>
                      <Link href="/login">Try Scanner <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Feature 2 */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MapPin className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <CardTitle>Smart Bin Locator</CardTitle>
                    <CardDescription>Real-time map of verified e-waste drop points.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 text-blue-600" asChild>
                      <Link href="/map">View Map <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Feature 3 */}
                <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                      <Trophy className="h-6 w-6 text-yellow-600 group-hover:text-white" />
                    </div>
                    <CardTitle>Rewards Marketplace</CardTitle>
                    <CardDescription>Trade your recycling points for real coupons.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 text-yellow-600" asChild>
                      <Link href="/social">See Rewards <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center">
            <p>© 2026 EcoSnap v2.0. Built for HAXPLORE.</p>
          </div>
        </footer>
      </div>
  );
}