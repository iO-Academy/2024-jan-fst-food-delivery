import { useState, useEffect } from 'react'
import './App.css'
import fetchDataR from './Restaurants.jsx'

const App = () => {
    return (
        fetchDataR()
    )
}

export default App
