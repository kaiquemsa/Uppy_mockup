/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { IconButton } from '@mui/material';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import { CarouselStyle } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { colors } from '../../global/colors';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from '@material-ui/core';


type ImageCarouselProps = {
  image: any;
};

interface ItemProps {
  img: string;
  alt: string;
}


const CarouselAmpliation: React.FC<ImageCarouselProps> = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = Array(5).fill(image);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function Item({ img, alt }: ItemProps) {
    return (
      <Paper>
        <img src={img} alt={alt} style={{width:569, height:569, borderRadius: 16}}/>
        <IconButton onClick={openModal} style={{ position: "absolute", bottom: 10, right: 10, color: `${colors.uppyRose}`, zIndex: 5 }}>
              <CropFreeIcon />
        </IconButton>
      </Paper>
    );
  }

  return (
    <div>
      <CarouselStyle 
      autoPlay={false}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          opacity:1,
        },
      }}
      NextIcon={<ArrowForwardIosIcon style={{color:`${colors.uppyRose}`}}/>}
      PrevIcon={<ArrowBackIosIcon style={{color:`${colors.uppyRose}`}}/>}
      >
      {images.map((image, i) => (
        <Item key={i} img={image} alt={`Product ${i}`} />
      ))}
      </CarouselStyle>

      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: '872px',
            height: '720px',
            maxWidth: '900px',
            alignItems: 'center',
            borderRadius: '24px',
          },
        }}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.74)' } }}
      >
        <DialogContent>
          <IconButton onClick={closeModal} style={{position:"absolute", bottom:32, right:64, color:`${colors.uppyRose}`}}>
            <ZoomInMapIcon />
          </IconButton>
          <div style={{display:"flex", gap:24}}>
            <div style={{display: 'flex', flexDirection: 'column', gap:16}}>
              {images.map((image:any, index:any) => (
                <img 
                key={index}
                src={image}
                alt={`Product ${index}`}
                onClick={() => setSelectedIndex(index)}
                style={{
                  width: index === selectedIndex ? 128 : 96, 
                  height: index === selectedIndex ? 128 : 96,  
                  borderRadius: 16,
                  border: index === selectedIndex ? `2px solid ${colors.uppyRose}`: '',
                  cursor: 'pointer',
                  transition:'all .3s ease-in-out'
                }}
                />
                ))}
            </div>
            <img src={images[selectedIndex]} alt={`Product ${selectedIndex}`} style={{width:608, height:608, borderRadius:20, transition:'all .3s ease-in-out'}}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};




export { CarouselAmpliation };
