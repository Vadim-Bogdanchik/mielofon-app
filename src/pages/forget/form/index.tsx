import React from 'react'

// REACT HOOK FORM
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import FieldEmail from './field.email'
import Button from './form.button'

import { IFormInputs } from './types'
import {
	FormContainer,
	ErrorText,
} from './styles'

const schema = yup
	.object({
		login: yup.string().email().required(),
	})
	.required()

const ForgetForm: React.FC = () => {
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
					<FieldEmail />

					<Button />

					{/* Errors format fields */}
					{methods.formState.errors &&
						methods.formState.errors.email?.message && (
							<ErrorText>{methods.formState.errors.email?.message}</ErrorText>
						)}
				</form>

			
				
			</FormContainer>
		</FormProvider>
	)
}

export default ForgetForm
