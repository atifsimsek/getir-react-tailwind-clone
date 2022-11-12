/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { Collapse } from 'react-collapse';
import { IoIosArrowDown } from "react-icons/io"

const Menu = ({ title, items }) => {

    const WindowWidth = useWindowWidth()
    const [open, setOpen] = useState(false)


    const toggleCollapse = () => {

        if (WindowWidth <= 768) {
            setOpen(!open)
        }

    }


    useEffect(() => {
        if (open && WindowWidth <= 768) {
            setOpen(false)
        }

        if (!open && WindowWidth > 768) {
            setOpen(true)
        }

    }, [WindowWidth])

    return (
        <section>
            <nav className='grid gap-y-4   '>
                <h6 onClick={toggleCollapse} className='text-lg flex items-center justify-between text-primary-brand-color'>{title}
                    <button className='grid w-6 h-6 md:hidden  place-items-center bg-primary-brand-color bg-opacity-10 rounded-lg text-primary-brand-color ' >
                        <span className={`transition-all transform ${open ? "rotate-180" : ""}`}>
                        <IoIosArrowDown size={15} />
                        </span>
                        </button>
                </h6>
                <Collapse isOpened={open}>
                    <ul className='grid gap-y-2 ho'>
                        {
                            items.map((item, index) => (
                                <li key={index}>
                                    <a className='text-sm hover:text-brand-color' href="/">{item.title}</a>
                                </li>
                            ))
                        }

                    </ul>
                </Collapse>
            </nav>
        </section>
    )
}

export default Menu