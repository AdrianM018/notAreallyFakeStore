import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            const url = 'https://dummyjson.com/products/categories';
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Response status: ${response.status}');
                }

                const json = await response.json();
                setCategoriesData(json);
                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        getData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    function DisplayNavbar() {
        if (!isSidebarVisible) {
            return (
                <button onClick={() => setIsSidebarVisible(true)} className='border-0 text-light bg-color-main'>
                    <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
            )
        } else {
            return (
                <ul className='text-light glass-colored list-unstyled p-3 fixed-top h-100 overflow-y-scroll overflow-x-hidden' id='navbar'>
                    <button className='d-inline text-light bg-secondery-color rounded-circle px-2' id='closeNavbar' onClick={()=>{
                        setIsSidebarVisible(false)
                    }}>
                        <h3 className='m-2'>X</h3>
                    </button>
                    {categoriesData.map((category) =>
                        <li key={category.id} className='text-center fs-1 zoom-anim' onClick={()=>{
                            const Category_string = JSON.stringify(category.name);
                            sessionStorage.setItem('PressedOnCategory', Category_string)
                            navigate('/CategoryPage')
                            location.reload();
                            setIsSidebarVisible(false)
                        }}>
                            {category.name ? category.name : 'Fetching Name'}
                        </li>
                    )}
                </ul>
            )
        }

    }

    return (
        <>
            <DisplayNavbar  ></DisplayNavbar  >
        </>
    );
}

export default Navbar