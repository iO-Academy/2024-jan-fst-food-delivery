import { useState, useEffect } from 'react'

const fetchDataR = () => {
    useEffect(() => {
        fetchRestaurants()
    }, []);

    const fetchRestaurants = () => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants').then(response => {
            const data = response.json();
            return data;
        }).then((data) => {
            console.log(data);
        })
    }

}

export default fetchDataR