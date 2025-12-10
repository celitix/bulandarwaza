import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
     {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-100 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
              Buland Darwaza
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 font-light">
                Nearby Places to Visit Around Buland Darwaza
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

       {/* card section */}
      <div className='container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-4'>
        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/blog1.jpg'
              alt='Jama Masjid'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'>Jama Masjid, Fatehpur Sikri</h1>
            <p className='text-sm md:text-base text-amber-700'>Located right next to Buland Darwaza, this grand mosque was built by Akbar and is one of the largest in India.</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/tomb.jpg'
              alt='Salim Chishti Tomb'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'>Tomb of Salim Chishti</h1>
            <p className='text-sm md:text-base text-amber-700'>A beautiful marble mausoleum inside the Fatehpur Sikri complex, known for its spiritual significance and stunning craftsmanship.</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Diwan-i-Aam.jfif'
              alt='Diwan-i-Aam'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'> Diwan-i-Aam</h1>
            <p className='text-sm md:text-base text-amber-700'>The public audience hall where Akbar addressed common people and listened to their grievances.</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Diwan-i-Khas.jfif'
              alt='Diwan-i-Khas'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'> Diwan-i-Khas</h1>
            <p className='text-sm md:text-base text-amber-700'>A unique structure with the famous central pillar — showcasing Akbar's interest in different religions and philosophies.</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Panch_Mahal.jpg'
              alt=' Panch Mahal'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'> Panch Mahal</h1>
            <p className='text-sm md:text-base text-amber-700'>A five-storey palace built in a pyramidal style, designed as a retreat for royal women. Offers great views and a cool breeze.
</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Jodha.jpg'
              alt='Jodha Bai’s Palace'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'>Jodha Bai’s Palace</h1>
            <p className='text-sm md:text-base text-amber-700'>Akbar’s queen’s residence, known for its Rajput-Mughal fusion architecture.</p>
          </div>
        </div>


        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Birbal_House.jfif'
              alt='Birbal’s House'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'>Birbal’s House</h1>
            <p className='text-sm md:text-base text-amber-700'>A well-preserved building believed to be the residence of Raja Birbal, one of Akbar’s trusted advisors.</p>
          </div>
        </div>


        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/ibadat-khana-sikri.jpg'
              alt='Ibadat Khana'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'>Ibadat Khana (House of Worship)</h1>
            <p className='text-sm md:text-base text-amber-700'>The place where Akbar held discussions with scholars of different religions.</p>
          </div>
        </div>

        <div className=' bg-orange-50 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/caravanserai1.jpg'
              alt='Caravanserai Ruins'
              className='w-full h-40'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl text-amber-900 font-serif mb-4'> Caravanserai Ruins</h1>
            <p className='text-sm md:text-base text-amber-700'>Ancient rest areas for travelers and traders, giving a glimpse of the Mughal-era hospitality system.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
