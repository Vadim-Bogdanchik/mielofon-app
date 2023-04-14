import AllRoutes from './routes'
import { useAppSelector } from './hooks'
import light from './theme/light'
import dark from './theme/dark'

//* MUI
import { createTheme } from '@mui/material'
import { CssBaseline, ThemeProvider } from '@mui/material'

//* Styles
import { Global } from '@emotion/react'
import { GlobalStyles } from './global.styles'

function App() {
	const themeMode = useAppSelector(state => state.app.theme)

	const theme = createTheme(themeMode === 'light' ? light : dark)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Global styles={GlobalStyles} />
			<AllRoutes />
		</ThemeProvider>
	)
}

export default App
