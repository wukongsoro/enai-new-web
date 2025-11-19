import { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Global AI Sales Automation Locations | Enai.ai",
  description: "Find Enai.ai's global presence. We serve 11 major tech hubs worldwide with localized AI sales automation solutions. London, New York, San Francisco, and more.",
};

const locations = [
  {
    region: "North America",
    cities: [
      { name: "New York", slug: "new-york", country: "USA" },
      { name: "San Francisco", slug: "san-francisco", country: "USA" },
      { name: "Austin", slug: "austin", country: "USA" },
      { name: "Boston", slug: "boston", country: "USA" },
      { name: "Seattle", slug: "seattle", country: "USA" },
    ]
  },
  {
    region: "Europe",
    cities: [
      { name: "London", slug: "london", country: "UK" },
      { name: "Amsterdam", slug: "amsterdam", country: "Netherlands" },
      { name: "Berlin", slug: "berlin", country: "Germany" },
      { name: "Paris", slug: "paris", country: "France" },
    ]
  },
  {
    region: "Asia Pacific",
    cities: [
      { name: "Singapore", slug: "singapore", country: "Singapore" },
      { name: "Sydney", slug: "sydney", country: "Australia" },
    ]
  }
];

export default function LocationsHubPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-6 mt-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Presence, Local Impact
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Enai.ai provides AI sales automation solutions tailored to local markets across 11 major tech hubs worldwide.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {locations.map((region) => (
                <div key={region.region}>
                  <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">
                    {region.region}
                  </h2>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {region.cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/locations/${city.slug}`}
                        className="group block bg-gray-50 hover:bg-orange-50 border border-transparent hover:border-orange-100 rounded-xl p-6 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <MapPin className="w-5 h-5 text-orange-600" />
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-700">
                            {city.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 ml-8">
                          {city.country}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Don't See Your City?</h2>
            <p className="text-lg opacity-80 mb-8">
              Our AI agents work globally from the cloud. No matter where you are located, Enai.ai can automate your sales process.
            </p>
            <Link
              href="https://calendly.com/enai-ai2024/30min"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition inline-block"
            >
              Schedule a Global Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
