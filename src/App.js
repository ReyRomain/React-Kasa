import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import './App.css';

export default function App() {
    return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
                <Route path='/accommodation/:id' element={<Accommodation />} />
			</Routes>
		</BrowserRouter>
    );
}