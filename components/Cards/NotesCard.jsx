import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";
import Box from "@mui/material/Box";
import { Grid, GridItem } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import Fade from "@mui/material/Fade";
import { GiNotebook } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
const NotesCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          height: "380px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "1rem",
          overflow: "hidden",
          background: "linear-gradient(to bottom, #ffffff, #ece9e6)",
          boxShadow: "none",
        }}
      >
        <div>
          <ImageWrapper>
            <Image
              src={data?.image}
              alt="card__image"
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data?.branch}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FaUserGraduate fontSize={16} color="#1390d8" />
            {data?.year}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "black",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <GiNotebook fontSize={16} color="#1390d8" />
            {data?.subject}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", marginBottom: "1rem" }}>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: "#009df9;",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.4rem 0.8rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#5bb8ee;",
              },
            }}
          >
            View More
          </Button>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              height: "70%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <CloseButton onClick={handleClose}>
              <AiOutlineCloseCircle fontSize={26} color="grey" />
            </CloseButton>
            <ModalHeading>
              <Typography
                variant="h6"
                id="modal-title"
                gutterBottom
                justifyContent="center"
              >
                {data?.subject}
              </Typography>
            </ModalHeading>
            <ModalContent>
              <Typography
                variant="body1"
                id="modal-description"
                gutterBottom
                fontSize={22}
                fontWeight={600}
              >
                You Will Be Able To Learn
              </Typography>
              <ul>
                {data?.contents.map((content, index) => (
                  <CourseContent key={index}>{content}</CourseContent>
                ))}
              </ul>
            </ModalContent>
            <PDFDownloadButton>
              <Button
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#009df9;",
                  color: "white",
                  borderRadius: "0.5rem",
                  padding: "0.4rem 0.8rem",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#5bb8ee;",
                  },
                }}
              >
                <Link
                  href="https://example-files.online-convert.com/document/pdf/example.pdf"
                  target="_blank"
                >
                  View PDF
                </Link>
              </Button>
            </PDFDownloadButton>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NotesCard;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 175px;
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5%;
  right: 3%;
`;

const ModalHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  padding: 10px 50px;
  & ul {
    text-decoration: none;
  }
`;

const CourseContent = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;

const PDFDownloadButton = styled.div`
  display: flex;
  justify-content: center;
`;
