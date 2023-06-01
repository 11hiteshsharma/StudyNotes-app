import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto; /* Center the card horizontally */
  border-radius: 1rem; /* Add border radius */
  overflow: hidden; /* Clip the content within the rounded corners */
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1); /* Add a box shadow for depth */
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
  color: black;
  /* Set the desired height */
  height: max-content; /* Adjust the height value as needed */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 175px;
  display: block;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0px 15px;
  padding-bottom: 25px;

  & p {
    font-size: 12px;
    line-height: 1.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    /* fallback for Firefox */
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

const BrownTag = styled(Tag)`
  background: #d1913c;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
  color: #fafafa;
`;

const RedTag = styled(Tag)`
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserImage = styled.img`
  border-radius: 50%;
`;

const UserInfo = styled.div`
  > small {
    color: #666;
  }
`;

const Card = () => {
  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <Image
            src="https://source.unsplash.com/600x400/?space"
            alt="card__image"
          />
        </CardHeader>

        <CardBody>
          <h4>
            <Link href="/"> What's new in 2022 Tech</Link>
          </h4>
          <p>
            <Link href="/">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </Link>
          </p>
          <CardFooter>
            <Link href="/">
              <span> Read More</span>
            </Link>
            <BlueTag>Technology</BlueTag>
          </CardFooter>
        </CardBody>
      </CardContainer>
    </Container>
  );
};

export default Card;
