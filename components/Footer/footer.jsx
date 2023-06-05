import React from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <ScrollableGrid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* Social media icons */}
          <Grid item>
            <SocialLink href="#" style={{ backgroundColor: "#3b5998" }}>
              <FaFacebookF />
            </SocialLink>
          </Grid>
          <Grid item>
            <SocialLink href="#" style={{ backgroundColor: "#ac2bac" }}>
              <FaInstagram />
            </SocialLink>
          </Grid>
          <Grid item>
            <SocialLink href="#" style={{ backgroundColor: "#0082ca" }}>
              <FaLinkedinIn />
            </SocialLink>
          </Grid>
        </ScrollableGrid>
      </Container>
      {/* Copyright */}
      <FooterTextContainer>
        <Container maxWidth="lg">
          <FooterText>© {currentYear} MDBootstrap.com</FooterText>
        </Container>
      </FooterTextContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled("footer")`
  text-align: center;
  background-color: #f1f1f1;
  overflow-x: hidden !important;
`;

const ScrollableGrid = styled(Grid)`
  flex-wrap: nowrap;
`;

const SocialLink = styled("a")`
  & {
    margin: 4px;
    font-size: 24px;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const FooterTextContainer = styled("div")`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 12px;
`;

const FooterText = styled("p")`
  color: #fff;
  margin: 0;
`;
