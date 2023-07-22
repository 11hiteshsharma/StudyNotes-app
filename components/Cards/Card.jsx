import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 359.4px;
	margin: 0 auto;
	border-radius: 1rem;
	overflow: hidden;
	/* box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1); */
	background: #ece9e6;
	background: linear-gradient(to bottom, #ffffff, #ece9e6);
	color: black;
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 15px;
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 175px;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 0px 15px;
	padding-bottom: 25px;
	& h4 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	& p {
		font-size: 12px;
		line-height: 1.3rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	& a:hover {
		opacity: 0.7;
	}

	& span {
		color: #008cff;
	}
`;

const Tag = styled.span`
	align-self: flex-start;
	border-radius: 1em;
	font-size: 0.75rem;
	padding: 4px;
`;

const BlueTag = styled(Tag)`
	background: linear-gradient(to bottom, #2f80ed, #56ccf2);
	color: #fafafa !important;
	padding: 5px 10px;
`;

const CardFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
`;

const UserImage = styled.img`
	border-radius: 50%;
`;

const UserInfo = styled.div`
	> small {
		color: #666;
	}
`;

const DateContainer = styled.div`
	font-size: 12px;
	font-weight: 800;
`;

const Card = ({ data }) => {
	return (
		<CardContainer>
			<CardHeader>
				<ImageWrapper>
					<Image
						src={data?.image}
						alt="card__image"
						layout="fill"
						objectFit="cover"
					/>
				</ImageWrapper>
			</CardHeader>

			<CardBody>
				<h4>
					<Link href={`/blogs/${data?.slug}`}> {data?.title}</Link>
				</h4>
				<DateContainer>{data?.publishing_data}</DateContainer>
				<p>
					<Link href={`/blogs/${data?.slug}`}>{data?.description}</Link>
				</p>
				<CardFooter>
					<Link href={`/blogs/${data?.slug}`}>
						<span> Read More</span>
					</Link>
					<BlueTag>{data?.category}</BlueTag>
				</CardFooter>
			</CardBody>
		</CardContainer>
	);
};

export default Card;
