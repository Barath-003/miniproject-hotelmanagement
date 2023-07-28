// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Style.css";

// function Navigation() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
// 			<h3>LOGO</h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Flights</a>
// 				<a href="/#">Hotels</a>
// 				<a href="/#">Offers</a>
// 				<a href="/#">Apartments</a>
// 				<a href="/#">Activities</a>
// 				<a href="/#">Contacts</a>
// 				<button
// 					className="nav1"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav2"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default Navigation;