import React, { useState, useEffect } from 'react'

function Navbar() {
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            const url = 'https://api.escuelajs.co/api/v1/categories';
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
            <ul className='glass text-light list-unstyled p-3 fixed-top h-100' id='navbar'>
                <button className='d-inline float-end text-light b-color-main border-0' onClick={closeSidebar}>
                <h3>X</h3>
                </button>
                {categoriesData.map((category) =>
                    <li key={category.id} className='text-start fs-1'>
                        {category.name ? category.name : 'Fetching Name'}
                    </li>
                )}
            </ul>
            
        </>
    );
}

export default Navbar