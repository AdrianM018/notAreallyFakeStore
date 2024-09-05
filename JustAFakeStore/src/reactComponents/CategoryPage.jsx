import React from 'react'
import Header from './Header'

function CategoryPage({clickedCategory}) {
  return (
    <>
    <Header/>
    <div>{clickedCategory}</div>
    </>
  )
}

export default CategoryPage