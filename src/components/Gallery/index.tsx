import { useEffect, useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from 'styled-icons/material-outlined';

import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type GalleryImageProps = {
  src: string;
  alt: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const commonSettings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  infinite: false,
  lazyLoad: 'ondemand'
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ]
};

const settingsModal: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
};

const Gallery = ({ items }: GalleryProps) => {
  const sliderRef = useRef<SlickSlider>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlekeyUp = ({ key }: KeyboardEvent) =>
      key === 'Escape' && setIsVisible(false);

    window.addEventListener('keyup', handlekeyUp);

    return () => window.removeEventListener('keyup', handlekeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`Thumb-${index + 1}`}
            src={item.src}
            alt={`Thumb - ${item.alt}`}
            onClick={() => {
              sliderRef.current!.slickGoTo(index, true);
              setIsVisible(true);
            }}
          />
        ))}
      </Slider>

      <S.Modal
        isVisible={isVisible}
        aria-hidden={!isVisible}
        aria-label="modal"
      >
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsVisible(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={sliderRef} settings={settingsModal}>
            {items.map((item, index) => (
              <img key={`Thumb-${index}`} src={item.src} alt={item.alt} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
