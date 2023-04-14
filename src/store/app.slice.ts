import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
	theme: string
}

const initialState: AppState = {
	theme: 'light',
}

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload
		},
	},
})

export const { setTheme } = appSlice.actions

export default appSlice.reducer
