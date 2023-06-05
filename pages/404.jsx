import { styled } from "@mui/system";
import { keyframes } from "@mui/styled-engine";
import Link from "next/link";

const Container = styled("main")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;
  color: black;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

const apparitionAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Content = styled("article")`
  position: relative;
  width: 600px;
  max-width: 100%;
  margin: 20px;
  background: white;
  padding: 60px 40px;
  text-align: center;
  box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${apparitionAnimation} 0.8s 1.2s
    cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards;

  p {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.6rem;
    letter-spacing: 0.1rem;
    color: #595959;

    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 3px solid #595959;
    background: transparent;
    font-size: 1rem;
    color: #595959;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const Particle = styled("span")`
  position: absolute;
  display: block;
  pointer-events: none;

  /* Rest of the particle styles */
`;

const NotFoundPage = () => {
  const particles = Array(40).fill(4).concat(Array(40).fill(0));

  return (
    <Container className="container">
      {particles.map((particle, index) => (
        <Particle key={index} className="particle">
          {particle}
        </Particle>
      ))}
      <Content className="content">
        <p>Damnit stranger,</p>
        <p>
          You got lost in the <strong>404</strong> galaxy.
        </p>
        <p>
          <button>
            <Link href="/"> Go back to earth.</Link>
          </button>
        </p>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
