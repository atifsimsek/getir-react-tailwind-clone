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
        <div className='bg-white shadow-category-shadow '>
            <div className='  bg-white py-5 container mx-auto'>
                <Title title="Kategoriler" />
                <div className='grid -ml-8 md:ml-0 grid-cols-4 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6'>
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