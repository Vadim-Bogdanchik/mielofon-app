import { ThemeOptions } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		sidebar: Palette['primary']
	}
	interface Palette {
		topbar: Palette['primary']
	}
	interface Palette {
		menu: Palette['primary']
	}
	interface Palette {
		footer: Palette['primary']
	}
	interface Palette {
		mainarea: Palette['primary']
	}
	interface Palette {
		buttons: Palette['primary']
	}
	interface Palette {
		headings: Palette['primary']
	}
	interface Palette {
		tableCollapseCells: Palette['primary']
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		sidebar?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		topbar?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		menu?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		footer?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		mainarea?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		buttons?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		headings?: PaletteOptions['primary']
	}
	interface PaletteOptions {
		tableCollapseCells?: PaletteOptions['primary']
	}
}

const darkTheme: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#4b67f5',
			light: '#15181f',
			dark: '#095C18',
		},
		secondary: {
			main: '#FFFFFF',
			light: '#30343d',
			dark: '#fff',
		},
		background: {
			default: '#1E2027',
		},
		sidebar: {
			// цвет панели
			main: '#000',
			// цвет текст
			light: '#fff',
			// цвет ховера
			dark: '#30343d',
		},
		topbar: {
			main: '#0e0d12',
		},
		footer: {
			//фон
			main: '#000',
			//текст
			light: '#fff',
			// bg
			dark: '#30343d',
		},
		menu: {
			// цвет активного пункта меню
			main: '#15181f',
			// Цветтекста активного меню
			light: '#fff',
		},
		mainarea: {
			main: '#FFFFFF',
			light: '#242731',
			dark: '#000',
		},
		buttons: {
			main: '#303B6D',
			dark: '#4b67f5',
		},
		headings: {
			main: '#000',
		},
		tableCollapseCells: {
			main: '#1E2027',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		fontSize: 12,
		h1: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 40,
			fontWeight: 700,
		},
		h2: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			fontSize: 32,
		},
		h3: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			fontSize: 24,
		},
		h4: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			fontSize: 20,
		},
		h5: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			fontSize: 16,
		},
		h6: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			fontSize: 14,
		},
	},
}

export default darkTheme
