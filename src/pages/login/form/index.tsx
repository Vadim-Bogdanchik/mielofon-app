import React from 'react'

// REACT HOOK FORM
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import FieldLogin from './field.login'
import FieldPwd from './field.pwd'
import ForgetText from './forget.text'
import Button from './form.button'

import { IFormInputs } from './types'
import {
	FormContainer,
	ErrorText,
	OrLine,
	OrText,
	RegButtonStyled,
} from './styles'

const schema = yup
	.object({
		login: yup.string().email().required(),
		pwd: yup.string().min(4).max(20).required(),
	})
	.required()

const LoginForm: React.FC = () => {
	const navigate = useNavigate()

	const methods = useForm<IFormInputs>({
		// resolver: yupResolver(schema),
	})

	const formSubmitHandler: SubmitHandler<IFormInputs> = data =>
		console.log(data)

	return (
		<FormProvider {...methods}>
			<FormContainer>
				<form onSubmit={methods.handleSubmit(formSubmitHandler)}>
					<FieldLogin />

					<FieldPwd />

					<ForgetText />
					<Button />

					{/* Errors format fields */}
					{methods.formState.errors &&
						methods.formState.errors.login?.message && (
							<ErrorText>{methods.formState.errors.login?.message}</ErrorText>
						)}
					{methods.formState.errors &&
						methods.formState.errors.pwd?.message && (
							<ErrorText>{methods.formState.errors.pwd?.message}</ErrorText>
						)}
				</form>

				<OrLine>
					<OrText>или</OrText>
				</OrLine>
				<RegButtonStyled
					onClick={() => {
						navigate('/register')
					}}
				>
					Зарегистрироваться
				</RegButtonStyled>
			</FormContainer>
		</FormProvider>
	)
}

export default LoginForm
