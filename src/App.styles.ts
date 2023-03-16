import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/apex-bg.jpg'

export const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		background-image: url(${BGImage});
		background-size: cover;
		margin: 0;
		padding: 0 20px;
		display: flex;
		justfiy-content: center;
	}

	* {
		box-sizing: border-box;
		font-family: 'Catamaran', sens-serif;
	}
`