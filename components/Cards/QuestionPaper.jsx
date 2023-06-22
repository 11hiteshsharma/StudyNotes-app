import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";

const QuestionPaper = ({ paper }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        key={paper?.id}
        sx={{
          maxWidth: 300,
          height: 200,
          marginBottom: 2,
          backgroundImage: "linear-gradient(to right, #e6e6e6, #f5f5f5)",
          borderRadius: "20px",
          border: "0px",
        }}
      >
        <CardContent sx={{ height: 200 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
          >
            {paper?.Branch}
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
            }}
          >
            <GiNotebook fontSize={16} color="#1390d8" />
            {paper?.Subject}
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
            {paper?.Year}
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            fullWidth
            sx={{
              marginTop: "1rem",
              backgroundColor: "#009df9",
              color: "white",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#5bb8ee",
              },
            }}
          >
            View
          </Button>
        </CardContent>

        <Modal open={open} onClose={handleClose}>
          <Card
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
            }}
          >
            <CardContent>
              <CloseButton onClick={handleClose}>
                <AiOutlineCloseCircle fontSize={26} color="grey" />
              </CloseButton>

              <Typography variant="h6" component="div" align="center">
                Question Paper
              </Typography>
            </CardContent>
          </Card>
        </Modal>
      </Card>
    </>
  );
};

export default QuestionPaper;
const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10%;
  right: 3%;
`;
