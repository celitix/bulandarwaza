import Image from 'next/image';
import { FaCrown, FaMosque, FaLandmark, FaQuoteLeft } from 'react-icons/fa';
import { GiArchBridge, GiStoneBlock } from 'react-icons/gi';
import { MdHeight, MdArchitecture } from 'react-icons/md';
import HeroSection from "@/app/components/hero";
import Link from 'next/link'; 

export default function BulandDarwazaPage() {
  return (
    <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">

 <HeroSection/>


     <div className="relative flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 opacity-60"></div>
  
  <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
    <div className="mb-4 sm:mb-6 flex justify-center">
      <FaMosque className="text-amber-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 sm:mb-6 drop-shadow-lg">
      The Arch of Imperial Glory
    </h1>
    <p className="text-xl sm:text-2xl md:text-3xl text-amber-700 font-light mb-6 sm:mb-8 italic">
      "Gate of Magnificence"
    </p>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12">
      One of the most imposing architectural achievements of the Mughal Empire,
      standing as the highest gateway in India and one of the grandest in the world.
    </p>
    <div className="mt-8 sm:mt-10 lg:mt-12">
      <div className="inline-block bg-white rounded-lg shadow-xl p-3 sm:p-4 max-w-full">
        <Image
          src="/assets/buland.jfif"
          alt="Buland Darwaza"
          width={800}
          height={500}
          className="rounded-lg w-full h-auto max-w-full"
        />
      </div>
    </div>
  </div>
</div>


      {/* Historical Background Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FaLandmark className="text-amber-600 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Historical Background
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Built during the reign of the Mughal Emperor <Link href="https://en.wikipedia.org/wiki/Akbar" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Akbar</Link>, Buland Darwaza stands 
                as a testament to his military victories, political ambitions, architectural 
                vision, and ideology of tolerance.
              </p>
              
              <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
                <p className="text-gray-700 leading-relaxed">
                  In <span className="font-bold text-amber-900">1601 AD</span>, Akbar ordered 
                  the construction of Buland Darwaza to celebrate his successful conquest of 
                  Gujarat — a major center of trade, wealth, and maritime power.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Bringing Gujarat under <Link href="https://en.wikipedia.org/wiki/Mughal_Empire" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Mughal</Link> control was a turning point in Akbar's 
                expansion strategy, marking a significant milestone in the empire's 
                westward expansion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <FaCrown className="mr-3 text-amber-600" />
                The Gateway Symbolized
              </h3>
              <ul className="space-y-4">
                {[
                  'Mughal supremacy',
                  'Political stability',
                  "Akbar's undisputed authority",
                  "The empire's westward expansion"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">✦</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 italic border-t border-amber-300 pt-4">
                The structure served both political propaganda and architectural grandeur.
              </p>
            </div>
          </div>

          {/* <div className="mt-12">
            <Image
              src="/assets/fatehpur-sikri.jpg"
              alt="Historical view of Buland Darwaza"
              width={1200}
              height={400}
              className="rounded-xl shadow-2xl w-full"
            />
          </div> */}


        </div>
      </section>

      {/* Architectural Grandeur Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GiArchBridge className="text-amber-600 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Architectural Grandeur
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <MdHeight className="text-5xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-amber-900 mb-2">54m</h3>
              <p className="text-gray-600">Height (177 feet)</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <MdArchitecture className="text-5xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-amber-900 mb-2">40m</h3>
              <p className="text-gray-600">Width</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <GiStoneBlock className="text-5xl text-amber-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-amber-900 mb-2">42</h3>
              <p className="text-gray-600">Steps to Entrance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <GiStoneBlock className="mr-3 text-amber-600" />
                Materials
              </h3>
              <ul className="space-y-3">
                {[
                  'Red sandstone',
                  'Black and white marble inlay',
                  'Intricate carvings & calligraphy'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">◆</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 italic bg-amber-50 p-4 rounded-lg">
                The design blends Persian, Indian, and Central Asian architectural elements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <MdArchitecture className="mr-3 text-amber-600" />
                Key Design Features
              </h3>
              <ul className="space-y-3">
                {[
                  'A massive central archway',
                  'Symmetrical domed kiosks (chhatris)',
                  'Calligraphy containing Quranic verses',
                  "Persian inscriptions praising Akbar's reign",
                  'Floral & geometric stone carvings'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">◆</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl shadow-xl">
            <Image
              src="/assets/bulandhis.png"
              alt="Architectural details of Buland Darwaza"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full mb-6"
            />
            <p className="text-center text-lg text-gray-700 italic">
              The gateway's commanding presence was meant to awe visitors entering Fatehpur Sikri.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Significance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FaQuoteLeft className="text-amber-600 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Historical Significance
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Political Symbol */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-4 rounded-full mr-4">
                  <FaCrown className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Political Symbol</h3>
              </div>
              <p className="text-gray-700 mb-4">The gateway symbolized:</p>
              <ul className="space-y-3">
                {[
                  'Mughal power',
                  'Consolidation of western India',
                  "Akbar's imperial ambitions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">▸</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Innovation */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-4 rounded-full mr-4">
                  <GiArchBridge className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Architectural Innovation</h3>
              </div>
              <p className="text-gray-700 mb-4">It pushed Mughal architectural boundaries with:</p>
              <ul className="space-y-3">
                {[
                  'Mega-scale structures',
                  'Fusion of Persian + Indian styles',
                  'Precision in stone inlay and calligraphy'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">▸</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Vision */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-4 rounded-full mr-4">
                  <FaQuoteLeft className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Cultural Vision</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The inscriptions and artistic elements reflect Akbar's interest in:
              </p>
              <ul className="space-y-3">
                {[
                  'Interfaith dialogue',
                  'Philosophy',
                  'Universal ethics'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 text-xl">▸</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urban Planning */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600 text-white p-4 rounded-full mr-4">
                  <FaLandmark className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900">Urban Planning of the Mughals</h3>
              </div>
              <p className="text-gray-700">
                Buland Darwaza was integral to the organized urban design of Fatehpur Sikri, 
                which demonstrated the Mughals' advanced planning skills.
              </p>
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <Image
              src="/assets/bulandhis.png"
              alt="Panoramic view of Buland Darwaza"
              width={1200}
              height={500}
              className="rounded-xl shadow-2xl w-full"
            />
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <FaMosque className="text-5xl mx-auto mb-4 opacity-80" />
          <p className="text-lg mb-2">Buland Darwaza - A Testament to Mughal Magnificence</p>
          <p className="text-amber-300 text-sm md:text-lg">Located in Fatehpur Sikri, India</p>
        </div>
      </footer>
    </div>
  );
}
