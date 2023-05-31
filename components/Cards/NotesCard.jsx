import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";
import Box from "@mui/material/Box";

const NotesCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CardWrapper>
      <ContentWrapper>
        <Heading>COMPUTER SCIENCE 1st YEAR</Heading>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          laboriosam at voluptas minus culpa deserunt delectus sapiente
          inventore pariatur Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempora, quod?
        </Para>
        <Button onClick={handleOpen}>Read more</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <iframe
              title="PDF Viewer"
              src="https://www.africau.edu/images/default/sample.pdf"
              width="100%"
              height="92%"
            ></iframe>

            <ModalButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <MdClose />
            </ModalButton>
          </Box>
        </Modal>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default NotesCard;

const CardWrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(-10deg, #ffffff 0%, #003053 100%);
    z-index: -1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover:before {
    height: 100%;
  }

  &:hover {
    box-shadow: none;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #fffcfc;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`;

const Heading = styled("p")`
  font-weight: 700;
  font-size: 1.4rem;
`;

const Para = styled("p")`
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  /* fallback for Firefox */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Button = styled("button")`
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    outline: 2px solid #e8e8e8;
    background: transparent;
    color: #e8e8e8;
  }

  &:active {
    box-shadow: none;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "black",
  p: 4,
};

const ModalButton = styled("button")`
  cursor: pointer;
`;
