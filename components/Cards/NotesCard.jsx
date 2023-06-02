import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { MdClose } from "react-icons/md";
import Box from "@mui/material/Box";
import { Grid,GridItem } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActionArea, CardActions } from '@mui/material';
import styled from "@emotion/styled";


const NotesCard = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
      <Card sx={{ maxWidth: 300, maxHeight:"360px", display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
      <CardActionArea sx={{minHeight:"300"}}>
        <ImageWrapper>
          <Image
            src={data?.image}
            alt="card__image"
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.branch}
          </Typography>
          <Typography variant="h6" gutterBottom>
        {data?.year}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {data?.subject}
      </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotesCard;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 175px;
`;