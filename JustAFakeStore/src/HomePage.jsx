import './App.css'
import Header from './reactComponents/Header'
import Hero from './reactComponents/Hero'
import Categories from './reactComponents/Categories'
import CategoryPage from './reactComponents/CategoryPage'
import { useState } from 'react'
import { Route } from 'react-router-dom'


function HomePage() {
  const [clickedCategory, setclickedCategory] = useState('da')

  return (
    <>
      <Header />
      <Hero/>
      <Categories setclickedCategory={setclickedCategory} />
      <CategoryPage clickedCategory={clickedCategory}/>
    </>
  )
}

export default HomePage
