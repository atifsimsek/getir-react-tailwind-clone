import React from 'react'
import Menu from './Menu'

const Footer = () => {

    const menus = [
        {
            title: "Getir\'i Keşfedin",
            items: [
                {
                    title: "Hakkımızda"
                },
                {
                    title: "Kariyer"
                },
                {
                    title: "Teknoloji Kariterleri"
                },
                {
                    title: "İletişim"
                },
                {
                    title: "Sosyal Sorumluluk Projeleri"
                }
            ]
        },
        {
            title: "Yardıma mı ihtiyacınız var ?",
            items: [
                {
                    title: "Sıkça Sorulan Sorular"
                },
                {
                    title: "Kişisel Verilerin Korunması"
                },
                {
                    title: "Gizlilik Politikası"
                },
                {
                    title: "Kullanım Koşulları"
                },
                {
                    title: "Çerez Politikası"
                }
            ]

        },
        {
            title: "İş Ortağımız Olun",
            items: [
                {
                    title: "Bayimiz Olun",

                },
                {
                    title: "Deponuzu Kiralayın"
                },
                {
                    title: "GetirYemek Restoranı Olun"
                },
                {
                    title: "GetirÇarşı İşletmesi Olun"
                },
                {
                    title: "Zincir Restoranlar"
                }
            ]
        }
    ]




    return (
        <div className='bg-white mt-8'>
            <div className='container mx-auto w-10/12'>
                <div className='grid grid-cols-4 pt-10'>
                    <section>
                        <h6 className='text-lg text-primary-brand-color pb-4'>Getir'i İndirin</h6>
                        <nav className='grid gap-y-4'>
                            <a href="/">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                            </a>
                            <a href="/">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                            </a>
                            <a href="/">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                            </a>
                        </nav>
                    </section>
                    {menus.map((menu, index) => <Menu key={index} {...menu} />)}
                </div>
                <div className='flex justify-between items-center border-t border-gray-150 mt-6 py-6'></div>
                <div>
                    &copy;2022 Getir
                    <a className='text-xs  text-gray-700 pl-4' href="/">Bilgi Toplumu Hizmetleri</a>
                </div>

            </div>
        </div>
    )
}

export default Footer