//
// Field DOMAIN for Login Form
//

import React from 'react'

// REACT HOOK FORM
import { useFormContext, Controller } from 'react-hook-form'

// MUI
import { TextField } from '@mui/material'

const FieldPwd: React.FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<>
			<Controller
				control={control}
				name='pwd'
				defaultValue=''
				// rules={loginValidation}
				render={({ field }) => (
					<TextField
						{...field}
						label='Пароль'
						size='small'
						margin='normal'
						fullWidth={true}
						onChange={e => field.onChange(e)}
						value={field.value || ''}
						type='text'
						error={!!errors.pwd?.message}
						// helperText={errors.pwd?.message}
						autoComplete='off'
					/>
				)}
			/>
		</>
	)
}

export default FieldPwd
