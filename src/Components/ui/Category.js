import React from 'react'

const Category = ({ category: { id, title, image } }) => {
    return (

        <a href='/#' className='group hover:bg-purple-50 flex flex-col gap-y-2 justify-center items-center w-[108px] h-[108px] text-center '>
            <img className='w-11 h-11 rounded border bg-gray-200 ' src={image} alt="" />
            <span className='text-xs md:text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color tracking-tight' >{title}</span>
        </a>

    )
}

export default Category