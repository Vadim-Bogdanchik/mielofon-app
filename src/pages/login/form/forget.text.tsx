import React from 'react'
import { TextStyled } from './styles'
import { useNavigate } from 'react-router-dom'

const ForgetText: React.FC = () => {
	const navigate = useNavigate()

	return (
		<TextStyled
			onClick={() => {
				navigate('/forget')
			}}
		>
			Забыли пароль ?
		</TextStyled>
	)
}

export default ForgetText
