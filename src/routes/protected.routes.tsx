import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
// import { useAuth } from '../hooks'

const ProtectedRoutes: React.FC = () => {
	// Проверяем пользователя в состояниях REDUX. Если success=true пропускаем в защищенные маршруты, иначе на страницу логина кидаем
	// const isAuth = useAuth()

	// return isAuth ? <Outlet /> : <Navigate to='login' replace={true} />
	return <Navigate to='login' replace={true} />
}

export default ProtectedRoutes
