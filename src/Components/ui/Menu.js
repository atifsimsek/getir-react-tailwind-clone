import React from 'react'

const Menu = ({ title, items }) => {
    console.log(items);
    return (
        <section>
            <nav className='grid gap-y-4'>
                <h6 className='text-lg text-primary-brand-color'>{title}</h6>
                <ul className='grid gap-y-2 ho'>
                    {
                        items.map((item, index) => (
                            <li>
                                <a className='text-sm hover:text-brand-color' href="/">{item.title}</a>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </section>
    )
}

export default Menu