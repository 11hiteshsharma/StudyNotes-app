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
  max-width: 300px; /* Adjust the maximum width as desired */
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
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  display: block;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0px 15px;

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
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  & a {
    color: #008cff;
    font-size: 0.9rem;
    text-decoration: underline;
  }
`;

const Tag = styled.span`
  align-self: flex-start;
  border-radius: 1em;
  font-size: 0.75rem;
  padding: 4px;
  margin-top: 10px;
`;

const BlueTag = styled(Tag)`
  background: #56ccf2;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  color: #fafafa;
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
  margin: 15% 0 5% 4%;
`;

const User = styled.div`
  display: flex;
  gap: 0.5rem;
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
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
          />
        </CardHeader>

        <CardBody>
          <BlueTag>Technology</BlueTag>
          <h4>What's new in 2022 Tech</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
          <Link href="/">Read More</Link>
        </CardBody>

        <CardFooter>
          <User>
            <UserImage src="https://i.pravatar.cc/40?img=1" alt="user__image" />
            <UserInfo>
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </UserInfo>
          </User>
        </CardFooter>
      </CardContainer>
    </Container>
  );
};

export default Card;
