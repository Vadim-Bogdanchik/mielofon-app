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

const lightTheme: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#4D69FA',
			light: '#FFFFFF',
			dark: '#445cd9',
		},
		secondary: {
			main: '#414141',
			// light: '#d0e9d5',
			light: '#d6ddfe',
			dark: '#000',
		},
		background: {
			default: '#F5F5F5',
		},
		sidebar: {
			// цвет панели
			main: '#fff',
			// цвет текста
			light: '#000',
			// цвет ховера
			dark: '#d6ddfe',
		},
		topbar: {
			main: '#fff',
		},
		footer: {
			//фон
			main: '#fff',
			//текст
			light: '#808080',
			// bg
			dark: '#f5f5f5',
		},
		menu: {
			// цвет активного пункта меню
			main: '#A8B4E8',
			// Цветтекста активного меню
			light: '#fff',
		},
		mainarea: {
			main: '#414141',
			light: '#fff',
			dark: '#000',
		},
		buttons: {
			main: '#d6ddfe',
			dark: '#4D69FA',
		},
		headings: {
			main: '#d6ddfe',
		},
		tableCollapseCells: {
			main: '#F5F5F5',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		fontSize: 12,
		h1: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 35,
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

export default lightTheme
