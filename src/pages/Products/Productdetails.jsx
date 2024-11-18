import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import productsbanner1 from "../../assets/productsbanner1 - Copy.jpg";
import servbanner2 from "../../assets/servbanner2 - Copy.jpg";
import servbanner1 from "../../assets/servbanner1 - Copy.jpg";
import './product.css';

import ImageGallery from './ImageGallery'
const carouselItems = [
    {
      image: productsbanner1,
      altText: "Dark Flowers 1",
      title: "VR-DEM Virtual Reality Elevation Data",
      description: " At VR GEO Solutions, we are proud to introduce VR-DEM, our state-of-the-art Virtual Reality Elevation Data product Designed for professionals in various fields such as urban planning, environmental science, and geological research,VR-DEM provides the precision and detail needed to enhance your projects and decision-making processes..",
    },
    {
      image: servbanner2,
      altText: "Dark Flowers 2",
      title: "Transform Your Geospatial Analysis with Cutting-Edge Elevation Data.",
      description: "Unlock detailed insights with VR-DEM’s advanced elevation data, providing the accuracy and clarity needed for effective geospatial decision-making.",
    },
    {
      image: servbanner1,
      altText: "Dark Flowers 3",
      title: "Unlock Precision in Your Projects with VR-DEM: Next-Level Elevation Data",
      description: "Enhance your projects with VR-DEM’s high-resolution elevation data, offering unmatched precision for terrain analysis and geographic planning.",
    },
  ];
const Productdetails = () => {
  return (
   <>
    <div className="products-carousel container-fluid px-0">
        <Carousel>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              {/* Responsive Image */}
              <img
                className="d-block w-100 carousel-image"
                src={item.image}
                alt={item.altText}
              />
              <Carousel.Caption className="carousel-caption-custom d-flex flex-column align-items-center justify-content-center text-center">
                <h2 className="caption-title">{item.title}</h2>
                <p className="caption-text">{item.description}</p>
                <Button variant="outline-light" className="caption-button">
                  Learn More
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
   <ImageGallery />
   </>
  )
}

export default Productdetails