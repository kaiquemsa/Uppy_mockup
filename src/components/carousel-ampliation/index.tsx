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
import useMediaQuery from '@material-ui/core/useMediaQuery';

type ImageCarouselProps = {
  image: any;
};

interface ItemProps {
  img: string;
  alt: string;
}


const CarouselAmpliation: React.FC<ImageCarouselProps> = ({ image }) => {
  const matches = useMediaQuery('(max-width:600px)');

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
        <img src={img} alt={alt} style={{width:matches ? 320 : 569, height:matches ? 320 : 569, borderRadius: 16}}/>
        <IconButton onClick={openModal} style={{ position: "absolute", bottom: matches ? 256 : 10, right: matches ? 252 : 10, color: `${colors.uppyRose}`, zIndex: 5 }}>
              <CropFreeIcon />
        </IconButton>
      </Paper>
    );
  }

  return (
    <div style={{width: matches ? 320 : 'auto', height: matches ? 320 : 'auto'}}>
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
        className='Dialog'
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: matches ? '320' : '872px',
            height: matches ? '320' : '720px',
            maxWidth: '900px',
            alignItems: 'center',
            borderRadius: '24px',
          },
        }}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.74)' } }}
      >
        <DialogContent style={{width: matches ? 280 : 'auto', height: matches ? 350 : 'auto'}} >
          <IconButton onClick={closeModal} style={{position:"absolute", bottom:matches ? 15 : 32, right:matches ? 15 : 64, color:`${colors.uppyRose}`}}>
            <ZoomInMapIcon />
          </IconButton>
          <div style={{display:"flex", gap:24}}>
            <div style={{display:matches ? "none" : "flex", flexDirection: 'column', gap:16}}>
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
            <img src={images[selectedIndex]} alt={`Product ${selectedIndex}`} style={{width:matches ? 300 : 608, height:matches ? 300 : 608, borderRadius:20, transition:'all .3s ease-in-out'}}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};




export { CarouselAmpliation };
