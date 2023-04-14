//
// Field DOMAIN for Login Form
//

import React from 'react'

// REACT HOOK FORM
import { useFormContext, Controller } from 'react-hook-form'

// MUI
import { TextField } from '@mui/material'

const FieldEmail: React.FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<>
			<Controller
				control={control}
				name='email'
				defaultValue=''
				// rules={loginValidation}
				render={({ field }) => (
					<TextField
						{...field}
						label='Email'
						size='small'
						margin='normal'
						fullWidth={true}
						onChange={e => field.onChange(e)}
						value={field.value || ''}
						type='text'
						error={!!errors.email?.message}
						helperText={errors.email ? !errors.email?.message : ''}
						autoComplete='off'
					/>
				)}
			/>

		</>
	)
}

export default FieldEmail
