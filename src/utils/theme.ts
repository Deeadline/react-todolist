import * as styledComponents from "styled-components";

import { ThemeInterface } from "@interfaces/theme.interface";

import { colors } from "@utils/colors";
import { fonts } from "@utils/fonts";
import { media } from "@utils/media";

export const Theme = ({
	colors,
	fonts,
	media,
} as unknown) as ThemeInterface;

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
	ThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
