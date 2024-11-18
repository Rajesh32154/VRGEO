import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import productsbanner1 from "../../assets/product_img.jpg";
import servbanner2 from "../../assets/product_img1.jpg";
import servbanner1 from "../../assets/product_img2.png";
import path_to_brochure from "../../assets/VR-DEM_Broucher_FINAL.pdf";
import DEM2 from "../../assets/3DEM2.jpg"
import './product.css';
import ImageGallery from './ImageGallery';

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

const Products = () => {
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

                <div className='carousel_Conent'>
                  <h2 className="caption-title">{item.title}</h2>
                  <p className="caption-text">{item.description}</p>
                  {/* <Button variant="outline-light" className="caption-button">
                    Learn More
                  </Button> */}
               
                </div>

              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>



      <section>
        <div class="container_product col-12 col-md-10 mx-auto">
          <h2 class="title">Product Overview</h2>
          <h1 class="heading">Unlock Precision with VR-DEM: Advanced Elevation Data for 3D Visualization and Terrain Analysis</h1>
          <p class="description px-2 px-lg-5">
            VR-DEM is an advanced Digital Elevation Model (DEM) that delivers high-resolution terrain data with exceptional accuracy.
            This product is perfect for creating 3D visualizations,  <br /> conducting detailed terrain analysis, and enhancing geographical assessments.
          </p>
        </div>
      </section>



      <div class="container mb-4 pb-4">

        <div class="row ">
          <div class="col-lg-6  col-12">
            <img src={DEM2} alt="Tech Startup" class="img-fluid rounded img_wraper" />
          </div>

          <div class="col-12  col-lg-6 mt-3 mt-md-0  ">
            <table class="table table-bordered table-striped mb-3">
              <thead>
                <tr>
                  <th class="table-header">Feature</th>
                  <th class="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-data">File Format</td>
                  <td class="table-data">GeoTIFF - compatible with all major GIS software</td>
                </tr>
                <tr>
                  <td class="table-data">Data Type</td>
                  <td class="table-data">32 Bit, Floating Point - smooth gradients, high detail</td>
                </tr>
                <tr>
                  <td class="table-data">No Data Value</td>
                  <td class="table-data">-32767 - ensures seamless analysis and data handling</td>
                </tr>
                <tr>
                  <td class="table-data">Projection</td>
                  <td class="table-data">Universal Transverse Mercator (UTM)</td>
                </tr>
                <tr>
                  <td class="table-data">Projection Datum</td>
                  <td class="table-data">WGS84 - consistent global referencing</td>
                </tr>
                <tr>
                  <td class="table-data">Vertical Unit</td>
                  <td class="table-data">Meters</td>
                </tr>
                <tr>
                  <td class="table-data">Resolution</td>
                  <td class="table-data">7x7 meters - high-resolution data for detailed analysis</td>
                </tr>
                <tr>
                  <td class="table-data">Vertical Accuracy</td>
                  <td class="table-data">2-5 meters - precise measurements for critical assessments</td>
                </tr>
                <tr>
                  <td class="table-data">Vertical Reference</td>
                  <td class="table-data">Mean Sea Level (MSL) - standardized reference point</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col-12 col-md-10 mx-auto text-center mt-3">
            <h2 className='Download_title'>Download Our VR-DEM Brochure</h2>
            <p className='Download_title_details'>Get all the details you need about VR-DEM and its key specifications in a convenient brochure format.</p>
            <div class="d-flex justify-content-center">
              <a href={path_to_brochure} target="_blank" class="btn btn-outline-primary download-button me-3" role="button">Download Brochure</a>

            </div>
          </div>


        </div>

      </div>

      <ImageGallery />


    </>
  );
};

export default Products;
