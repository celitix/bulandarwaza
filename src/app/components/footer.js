import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/blog3.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-[#daa520]">Buland Darwaza</div></Link>
          <p className="text-gray-300 text-sm ">
            Buland Darwaza – where Mughal grandeur meets the sky! Standing 54 meters tall in Fatehpur Sikri, this iconic "Gate of Victory" is more than just a monument; it's an experience. Visit this architectural masterpiece near Agra and feel the power of history beneath your feet.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/buland-darwaza-the-gate-of-victory" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-[#daa520] transition leading-snug">
              Buland Darwaza “The Gate of Victory
              </p>
            </Link>

      
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-[#daa520] transition">Home</Link></li>
            <li><Link href="/about-bulanddarwaza" className="hover:text-[#daa520] transition">About</Link></li>
            <li><Link href="/nearby-places" className="hover:text-[#daa520] transition">Nearby Places</Link></li>
            <li><Link href="/getting-there" className="hover:text-[#daa520] transition">Getting There</Link></li>
            <li><Link href="/blog" className="hover:text-[#daa520] transition">Blog</Link></li>
            <li><Link href="/directions" className="hover:text-[#daa520] transition">Directions</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3551.9712315712873!2d77.662977!3d27.094203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397393fd030fffff%3A0xd4ce0dc503f23dfb!2sBuland%20Darwaza!5e0!3m2!1sen!2sin!4v1764677137401!5m2!1sen!2sin" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
