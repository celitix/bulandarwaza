import React from 'react';
import Image from 'next/image';
import { FaTrain, FaPlane, FaMapMarkerAlt, FaClock, FaMap } from 'react-icons/fa';
import { FaCar, FaWalking, FaShuttleVan, FaMotorcycle } from "react-icons/fa";

export default function GettingThere() {
  const roadRoutes = [
    {
      from: "Agra",
      distance: "40 km",
      time: "1 hour",
      route: "Agra – Jaipur Highway (NH21) → Fatehpur Sikri"
    },
    {
      from: "Delhi",
      distance: "233 km",
      time: "4–5 hours",
      route: "Yamuna Expressway → Agra → Fatehpur Sikri"
    },
    {
      from: "Jaipur",
      distance: "200 km",
      time: "3.5–4 hours",
      route: "NH21 → Bharatpur → Fatehpur Sikri"
    }
  ];

  const transportOptions = ["Taxi", "Private car", "Tourist buses", "Local UP roadways buses"];
  // const localTransport = ["E-rickshaws", "Auto rickshaws", "Local shuttle services", "Walking (if nearby)"];

const localTransport = [
  {
    title: " Rental Bikes",
    icon: <FaMotorcycle className="mx-auto text-amber-700 text-3xl" />,
  },
  {
    title: "Cab Services",
    icon: <FaCar className="mx-auto text-amber-700 text-3xl" />,
  },
  {
    title: "Local shuttle services",
    icon: <FaShuttleVan className="mx-auto text-amber-700 text-3xl" />,
  },
  {
    title: "Walking (if nearby)",
    icon: <FaWalking className="mx-auto text-amber-700 text-3xl" />,
  },
];
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-100 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
              Buland Darwaza
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 font-light">
              Your Complete Travel Guide
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* By Road Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-orange-200 p-4 rounded-full mr-4">
              <FaCar className="w-8 h-8 text-orange-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900">By Road</h2>
              <p className="text-amber-700 text-sm">Most Convenient Option</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {roadRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border border-orange-300 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-amber-900 mb-4">From {route.from}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-amber-800">
                    <FaMap className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="font-semibold">{route.distance}</span>
                  </div>
                  <div className="flex items-center text-amber-800">
                    <FaClock className="w-5 h-5 mr-2 text-orange-500" />
                    <span className="font-semibold">{route.time}</span>
                  </div>
                  <div className="flex items-start text-amber-700 text-sm md:text-base mt-3 pt-3 border-t border-amber-100">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 mt-1 text-orange-500 flex-shrink-0" />
                    <span>{route.route}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-500">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Transport Options Available</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {transportOptions.map((option, index) => (
                <div key={index} className="flex items-center bg-orange-50 rounded-lg p-3">
                  <span className="text-orange-600 mr-2">✔</span>
                  <span className="text-amber-800 text-sm md:text-base">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By Train Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8 ">
            <div className="bg-amber-200 p-4 rounded-full mr-4">
              <FaTrain className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-3xl font-bold text-amber-900">By Train</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border border-amber-400">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Nearest Station</h3>
              <div className="space-y-3">
                <p className="text-lg text-amber-800 font-semibold">Fatehpur Sikri Railway Station (FTS)</p>
                <div className="flex items-center text-amber-700">
                  <FaMap className="w-5 h-5 mr-2 text-amber-500" />
                  <span>1 km from the monument</span>
                </div>
                <p className="text-sm md:text-base text-amber-600 mt-4 bg-amber-50 p-3 rounded-lg">
                  Autos and rickshaws are easily available from the station
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border border-orange-400">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Major Alternative</h3>
              <div className="space-y-3">
                <p className="text-lg text-amber-800 font-semibold">Agra Cantt Railway Station</p>
                <p className="text-amber-700">Well connected to all major Indian cities</p>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm md:text-base text-amber-800">
                    <span className="font-semibold">Note:</span> From Agra Cantt, you can hire a taxi or take a bus to reach Fatehpur Sikri (40 km)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By Air Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-orange-200 p-4 rounded-full mr-4">
              <FaPlane className="w-8 h-8 text-orange-700" />
            </div>
            <h2 className="text-3xl font-bold text-amber-900">By Air</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-t-4 border border-orange-300">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Nearest Airport</h3>
            <div className="space-y-3">
              <p className="text-lg text-amber-800 font-semibold">Agra Airport (AGR)</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center text-amber-700">
                  <FaMap className="w-5 h-5 mr-2 text-orange-500" />
                  <span><span className="font-semibold">Distance:</span> 40 km</span>
                </div>
                <div className="flex items-center text-amber-700">
                  <FaClock className="w-5 h-5 mr-2 text-orange-500" />
                  <span><span className="font-semibold">Travel Time:</span> 1 hour by road</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl shadow-lg p-6 border border-amber-500">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">Other Airports</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-amber-900">Delhi Airport (DEL)</p>
                <p className="text-amber-700 text-sm md:text-base mt-1">4–5 hours away by road</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-amber-900">Jaipur Airport (JAI)</p>
                <p className="text-amber-700 text-sm md:text-base mt-1">3.5 hours away by road</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Transport Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 border-amber-600 border rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Local Transport Inside Fatehpur Sikri</h2>
            <p className="text-amber-800 mb-6">To reach Buland Darwaza from the parking zone, you can use:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {localTransport.map((option, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow">
                  {/* <span className="text-2xl mb-2 block">🛺</span> */}
                  <span className="text-2xl mb-2 block">{option.icon}</span>
                  <p className="text-amber-800 text-sm md:text-base font-medium">{option.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl border border-amber-600 shadow-lg">
          <p className="text-amber-800 text-lg">
            Plan your visit to the magnificent <span className="font-bold text-amber-900">Buland Darwaza</span>,
            one of India's architectural marvels!
          </p>
        </div>
      </div>
    </div>
  );
}