import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate()
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
                    throw new Error(`Response status: ${response.status}`);
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

    return (
            <>
                <div className="row mb-2">
                    {categoriesData.map((category) =>
                        <div className="col-md-4 col-sm-4 col-6 " key={category.slug}>
                            <div className="row g-0 border border-dark-shades rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-color-anim" onClick={()=>{
                                        const Category_string = JSON.stringify(category.name);
                                        sessionStorage.setItem('PressedOnCategory', Category_string)
                                        navigate('/CategoryPage')
                            }}>
                                <div className="col p-lg-4 p-3 d-flex flex-column position-static">
                                    <h3 className="mb-0 fs-2">{category.name ? category.name : 'Fetching Name'}</h3>
                                    <p>See products</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
    );
}

export default Categories;