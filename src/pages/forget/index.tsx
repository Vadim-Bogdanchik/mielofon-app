import React from 'react'
import ForgetForm from './form'

import { Link } from 'react-router-dom'

import Logo from '../../Assets/mlogo2.png'

import {
	Container,
	LeftPart,
	LeftContentBlock,
	LeftContentTitle,
	LeftContentSubTitle,
	RightPart,
	RightContentTitle,
	RightContentSubTitle,

} from './styles'

const ForgetPage: React.FC = () => {
	return (
		<Container>
			<LeftPart>
				<LeftContentBlock>
					<LeftContentTitle>
						▶ Онлайн платформа для создания текстового контента с помощью{' '}
						<span style={{ color: '#191b54' }}>нейронных сетей</span>
					</LeftContentTitle>
					<LeftContentSubTitle>
						Создавайте текстовый контент в 10 раз быстрее
					</LeftContentSubTitle>
				</LeftContentBlock>
			</LeftPart>
			<RightPart>
				<Link to='https://mielofon.online/'>
					<img src={Logo} width={70} style={{ marginBottom: '50px', cursor:'pointer' }} />
				</Link>
				<RightContentTitle>Забыли пароль ? 🤔</RightContentTitle>
				<RightContentSubTitle>
					Укажите email, мы вышлем ссылку для восстановления пароля
				</RightContentSubTitle>
				<ForgetForm />
			</RightPart>
		</Container>
	)
}

export default ForgetPage
