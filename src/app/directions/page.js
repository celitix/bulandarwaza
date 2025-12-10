import React from 'react'
import { BsStars } from "react-icons/bs";

const directionpage = () => {
  return (
  <>
  {/* Hero section */}
  <section className="w-full pt-16 flex justify-center items-center">
      <div className="max-w-6xl px-6 text-center">
          <h2 className="font-abril font-bold text-3xl text-amber-900 mt-16">Explore Beautiful Places Around the Buland Darwaza</h2>
  
          <div className="flex items-center justify-center gap-4 my-4">
                       <span className="h-px w-16 bg-[#daa520]"></span>
                       <BsStars className="text-[#daa520] text-3xl" />
                       <span className="h-px w-16 bg-[#daa520]"></span>
          </div>
      </div>
  </section>

  {/*================= Map section =================*/}
<section className='flex justify-center items-center py-12 lg:px-16 px-6 bg-white'>
      <div className='lg:w-[90%] w-full container mx-auto'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3551.9712315712873!2d77.662977!3d27.094203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397393fd030fffff%3A0xd4ce0dc503f23dfb!2sBuland%20Darwaza!5e0!3m2!1sen!2sin!4v1764677137401!5m2!1sen!2sin" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl border-0"
          ></iframe>
        </div>

</section>

  </>
  )
}

export default directionpage