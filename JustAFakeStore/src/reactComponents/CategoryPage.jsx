import React from 'react'
import Header from './Header'

function CategoryPage() {
  let SingleCategory = JSON.parse(sessionStorage.getItem(`PressedOnCategory`))
  return (
    <>
    <Header/>
    <p className='mt-5'>{SingleCategory}</p>
    </>
  )
}

export default CategoryPage