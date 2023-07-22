import React from "react";
import NotNotesCardsSection from "@/components/Notes/NotesCardsSection";
import Head from "next/head";
import Wrapper from "@/styles/Wrapper";
import styled from "@emotion/styled";
import SearchSection from "@/components/Notes/SearchSection";
import NotesCardsSection from "@/components/Notes/NotesCardsSection";
import { NotesData } from "@/database/Notescard";
const NotesPage = () => {
	const [searchFilter, setSearchFilter] = React.useState(NotesData);

	return (
		<>
			<Head>
				<title>Notio | Blogs</title>
				<meta name="description" content="Created by ❤" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper>
				<Heading>Popular Notes</Heading>
				<SubHeading>
					Find Expertly Crafted Notes to Boost Your Learning
				</SubHeading>
				<SearchContainer>
					<SearchSection
						NotesData={NotesData}
						setSearchFilter={setSearchFilter}
					/>
				</SearchContainer>

				<NotesCardsContainer>
					<NotesCardsSection data={searchFilter} />
				</NotesCardsContainer>
			</Wrapper>
		</>
	);
};

export default NotesPage;

const Heading = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 3em;
	line-height: 130%;
	letter-spacing: 0.02em;
	color: #151411;
	margin-top: 3rem;
	text-align: center;
`;

const SubHeading = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 180%;
	/* or 32px */

	text-align: center;

	/* Paragraph Color */
	margin-top: 20px;
	color: #afadb5;
`;

const SearchContainer = styled.div`
	margin-top: 1rem;
`;

const NotesCardsContainer = styled.div`
	margin-top: 5rem;
`;
