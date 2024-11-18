import React from 'react';
import { FaTools, FaChartLine, FaRocket, FaCogs } from 'react-icons/fa';
import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram, FaHandshake, FaCertificate } from 'react-icons/fa';

import { Carousel, Button } from 'react-bootstrap';
import productsbanner1 from "../../assets/sevice_banner_img.jpg";
import servbanner2 from "../../assets/servbanner2.jpg";
import servbanner1 from "../../assets/servbanner1.jpg";
import '../Products/Product.css';
const carouselItems = [
  {
    image: productsbanner1,
    altText: "Dark Flowers 1",
    title: "IT Consulting & Support",
    description: "Expert consulting services to streamline your IT infrastructure and ongoing support to keep your systems running smoothly.",
  },
  {
    image: servbanner2,
    altText: "Dark Flowers 2",
    title: "Custom Software Development.",
    description: "Transform your business with tailored software solutions designed to meet your specific needs, ensuring efficiency and scalability.",
  },
  {
    image: servbanner1,
    altText: "Dark Flowers 3",
    title: "Data Analytics & Insights",
    description: "Leverage powerful data analytics to gain actionable insights, optimize processes, and make data-driven decisions.",
  },
];
const Innovation = () => {
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

              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className='container py-lg-5'>
        <div className='py-5'>
          <div className="section_our_solution">
            <div className="row">
              <div className='col-lg-6 col-md-12 col-12'>
                <div className='py-5'>
                  <h2 className='mb-4' style={{ color: "#ff69b4" }}>Innovation in Geospatial Technology</h2>
                  <p>Geospatial technology is transforming the way we understand and interact with the world around us.
                    By leveraging advanced mapping, real-time data integration, and spatial analytics,
                    this technology enables precise decision-making in fields like urban planning, environmental monitoring, and disaster management. Innovations in geospatial solutions are unlocking new possibilities for sustainable development, optimizing resource management, and driving smart city initiatives. As data becomes more interconnected, the future of geospatial technology
                    holds the promise of even deeper insights and automation for both public and private sectors.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  col-12">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    {/* Card 1 */}
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <FaTools size={30} color="#1697de" />
                      </div>
                      <div className="solu_title">
                        <h3>Real-Time Data Integration</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Connects users with real-time geospatial data, enabling instant insights into environmental changes, traffic conditions, weather patterns, and more.                    </p>
                        <button type="button" className="read_more_btn">Read More</button>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <FaChartLine size={30} color="#1697de" />
                      </div>
                      <div className="solu_title">
                        <h3>Advanced Mapping & Visualization</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Interactive maps, 3D terrain, and custom overlays bring data to life, making complex information easy to interpret.                    </p>
                        <button type="button" className="read_more_btn">Read More</button>
                      </div>
                    </div>
                  </div>

                  <div className="solution_cards_box sol_card_top_3">
                    {/* Card 3 */}
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <FaRocket size={30} color="#1697de" />
                      </div>
                      <div className="solu_title">
                        <h3>Location-Based Analytics</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Offers insights on customer behavior, asset locations, and logistical efficiency.                  </p>
                        <button type="button" className="read_more_btn">Read More</button>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <FaCogs size={30} color="#1697de" />
                      </div>
                      <div className="solu_title">
                        <h3>Augmented Reality (AR) Integration</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          Overlay geospatial data onto real-world views for navigation, surveying, and outdoor data collection.                    </p>
                        <button type="button" className="read_more_btn">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      <div style={{ backgroundColor: "#fcf6f6" }}>
        <div className="container py-5 text-center">
          <h2 className="mb-4" style={{ color: "#ff69b4" }}>Our Services</h2>
          <p className="mb-5">
            We provide software development, corporate training, project guidance, internships, placement support, and global certifications to help you excel professionally.          </p>

          <div className="row g-4">
            {/* Software Development Card */}
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="card card-custom p-4 d-flex flex-column h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon">
                    <FaLaptopCode size={30} color="#ff69b4" />
                  </div>
                  <h5 className="card-title">Software Development</h5>
                  <p className="card-text flex-grow-1">
                    We have a team of skilful designers, developers, and digital marketers who render quality services to our clients with extreme dedication.
                  </p>
                </div>
              </div>
            </div>



            {/* Project Development Card */}
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="card card-custom p-4 d-flex flex-column h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon">
                    <FaProjectDiagram size={30} color="#ff69b4" />
                  </div>
                  <h5 className="card-title">Project Development</h5>
                  <p className="card-text flex-grow-1">
                    Students are provided with real-time, relevant scenarios during project development.
                  </p>
                </div>
              </div>
            </div>

            {/* Internships Card */}
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div className="card card-custom p-4 d-flex flex-column h-100">
                <div className="card-body d-flex flex-column">
                  <div className="card-icon">
                    <FaHandshake size={30} color="#ff69b4" />
                  </div>
                  <h5 className="card-title">Internships</h5>
                  <p className="card-text flex-grow-1">
                    When you intern in a new workplace, you will gain direct knowledge about how a professional environment works.
                  </p>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>


    </>
  )
};

export default Innovation;
