import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-orange-100 to-amber-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10 px-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
                            Buland Darwaza
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-800 font-light">
                            All About Buland Darwaza
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-white opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
            </div>

            {/* Second Section */}
            <div className='flex flex-col container mx-auto max-w-6xl py-12 px-4 gap-8'>
                <div className='text-center'>
                    <p className='text-sm md:text-lg text-amber-800 font-light'>The majestic Buland Darwaza, also known as the Gate of Magnificence, stands as one of the tallest and most impressive gateways in the world. Built in 1601 AD by the Mughal Emperor Akbar, this monumental structure was erected to commemorate his victorious campaign in Gujarat. Rising proudly at a height of 54 meters, Buland Darwaza dominates the southern entrance of Fatehpur Sikri and symbolizes the power, ambition, and architectural mastery of the Mughal era.Constructed using red and buff sandstone with elegant marble accents, the gateway showcases intricate Persian inscriptions, arched niches, geometric carvings, and beautifully crafted <Link href="https://en.wikipedia.org/wiki/Calligraphy" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">calligraphy.</Link> The craftsmanship reflects the artistic brilliance and cultural richness of Akbar’s reign.</p>
                </div>
                <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                    <div className="flex justify-center">
                        <img
                            src='/assets/blog1.jpg'
                            alt='Buland Darwaza'
                            className='w-60 h-60 rounded-full border border-amber-600 p-2'
                        />
                    </div>

                    <div className="flex justify-center">
                        <img
                            src='/assets/panormicview.jfif'
                            alt='Buland Darwaza'
                            className='w-60 h-60 rounded-full border border-amber-600 p-2'
                        />
                    </div>

                    <div className="flex justify-center">
                        <img
                            src='/assets/Caravanserai.jpg'
                            alt='Buland Darwaza'
                            className='w-60 h-60 rounded-full border border-amber-600 p-2'
                        />
                    </div>
                </div>
            </div>


            {/* Third Section */}
<div className='bg-amber-50'>
           <div className="max-w-6xl mx-auto ">
    <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center py-12 sm:px-4 md:px-8 lg:px-10   gap-8'>
        
        {/* Left Section */}
        <div className='space-y-5 px-4'>
            <h1 className='text-2xl font-semibold text-amber-900'>Scenic Views from Fatehpur Sikri</h1>
            <div className='w-32 h-1 bg-amber-600 rounded'></div>

            <p>
                Buland Darwaza is positioned at the highest point of Fatehpur Sikri, offering a breathtaking 
                panoramic view of the surrounding plains. When you ascend its grand staircase, you are rewarded 
                with a sweeping landscape that reflects the beauty and vastness of Mughal architecture.
                <br /><br />
                The area around the gateway is serene, peaceful, and perfect for photography, historical exploration, 
                and quiet reflection. Fatehpur Sikri itself is a <Link href="https://en.wikipedia.org/wiki/UNESCO" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">UNESCO</Link> World Heritage Site, known for its stunning 
                palaces, mosques, courtyards, and stone-carved structures.
            </p>

            <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                <li>Jama Masjid, a grand mosque built by Akbar</li>
                <li>Diwan-i-Aam & Diwan-i-Khas, known for their elegant Mughal design</li>
                <li>Panch Mahal, the five-storeyed masterpiece of stone columns</li>
                <li>Hawa Mahal of Sikri, with intricate jharokhas and breeze channels</li>
            </ul>
        </div>

        {/* Right Section */}
        <div className='space-y-5 px-4'>
            <h1 className='text-2xl font-semibold text-amber-900'>The Essence of Mughal Grandeur</h1>
            <div className='w-32 h-1 bg-amber-600 rounded'></div>

            <p>
                Mughal architecture represents a perfect blend of strength, symmetry, and artistic excellence—and 
                Buland Darwaza is one of its greatest expressions. The gateway stands as a testament to India’s 
                glorious past, where craftsmanship and imperial vision shaped some of the world’s most admired monuments.
                <br /><br />
                The sheer size of the structure, the depth of its carvings, and the inspiring inscriptions reflect 
                Akbar’s progressive mindset and enduring legacy. Standing before Buland Darwaza gives visitors a sense 
                of majesty, pride, and reverence for the architectural achievements of ancient India.
                <br />
                
            </p>

            <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                <li>Symbol of Mughal strength and architectural mastery</li>
                <li>Reflects Akbar’s vision and progressive ideology</li>
                <li>Showcases extraordinary stone craftsmanship</li>
                <li>Continues to inspire modern architects and historians</li>
            </ul>
        </div>

    </div>
</div>
</div>


            {/*  */}
            <div className="container mx-auto max-w-5xl flex flex-col items-center gap-4 py-12 px-4">
                <h1 className="text-5xl text-amber-900 text-center font-serif">The Essence of Mughal Architecture</h1>
                <div className="w-32 h-1 bg-amber-600 rounded"></div>
                <p className="text-center text-sm md:text-lg text-gray-700">
                    Standing atop the hill at Fatehpur Sikri, the gateway overlooks the surrounding landscape and served as a ceremonial entrance to the imperial city. Even today, Buland Darwaza remains a proud symbol of Mughal architecture, inviting travelers to admire its grandeur and explore the historic complex of Fatehpur Sikri.
                </p>
            </div>

            {/*  */}
           <div className=''>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-4 gap-4'>
                <div className='w-full h-40 bg-amber-50 flex flex-col items-center justify-center text-amber-800'>
                    <h1 className='md:text-2xl sm:text-[14px] font-semibold'>50 INR Indian, 610 INR Foreigner</h1>
                    <p className='md:text-2xl sm:text-sm'>Entry Fee</p>
                </div>

                <div className='w-full h-40 bg-amber-50 flex flex-col items-center justify-center text-amber-800'>
                    <h1 className='md:text-2xl sm:text-[14px] font-semibold'>8 AM - 7 PM</h1>
                    <p className='md:text-2xl sm:text-sm'>Visiting Hours</p>
                </div>

                <div className='w-full h-40 bg-amber-50 flex flex-col items-center justify-center text-amber-800'>
                    <h1 className='md:text-2xl sm:text-[14px] font-semibold'>All days of week </h1>
                    <p className='md:text-2xl sm:text-sm '>Open</p>
                </div>
            </div>
           </div>


        </div>
    )
}

export default page
