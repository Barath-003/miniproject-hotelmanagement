import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import "./Footer.css";

const Footer = () => {
return (
	<div className="fo">
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<div className="vertical"></div>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<div className="vertical"></div>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Bangalore</FooterLink>
			<FooterLink href="#">Coimbatore</FooterLink>
			<FooterLink href="#">Delhi</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<div className="vertical"></div>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		<div className="vertical"></div>
		<h3>Follow Us On:</h3>
		<div className='insta'></div>

		<div className='tw'></div>
		<div className='fb'></div>
		</Row>
		<center>
		<p className="footer-text">© 2023 Your Hotel. All rights reserved.</p>
		</center>
	</Container>
	</Box>
	</div>
);
};
export default Footer;