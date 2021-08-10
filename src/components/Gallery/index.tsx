import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

type GalleryImageProps = {
  src: string;
  alt: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
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

const Gallery = ({ items }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          role="button"
          key={`Thumb-${index + 1}`}
          src={item.src}
          alt={`Thumb - ${item.alt}`}
        />
      ))}
    </Slider>
  </S.Wrapper>
);

export default Gallery;
