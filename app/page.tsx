import Image from "next/image";
import {
  CarFront,
  MapPin,
  Clock,
  ShieldCheck,
  CreditCard,
  PhoneCall,
  Download,
  Star,
  Map,
  CheckCircle2,
  Navigation
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1e293b] overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 pt-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto clay-pill px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="clay-icon-primary w-10 h-10">
              <CarFront size={22} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-[var(--foreground)]">RideNow</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#home" className="hover:text-[var(--primary)] transition-colors">Home</a>
            <a href="#features" className="hover:text-[var(--primary)] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[var(--primary)] transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-[var(--primary)] transition-colors">Reviews</a>
          </div>

          <button className="clay-btn-primary px-6 py-2.5 text-sm md:text-base hidden sm:block">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 clay-pill px-4 py-2 w-fit mx-auto lg:mx-0 text-sm font-semibold text-[var(--primary)]">
              <CheckCircle2 size={18} />
              <span>#1 Cab Service in Bhopal</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[var(--secondary)]">
              Your City, <br />
              <span className="text-[var(--primary)]">Your Ride,</span> <br />
              Right Now.
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience safe, comfortable, and affordable cab rides across Bhopal.
              Whether heading to college or the office, we're just a tap away.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <button className="clay-btn-primary px-8 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <MapPin size={20} />
                Book a Ride
              </button>
              <button className="clay-btn-secondary px-8 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <Download size={20} />
                Download App
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Soft decorative background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-[var(--primary)]/20 to-blue-300/20 blur-3xl -z-10"></div>

            <div className="clay-card p-4 rounded-3xl relative animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="/hero_cab.png"
                alt="Claymorphism 3D Cab Illustration"
                width={550}
                height={550}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl form-bold font-extrabold text-[var(--secondary)] mb-4">Why Choose RideNow?</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">We bring the best-in-class travel experience to your doorstep with unmatched reliability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Clock size={28} />, title: "24/7 Service", desc: "Day or night, our fleet is ready to get you safely to your destination anywhere in the city." },
            { icon: <CreditCard size={28} />, title: "Affordable Pricing", desc: "Honest, transparent upfront pricing with absolutely zero hidden surge charges." },
            { icon: <ShieldCheck size={28} />, title: "Verified Drivers", desc: "Strict background checks and professional training ensure your utmost safety." },
            { icon: <Navigation size={28} />, title: "Fast Pickup", desc: "Our smart routing algorithm finds the closest cab so you never have to wait long." }
          ].map((feature, i) => (
            <div key={i} className="clay-card p-8 flex flex-col items-center text-center">
              <div className="clay-icon-primary w-16 h-16 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--secondary)]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="clay-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"></div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary)] mb-4">How It Works</h2>
            <p className="text-gray-600">Three simple steps to start your journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-1 bg-gray-200/60 z-0"></div>

            {[
              { icon: <Map size={32} />, step: "01", title: "Set Destination", desc: "Enter your pickup spot and destination in our app." },
              { icon: <CarFront size={32} />, step: "02", title: "Choose Your Ride", desc: "Select between mini, sedan, or SUV depending on your needs." },
              { icon: <Star size={32} />, step: "03", title: "Enjoy the Journey", desc: "Sit back and relax while our verified driver takes you there." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="clay-icon-secondary w-24 h-24 mb-6 relative">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 bg-[var(--accent)] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[var(--secondary)] mb-4">Loved by Bhopal</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">Don't just take our word for it. Here's what our daily riders have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Rahul Sharma", role: "Student at MANIT", text: "RideNow has completely changed how I commute to college. Fast, extremely affordable, and the drivers are very polite!" },
            { name: "Sneha Patel", role: "Tech Professional", text: "I regularly use RideNow to get to MP Nagar. The clay UI app is beautiful, and I've never had a delayed pickup. Highly recommended." },
            { name: "Aditya Verma", role: "Frequent Traveler", text: "The zero-surge pricing is a lifesaver. Even during peak rainy days, the prices remained fair and the ride was super comfortable." }
          ].map((testimonial, i) => (
            <div key={i} className="clay-card p-8 flex flex-col gap-4">
              <div className="flex text-yellow-500 gap-1 pb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-gray-700 italic flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--secondary)]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto mb-20">
        <div className="clay-card rounded-[40px] p-12 md:p-20 text-center flex flex-col items-center mt-8">
          <div className="clay-icon-primary w-20 h-20 mb-8">
            <CarFront size={36} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] mb-6">Ready to Hit the Road?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
            Join thousands of riders in Bhopal who have upgraded their daily commute. Download the RideNow app today and get 50% off your first ride!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
            <button className="clay-btn-primary px-10 py-4 text-lg w-full sm:w-auto font-bold tracking-wide">
              Book a Ride
            </button>
            <button className="clay-btn-secondary px-10 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2 font-bold tracking-wide">
              <PhoneCall size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6 bg-[var(--secondary)] text-white/80 rounded-t-[40px] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 px-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <CarFront size={28} className="text-[var(--primary)]" />
              <span className="font-bold text-3xl tracking-tight text-white">RideNow</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400 mb-6">
              RideNow is Bhopal's leading cab service offering soft-styled clay UI, verified drivers, and an overall premium commute experience tailored just for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors flex items-center justify-center">
                <span className="sr-only">Facebook</span>
                <span className="font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                <span className="font-bold">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--primary)] transition-colors flex items-center justify-center">
                <span className="sr-only">Instagram</span>
                <span className="font-bold cursor-pointer">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 hidden sm:flex flex-col">
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Safety First</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Get the App</h4>
            <div className="flex flex-col gap-4">
              <button className="bg-black border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors">
                <Image src="/next.svg" width={24} height={24} alt="App Store" className="invert" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="text-sm font-semibold leading-tight text-white">App Store</div>
                </div>
              </button>
              <button className="bg-black border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors">
                <Image src="/vercel.svg" width={24} height={24} alt="Google Play" className="invert" />
                <div className="text-left">
                  <div className="text-[10px] leading-tight">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 px-8">
          <p>&copy; {new Date().getFullYear()} RideNow Cab Service. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating animations definitions (add these to css or tailwind config, but inline here for simplicity since tailwind handles standard ones, wait I need to add float animation) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
}
