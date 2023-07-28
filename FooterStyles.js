import styled from 'styled-components';

export const Box = styled.div`
width: 1400px;
    padding-top: 50px;
    background: rgba(236, 218, 218, 0.32);
    box-shadow: 0 8px 32px 0 rgba(245, 13, 91, 0.37);
    backdrop-filter: blur(15px);
    border-radius: 30px;
    border: 10px solid rgba(255, 255, 255, 0.18);


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;z
`;


export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`

export const FooterLink = styled.a`
color: white;
margin-bottom: 8px;
font-size: 18px;
text-decoration:;

&:hover {
	color: black;
	transition: 100ms ease-in;
}
`;
   
export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;