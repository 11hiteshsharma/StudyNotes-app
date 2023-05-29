import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSearchAlt } from "react-icons/bi";

const BannerImages = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
		alt: "Banner 1",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1766&q=80",
		alt: "Banner 2",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80",
		alt: "Banner 3",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
		alt: "Banner 4",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
		alt: "Banner 5",
	},
];
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

function HomePage() {
	return (
		<Container>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={false}
				arrows={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				{BannerImages.map((image) => (
					<CarouselContainer key={image.id}>
						<CarouselImage src={image.src} alt={image.alt} fill />
					</CarouselContainer>
				))}
			</Carousel>
			<SearchBar>
				<BiSearchAlt size={22} className="search CursorPointer" />
				<input type="text" placeholder="Search" />
			</SearchBar>
		</Container>
	);
}

export default HomePage;

const Container = styled.div`
	/* width: 100vw;
	height: 500px; */
	margin-bottom: 3rem;
`;
const CarouselContainer = styled.div`
	width: 100vw;
	height: 500px;
	position: relative;
`;

const CarouselImage = styled(Image)`
	width: 100vw !important;
	height: 100% !important;
	object-fit: cover;
	opacity: 0.4;
`;

const SearchBar = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	width: 50%;
	height: 50px;
	gap: 0.5rem;
	padding: 0.5rem;
	background: #f0f3f4;
	border-radius: 8px;
	& > input {
		display: flex;
		border: none;
		outline: none;
		flex-grow: 1;
		background: transparent;
		color: #070707;
		::placeholder {
			color: #070707;
		}
	}
	& > .search {
		background: transparent;
		color: #070707;
	}
	& > .CursorPointer {
		cursor: pointer;
	}
`;
