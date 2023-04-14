//
// Field DOMAIN for Login Form
//

import React from 'react'

// REACT HOOK FORM
import { useFormContext, Controller } from 'react-hook-form'

// MUI
import { TextField } from '@mui/material'

const FieldLogin: React.FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<>
			<Controller
				control={control}
				name='login'
				defaultValue='bogdanchik@sberbank.ru'
				// rules={loginValidation}
				render={({ field }) => (
					<TextField
						{...field}
						label='Логин'
						size='small'
						margin='normal'
						fullWidth={true}
						onChange={e => field.onChange(e)}
						value={field.value || ''}
						type='text'
						error={!!errors.login?.message}
						helperText={errors.login ? !errors.login?.message : ''}
						autoComplete='off'
					/>
				)}
			/>

		</>
	)
}

export default FieldLogin
