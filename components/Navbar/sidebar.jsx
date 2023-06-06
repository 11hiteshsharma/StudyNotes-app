import styled from "@emotion/styled";
import Link from "next/link";

const SidebarWrapper = styled.div`
	width: 250px;
	background-color: white;
	transition: transform 0.3s ease-in-out;
	position: fixed;
	top: 0;
	right: -250px;
	height: 100vh;
	z-index: 999999;

	&.open {
		transform: translateX(-250px);
	}
`;

const Navigation = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 2rem;
	font-size: 1.2rem;
	font-weight: 500;
	padding: 20px;
	margin-top: 2rem;

	& > a:nth-last-of-type(2) {
		background-color: #009df9;
		border-radius: 5px;
		color: #fff;
		padding: 12px;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: transparent;
			color: #009df9;
			border: 1px solid #009df9;
		}
	}

	& > a:last-child {
		color: #009df9;
		border: 1px solid #009df9;
		border-radius: 5px;
		padding: 12px;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: #009df9;
			color: #fff;
		}
	}
`;

const SidebarBlur = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	z-index: 998;

	&.hidden {
		display: none;
	}
`;

const Sidebar = ({ isOpen, setIsOpen }) => {
	const handleClose = async () => {
		await setIsOpen(false);
		await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate page load delay
	};

	return (
		<div>
			<SidebarWrapper className={isOpen ? "open" : ""}>
				<Navigation>
					{NavLink.map((link) => (
						<Link
							href={link.href}
							key={link.title}
							onClick={() => handleClose()}>
							{link.title}
						</Link>
					))}
				</Navigation>
			</SidebarWrapper>

			<SidebarBlur
				className={isOpen ? "" : "hidden"}
				onClick={() => handleClose()}
			/>
		</div>
	);
};

export default Sidebar;

const NavLink = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Blogs",
		href: "/blogs",
	},
	{
		title: "Notes",
		href: "/notes",
	},
	{
		title: "Quiz's",
		href: "/quiz",
	},
];
