import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}
body{
	background: white;
	-webkit-font-smoothing: antialiased;
	
}
body, input, button{
	font: 10px Roboto, sans-serif;
	color: var(--text);
	outline: none;
	border: none;
}
#root{
	margin: auto;
	--main: #3FC060;
	--secondary: #162328;
	--off: #B8B8B8; 
	--text: #ffffff;
	--bg: #ffffff;
	--light-grey: rgb(232, 232, 232);
}

img,svg,a,button{
	&:hover{
		cursor: pointer;
	}
}

svg {
    width: 25px;
    height: 25px;
		margin: 5px;
  }

	h3, p, a,h2, span, button{
		font-size: 1rem;
		color: var(--secondary);
	}
`;
