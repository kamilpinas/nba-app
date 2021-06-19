import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import './slider.css';
const SliderTemplates = (props) => {
  var template = null

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    ...props.settings
  }

  switch (props.type) {
    case ('featured'):
      template = props.data.map((item, index) => {
        return (
          <div key={index}>
            <div className="featured_item">
              <div className="featured_image" style={{ background: `url(../images/articles/${item.image})` }}>
                <Link to={`/articles/${item.id}`}>
                  <div className="featured_title">
                    {item.title}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )
      })
      break;
    default:
      template = null;
  }

  return (
    <Slick {...settings}>
      {template}

    </Slick>
  );
};

export default SliderTemplates;