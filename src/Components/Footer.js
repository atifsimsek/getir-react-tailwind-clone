import Menu from './ui/Menu'
import { BiGlobe } from "react-icons/bi"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


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
        <>
            <div className=' bg-white mt-8 pb-6'>
                <div className='container mx-auto  '>
                    <div className='grid  md:grid-cols-2 lg:grid-cols-5 gap-5 pt-10'>
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
                        <div className='hidden lg:flex justify-end'>
                            <a className='bg-white rounded-lg w-[104px] h-[116px] p-4 shadow' href="/">
                                <img className='w-[72px] h-[84px]' src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" />

                            </a>
                        </div>
                    </div>


                </div>
            </div>

            <div className=' bg-gray-50 md:bg-white md:border-t border-gray-150  py-6 '>
                <div className='container mx-auto flex justify-between flex-col md:flex-row items-center '>
                    <div className='md:flex-row text-xs text-gray-700 flex flex-col items-center justify-center gap-2 mb-2  gap-x-8'>
                        &copy;2022 Getir
                        <a className='text-xs pl-2  text-primary-brand-color before:hidden before:md:block  hover:underline relative before:w-[3.5px] before:h-[3.5px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:rounded-full before:-translate-y-1/6' href="/">Bilgi Toplumu Hizmetleri</a>
                    </div>
                    <nav className='flex flex-col md:flex-row gap-2.5'>
                        <div className='flex gap-2 mt-2 md:mt-0'>
                            <a className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center' href="/">
                                <FaFacebook size={21} />
                            </a>
                            <a className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center' href="/">
                                <FaTwitter size={21} />
                            </a>
                            <a className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center' href="/">
                                <FaInstagram size={21} />
                            </a>
                        </div>
                        <div>
                            <a className='h-8 flex transit bg-white md:bg-none shadow  md:shadow-none  items-center px-2 text-sm gap-x-2 rounded-md text-gray-500 border border-gray-150 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent' href="/">
                                <BiGlobe size={18} />
                                Türkçe (TR)
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Footer