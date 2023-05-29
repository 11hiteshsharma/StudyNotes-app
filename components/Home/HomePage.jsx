import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";
import banner4 from "../../public/banner4.jpg";
import banner5 from "../../public/banner5.jpg";
import { BiSearchAlt } from "react-icons/bi";

const BannerImages = [
	{
		id: 1,
		src: banner1,
		alt: "Banner 1",
	},
	{
		id: 2,
		src: banner2,
		alt: "Banner 2",
	},
	{
		id: 3,
		src: banner3,
		alt: "Banner 3",
	},
	{
		id: 4,
		src: banner4,
		alt: "Banner 4",
	},
	{
		id: 5,
		src: banner5,
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
