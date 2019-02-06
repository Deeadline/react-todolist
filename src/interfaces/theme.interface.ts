export interface Colors {
	primary: string; // for main layout
	secondary: string; // for header, footer and background modals
	third: string; // for buttons, links etc.
	fourth: string; // for hovers
}

export interface Fonts {
	thin: number;
	regular: number;
	semi_bold: number;
	bold: number;
}

export interface Media {
	tablet: string;
	desktop: string;
}

export interface ThemeInterface {
	colors: Colors;
	fonts: Fonts;
	media: Media;
}
