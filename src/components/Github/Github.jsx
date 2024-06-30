/*import React from 'react'
//import './App.css'
import { useState,useEffect } from 'react'
const data = document.getElementsByClassName('username');
const name = data.value

function Github() {
    const [data,setdata] = useState(0);
    useEffect(()=>{
        fetch('https://api.github.com/users/ashutosh281')
        .then(response => response.json())
        .then(data => {
            setdata(data)
        })
    },[])
  return (
    <>
    {data && (
        <>
        <input type="text" className='username'/>
            <h2 className='foll'>Followers: {data.followers}</h2>
            <div className='card'>
                <div className='img-card'>
                    <img src={data.avatar_url} alt="User Avatar" />
                    <p id='name'>{data.name}</p>
                </div>
            </div>
        </>
    )}
</>
  )
}

export default Github
*/
import React, { useState, useEffect } from 'react';

function Github() {
    // State for storing the GitHub user data
    const [data, setData] = useState();
    // State for storing the input username
    const [username, setUsername] = useState('');
    // State for storing the actual username to fetch
    const [fetchUsername, setFetchUsername] = useState('');

    // Effect to fetch data whenever fetchUsername changes
    useEffect(() => {
        //if (fetchUsername) {
            fetch(`https://api.github.com/users/${fetchUsername}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
                .catch(error => {
                    console.error('Error fetching the GitHub data:', error);
                });
        //}
    }, [fetchUsername]);

    // Handle input change
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    // Handle form submission
    const handleSearchClick = () => {
        setFetchUsername(username);
    };

    return (
        <>
            <input
                type="text"
                className='username'
                value={username}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
            />
            <button id='submit' onClick={handleSearchClick}>Search</button>
            {data && (
                <>
                    <h2 className='foll'>Followers: {data.followers}</h2>
                    <div className='card'>
                        <div className='img-card'>
                            <img src={data.avatar_url} alt="User Avatar" />
                            <p id='name'>{data.name}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Github;
