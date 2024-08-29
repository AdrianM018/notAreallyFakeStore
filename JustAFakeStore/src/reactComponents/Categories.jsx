import React, { useEffect, useState } from 'react'

function Categories() {

    const [categoriesData, setcategoriesData] = useState()

    useEffect( () =>{
 async function getData() {
        const url = 'https://fakestoreapi.com/products/categories'
        try {
            const response = await fetch(url)

            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setcategoriesData(json)
            console.log(categoriesData)

        } catch (error) {
            console.error(error.message);
        }
    }

    getData()
    }, [])

    return (
        <>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-body-secondary">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg className="bi"></svg>
                            </a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories