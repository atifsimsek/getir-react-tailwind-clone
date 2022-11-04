import React from 'react'

const Card = () => {
    return (
        <div className='container w-10/12 mx-auto grid grid-cols-3 gap-x-3 '>
            <div className='py-11 bg-white flex flex-col text-center items-center gap-y-4 shadow-sm border border-gray-50 rounded-lg'>
                <img className='p-3'  src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
                <h3 className='text-lg text-primary-brand-color font-semibold'>Her siparişinize bir kampanya</h3>
                <p className='text-sm text-gray-500'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
            </div>
            <div className='py-11 bg-white flex flex-col text-center items-center gap-y-4 shadow-sm border border-gray-50 rounded-lg'>
                <img className='p-3' src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
                <h3 className='text-lg text-primary-brand-color font-semibold'>Dakikalar içinde kapınızda</h3>
                <p className='text-sm text-gray-500'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
            </div>
            <div className='py-11 bg-white flex flex-col text-center items-center gap-y-4 shadow-sm border border-gray-50 rounded-lg'>
                <img className='p-3'  src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
                <h3 className='text-lg text-primary-brand-color font-semibold'>Binlerce çeşit mutluluk</h3>
                <p className='text-sm text-gray-500'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
            </div>
        </div>
    )
}

export default Card