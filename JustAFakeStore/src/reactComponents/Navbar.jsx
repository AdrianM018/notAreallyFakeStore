import React, {useState, useEffect} from 'react'

function Navbar() {

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
        <ul>
            {categoriesData.map((category) =>{
                <li key={category.id}>{category.name ? category.name : 'Fetching Name'}</li>
            })}
        </ul>
    )
}

export default Navbar