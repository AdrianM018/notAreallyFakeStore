import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    function closeSidebar(){

    }

    return (
        <>
            <ul className='glass text-light list-unstyled p-3 fixed-top h-100 overflow-y-scroll' id='navbar'>
                <button className='d-inline text-light b-color-main border-1 rounded-circle border-light px-2' onClick={closeSidebar} id='closeNavbar'>
                <h3 className='m-2'>X</h3>
                </button>
                {categoriesData.map((category) =>
                    <li key={category.id} className='text-center fs-1'>
                        {category.name ? category.name : 'Fetching Name'}
                    </li>
                )}
            </ul>
            
        </>
    );
}

export default Navbar