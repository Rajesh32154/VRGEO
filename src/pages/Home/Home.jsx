import React from "react";
import "./Home.css";

import homemainimage from '../../assets/homemainimage.jpg'
import homemainimage2 from '../../assets/homemainimage2.png'
import demImage from '../../assets/dem-image.png'
import satelliteImage from '../../assets/satellite-image.png'
import geospatialServices from '../../assets/geospatial-services.png'
import webDevelopment from '../../assets/web-development.png'

const Home = () => {
  return (
    <div className="Main-Home-div-content">
      <div className="home-img-div">
        <img src={homemainimage} class="img-fluid" alt="HomePageImages" />
        <div className="top-left">
          <h2 className="home-well">Welcome to</h2>
          <h1 className="home-well">VR GEO SOLUTIONS</h1>
          <h3 className="home-well">
            Empowering Your World with Geospatial Innovation
          </h3>

          <div className="img-Para">
            <p>
              "At VR GEO Solutions, we specialize in providing advanced
              geospatial services designed to help industries transform vast
              amounts of spatial data into actionable insights. Our solutions
              are specifically crafted for sectors like urban planning,
              environmental conservation, disaster response, and infrastructure
              development. We leverage cutting-edge technology to create
              comprehensive, data-driven solutions that enable you to make
              informed decisions with precision and efficiency. Whether it's
              optimizing land use or enhancing disaster preparedness, our
              services are engineered to meet the unique demands of your
              projects.
            </p>
            <p>
              From high-resolution satellite imagery and remote sensing to GIS
              mapping and advanced analytics, our team delivers innovative
              geospatial solutions tailored to your objectives. We take pride in
              offering a seamless integration of technology and expertise to
              support sustainable growth, improve operational efficiency, and
              foster better resource management. With VR GEO Solutions as your
              partner, you'll gain the strategic advantage needed to drive
              impactful, long-lasting results across a wide range of
              industries."s.
            </p>
          </div>
        </div>
      </div>

      <div className=" home-text-of-para bg-dark ">
        <p className="mb-0 text-white text-center home-para">
          Why Choose VR GEO Solutions? With a passion for innovation and a focus
          on results, we partner with clients worldwide to solve complex
          challenges through the power of geospatial technology. Trust us to
          deliver timely, reliable, and customized solutions that drive your
          success.. Our team leverages the latest technologies in remote
          sensing, GIS, photogrammetry, and AI-driven analysis to deliver
          precision and excellence. With a commitment to accuracy and
          efficiency, we help you unlock the potential of geospatial data for
          smarter decision-making.
        </p>
      </div>

      <div className="d-flex">
        <img
          src={homemainimage2}
          class="img-fluid home-img-two"
          alt="HomePageImages"
        />
      </div>

      <div class="jumbotron jumbotron-fluid overview-div">
        <div class="container-fluid over-cont">
          <h1 class="Overview-heading display-8 text-center font-weight-bold">
            Overview
          </h1>
          <p class=" overview-text">
            Founded in 2023, VR GEO Solutions provides cutting-edge geospatial
            services to help industries transform data into actionable insights.
            We specialize in various areas, including image processing, remote
            sensing, photogrammetry, and GIS, offering end-to-end solutions for
            urban planning, environmental conservation, disaster response, and
            infrastructure projects. Our services extend beyond traditional
            geospatial offerings to include web and mobile application
            development, allowing clients to access and manage geospatial data
            efficiently. Additionally, our professional services ensure expert
            guidance and tailored solutions for all geospatial needs. At VR GEO
            Solutions, we combine advanced technology and expert knowledge to
            deliver impactful, innovative geospatial solutions.
          </p>

          <div className="overview-options">
            <div type="div" class="overview-item geo-sol">
              Geospatial Solutions
            </div>
            <div type="div" class="overview-item img-pro">
              Image Processing
            </div>
            <div type="div" class="overview-item rem-sen">
              Remote Sensing
            </div>
            <div type="div" class="overview-item photog">
              Photogrammetry
            </div>
            <div type="div" class="overview-item GIS">
              GIS
            </div>
            <div type="div" class="overview-item web-app">
              Web Application
            </div>
            <div type="div" class="overview-item mob-app">
              Mobile Application
            </div>
            <div type="div" class="overview-item prof-ser">
              Professional Services
            </div>
          </div>
        </div>
      </div>

      <div class="container marketing Our-services-div">
        <div class="jumbotron ">
          <h1 class="text-center our-serv-heading">Our Services</h1>

          {/* <!-- START THE FEATURETTES --> */}

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="feature-img-heading featurette-heading text-primary">DEM</h2>
              <p class=" dem-img-text">
                VR-DEM (Virtual Reality Digital Elevation Model) data
                generalization involves simplifying detailed elevation data for
                VR applications, making it easier to visualize and interact with
                large-scale terrains. By reducing the complexity of DEM data
                while retaining key features, this approach improves rendering
                speed and performance without sacrificing important geographical
                details. Generalized VR-DEM data is commonly used in industries
                like urban planning, environmental monitoring, and education,
                where users need a realistic yet efficient way to explore
                terrains and landscapes. This process enhances accessibility,
                allowing more users to experience and analyze topographical
                information in immersive virtual environments..
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="featurette-image img-fluid mx-auto"
                src={demImage}
                alt="demImage"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="feature-img-heading featurette-heading text-primary">
                Satellite Images Download and Processing
              </h2>
              <p class=" satellite-img-text">
                Satellite image analysis begins with downloading the required
                data, followed by preprocessing to correct distortions, remove
                cloud cover, and adjust for atmospheric conditions. Once
                prepared, the images are processed to extract valuable
                information, such as land cover classification, environmental
                changes, and spatial patterns. This workflow transforms raw
                satellite data into actionable insights, enabling applications
                across agriculture, urban planning, and environmental
                monitoring.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                class="featurette-image img-fluid mx-auto"
                src={satelliteImage}
                alt="Satellite Images"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="feature-img-heading featurette-heading text-primary">
                Geospatial Services
              </h2>
              <p class=" geo-img-text">
                Our geospatial services encompass image processing, remote
                sensing, GIS (Geographic Information Systems), and
                photogrammetry, providing comprehensive solutions for analyzing
                and interpreting spatial data. Image processing refines raw
                imagery, enhancing clarity and accuracy, while remote sensing
                captures data about the Earth's surface from afar, supporting
                applications like environmental monitoring and resource
                management. GIS integrates spatial data with mapping for
                in-depth analysis, useful in urban planning, infrastructure
                management, and more. Photogrammetry uses images to measure and
                map distances, aiding in the creation of detailed, accurate 3D
                models. Together, these services address a wide range of
                geospatial needs with precision and insight..
              </p>
            </div>
            <div class="col-md-5">
              <img
                class="featurette-image img-fluid mx-auto"
                src={geospatialServices}
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="feature-img-heading featurette-heading text-primary">
                Geospatial Web Development and Android Applications
              </h2>
              <p class=" webdev-img-text">
                We specialize in creating geospatial web applications and
                Android apps that are customized to meet unique requirements,
                making spatial data accessible and interactive across platforms.
                Our web applications bring mapping, data visualization, and
                analytics to any web-enabled device, offering features like
                real-time tracking, terrain analysis, and spatial data overlays.
                For Android, we develop mobile apps that provide similar
                functionality on the go, empowering users to access and analyze
                geospatial information directly in the field. These solutions
                enable users to make data-driven decisions, track assets, and
                manage resources effectively, all through intuitive,
                user-friendly interfaces.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                class="featurette-image img-fluid mx-auto"
                src={webDevelopment}
                alt="Generic placeholder image"
              />
            </div>
          </div>
          <hr class="featurette-divider" />

          {/* <!-- /END THE FEATURETTES --> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
