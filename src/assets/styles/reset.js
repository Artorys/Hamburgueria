import {createGlobalStyle} from "styled-components"

const Reset = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,button,input {
    box-sizing: border-box;
    background: none;
    outline: none;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	width: 100vw;
	height: 100vh;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#root
{
	overflow-x: hidden;
	overflow-y: auto;
    font-family: 'Inter', sans-serif;
	width: 100%;
	height: 100%;
}
.remove:hover
{
	cursor: pointer;
	text-decoration: underline;
}
input::placeholder
{
	color : var(--gray-50);
	opacity: 0.3;
}
.header__container_search:focus
{
	border-color: var(--gray-100);
}
button:hover
{
	cursor: pointer;
}
`
export default Reset