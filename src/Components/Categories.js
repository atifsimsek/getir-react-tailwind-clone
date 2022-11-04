import React, { useEffect, useState } from 'react'
import data from "../api/categories.json"
import Category from './ui/Category'
import Title from './ui/Title'
const Categories = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {

    
        setCategories(data)
    }, [])


    return (
        <div className='bg-white h-[308px] shadow-category-shadow '>
            <div className='  bg-white py-5 container mx-auto w-10/12'>
                <Title title="Kategoriler"/>
                <div className='grid grid-cols-10 '>
                    {!categories.length && "Loading..."}
                    {categories.map((item) => (
                        <Category key={item.id} category={item} />
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Categories