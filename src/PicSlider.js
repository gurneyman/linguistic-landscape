import React from 'react';
import Slider from 'react-slick';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class PicSlider extends React.Component {
  render() {
    const activeSlide = this.props.locationPics.findIndex((locationPic) => {
      return locationPic.isActive;
    });
    const toggleOpenAt = this.props.toggleOpenAt.bind(this);
    const settings = {
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: activeSlide,
      beforeChange: function (currentSlide, nextSlide) {
        if(activeSlide !== nextSlide) {
          toggleOpenAt(nextSlide + 1);
        }
      },
    };
    return (
      <Slider {...settings}>
        {this.props.locationPics.map((locationPic) => {
          return(
            <div key={ locationPic.id }><img src={locationPic.imgurl} alt={locationPic.title} /></div>
          );
        })}
      </Slider>
    );
  }
}

export default PicSlider;