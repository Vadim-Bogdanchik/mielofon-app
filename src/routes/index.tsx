//
// ROUTES
//

import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Импорт маршрутов (старницы)
import ProtectedRoutes from '../routes/protected.routes'
import ForgetPage from '../pages/forget'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register/'
import HomePage from '../pages/home/'

const AllRoutes: React.FC = () => {
	return (
		<Routes>
			<Route element={<ProtectedRoutes />}>
				<Route path='/' element={<HomePage />}></Route>
			</Route>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/forget' element={<ForgetPage />} />
		</Routes>
	)
}

export default AllRoutes
