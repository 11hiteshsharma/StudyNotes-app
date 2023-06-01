import styled from "@emotion/styled";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSearchAlt } from "react-icons/bi";
import { Button } from "@mui/material";

const HomePageBanner = () => {
	return (
		<>
			<Container>
				<BannerSection>
					<BannerHeader>
						<BannerTitle>
							<p>
								Your Study Companion: Notes, Insights, and Beyond <sup>✨</sup>{" "}
							</p>
						</BannerTitle>
						<BannerDescription>
							<p>
								Experience a study and notes platform that goes beyond
								traditional learning. Seamlessly blending convenience and
								quality, our website provides a rich tapestry of study
								materials, insightful notes, and inspiring blog content. Immerse
								yourself in a dynamic learning ecosystem designed to empower and
								motivate you
							</p>
						</BannerDescription>
					</BannerHeader>
				</BannerSection>

				<BannerImageContainer>
					<BannerImage src="/banner.webp" alt="Home Banner" fill />

					<SearchBar>
						<BiSearchAlt size={25} className="search CursorPointer" />
						<input type="text" placeholder="Search" />
						<Button variant="contained" color="primary">
							Search
						</Button>
					</SearchBar>
				</BannerImageContainer>
			</Container>
		</>
	);
};

export default HomePageBanner;

const Container = styled.header`
	margin-block: 10vh;
`;

const BannerSection = styled.div`
	margin-inline: auto;
	width: 60vw;
	text-align: center;

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

const BannerHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BannerTitle = styled.div`
	font-size: 3rem;
	font-weight: 600;
	margin-block: 2rem;
`;

const BannerDescription = styled.div`
	line-height: 1.8;
	font-size: 1rem;
	color: #716b6b;
	margin-bottom: 5rem;
`;

const BannerImageContainer = styled.div`
	width: 80vw;
	margin-inline: auto;
	position: relative !important;
	height: 450px;
`;

const BannerImage = styled(Image)`
	object-fit: cover;
`;

const SearchBar = styled.div`
	position: absolute;
	top: -1%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	width: 60%;
	height: 50px;
	gap: 0.5rem;
	padding-inline: 0.5rem;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: 2px 2px 13px 2px #afafaf;
	& > input {
		display: flex;
		border: none;
		outline: none;
		flex-grow: 1;
		font-size: 1rem;
		height: 100%;
		background: transparent;
		color: #070707;
		::placeholder {
			color: #838383;
			font-size: 1rem;
		}
	}
	& > .search {
		background: transparent;
		color: #838383;
	}
	& > .CursorPointer {
		cursor: pointer;
	}
`;

// const CarouselContainer = styled.div`
// 	width: 100vw;
// 	height: 70vh;
// 	position: relative;
// `;

// const CarouselImage = styled(Image)`
// 	width: 100vw !important;
// 	height: 100% !important;
// 	object-fit: cover;
// 	opacity: 0.4;
// `;

// const SearchBar = styled.div`
// 	position: absolute;
// 	top: 40%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	display: flex;
// 	align-items: center;
// 	width: 50%;
// 	height: 50px;
// 	gap: 0.5rem;
// 	padding: 0.5rem;
// 	background: #f0f3f4;
// 	border-radius: 8px;
// 	& > input {
// 		display: flex;
// 		border: none;
// 		outline: none;
// 		flex-grow: 1;
// 		height: 100%;
// 		background: transparent;
// 		color: #070707;
// 		::placeholder {
// 			color: #070707;
// 		}
// 	}
// 	& > .search {
// 		background: transparent;
// 		color: #070707;
// 	}
// 	& > .CursorPointer {
// 		cursor: pointer;
// 	}
// `;
