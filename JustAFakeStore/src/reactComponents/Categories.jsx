import React, { useEffect, useState } from 'react';

function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state for better error handling

    useEffect(() => {
        async function getData() {
            const url = 'https://api.escuelajs.co/api/v1/categories';
            try {
                setLoading(true);  // Start loading
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Response status: ${response.status}');
                }

                const json = await response.json(); // Await the JSON promise
                setCategoriesData(json);  // Update state with fetched data
                setLoading(false);  // End loading when data is fetched

            } catch (error) {
                setError(error.message);
                setLoading(false);  // End loading in case of error
            }
        }

        getData();
    }, []);  // Empty dependency array means this runs once after the component mounts

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
                        <div className="col-md-6" key={category.id}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">{category.name ? category.name : 'Fetching Name'}</h3>
                                    <div className="mb-1 text-body-secondary">Nov 12</div>
                                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                        See products
                                        <svg className="bi"></svg>
                                    </a>
                                </div>
                                <div className="col d-lg-block">
                            <img src={category.image} alt="" className='img-thumbnail'/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
    );
}

export default Categories;