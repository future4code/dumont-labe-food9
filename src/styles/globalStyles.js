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
	--seconday: #162328;
	--off: #8E8F8E; 
	--text: #ffffff;
	--bg: #ffffff;
}

img,svg,a,button{
	&:hover{
		cursor: pointer;
	}
}
`;
