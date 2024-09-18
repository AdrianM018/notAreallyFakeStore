import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Search() {
    const navigate = useNavigate()
    const [isSearchBar, setIsSearchBar] = useState(false);

    function DisplaySearchbar() {
        if (!isSearchBar) {
            return (
                <button onClick={() => setIsSearchBar(true)} className='border-0 text-light bg-color-main'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            )
        } else {
            return (
                <div className='fixed-top h-100 text-light glass-colored '>
                    <button className='d-inline text-light bg-secondery-color rounded-circle px-2 mt-4'
                        onClick={() => {
                            setIsSearchBar(false)
                        }}>
                        <h3 className='m-2'>X</h3>
                    </button>
                    <div className='align-content-center h-75'>
                        <p className='fs-2'>Cauta Produsul dorit</p>
                        <input type="search" name="" id="searchinput" placeholder='' className='w-75 border-0 fs-4 p-3 bg-transparent border-bottom border-light-shades' />
                        <button className='bg-transparent light-shades rounded-circle-2' onClick={()=>{
                            const searchvalue = document.getElementById('searchinput').value
                            const Category_string = JSON.stringify(searchvalue);
                            sessionStorage.setItem('SearchforProducts', Category_string)
                            navigate('/SearchPage')
                            location.reload();
                            setIsSearchBar(false)
                        }}>
                            <i className="bi bi-search p-3 fs-1"></i>
                        </button>
                    </div>
                </div>
            )
        }
    }
    return (
        <DisplaySearchbar />
    )
}

export default Search