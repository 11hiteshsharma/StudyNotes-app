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
					<SearchBar>
						<BiSearchAlt size={25} className="search" />
						<input type="text" placeholder="Search" />
						<Button variant="contained" color="primary">
							Search
						</Button>
					</SearchBar>
					<BannerImage src="/banner.webp" alt="Home Banner" fill />
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

	@media (max-width: 960px) {
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
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		margin-top: 0 !important;
	}
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

	@media (max-width: 768px) {
		width: 90vw;
		height: 300px;
	}
`;

const BannerImage = styled(Image)`
	object-fit: cover;
	@media (max-width: 768px) {
		margin-top: 2rem;
	}
`;

const SearchBar = styled.div`
	position: absolute;
	top: -1%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	width: 50vw;
	height: 50px;
	gap: 0.5rem;
	padding-inline: 0.5rem;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: 2px 2px 13px 2px #afafaf;
	z-index: 12;
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

	@media (max-width: 768px) {
		top: -9%;
		width: 60vw;
	}
`;
