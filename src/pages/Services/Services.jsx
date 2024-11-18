// UnderConstruction.js
import React, { useState, useEffect } from "react";
import DromImage from "../../assets/ds - Copy.jpg"
import GeoImage from "../../assets/gs - Copy.jpg"
import bgimage from "../../assets/gis.jpg"
import col1 from "../../assets/RS1.jpg"
import col2 from "../../assets/RS2.jpg"
import col3 from "../../assets/RS3.jpg"
import col4 from "../../assets/RS4.jpg"
import col5 from "../../assets/RS5.jpg"
import colp1 from "../../assets/pg1.jpg"
import colp2 from "../../assets/pg2.jpg"
import colp3 from "../../assets/pg3.jpg"
import colp4 from "../../assets/pg4.jpg"
import Lidar from "../../assets/lidar.jpg"
import Service from "../../assets/servicebackground.jpg"
import "./Services.css";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const slides = [
    {
      id: 0,
      imageUrl:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80",
      quote:
        "The world is a book, and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      quote: "We travel not to escape life, but for life not to escape us.",
      author: "Anonymous",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      quote: "A journey is best measured in friends, rather than miles.",
      author: "Tim Cahill",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // tabscode###################//////
  const [activeTab, setActiveTab] = useState("firstTab");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className="AgriCultureHome">
      <div className=" ">
        <div className="AgriCulTop">
          <div className="headingingOfAgri Text-Center">

            <div className="headingingOfAgri">
              <img
                src={Service}
                alt=""
                className="BannerOfAgri"
              ></img>
            </div>
            <p className=" ParaForAgri mx-5 sm:d-none md:d-none">"We offer a wide range of services designed to meet the unique challenges of our clients.
              "</p>


            {/* <div className="mx-lg-5 mt-4 mx-sm-0">
              <p className=" ParaForAgri">
                1.Remote sensing in agriculture involves using satellite or
                aerial imagery to gather information about crops and land
                conditions. By capturing images from a distance, farmers and
                agricultural experts can monitor the health of crops, assess
                soil moisture levels, and identify areas that may need special
                attention. This technology enables timely decision-making, such
                as adjusting irrigation, applying fertilizers, or detecting
                potential pest infestations. Remote sensing provides a valuable
                tool for optimizing crop management, increasing yields, and
                reducing environmental impact by allowing farmers to target
                interventions precisely where they are needed. Overall, it
                enhances the efficiency and sustainability of agricultural
                practices through the utilization of advanced imaging technology
                from afar. <br></br> <br></br>
                2.Agriculture is the practice of cultivating the soil, growing
                crops, and raising livestock for food and other products.
                Farmers play a crucial role in this process, using various tools
                and techniques to ensure a successful harvest. They prepare the
                soil, plant seeds, and nurture the crops through watering,
                fertilizing, and pest control. Livestock, such as cows and
                chickens, are also raised for meat, milk, and other products.
                Weather conditions, soil quality, and sustainable farming
                practices are essential factors for a thriving agricultural
                system. In addition to providing food, agriculture contributes
                to the economy and supports livelihoods around the world.
              </p>
            </div>

            <div className="row  py-5 ForFirAgri mx-5">
              <div className="col-lg-6 col-md-12 col-sm-12 pl-lg-3">
                <h1>DRONE SURVEYS</h1>
                <img
                  className="mainName w-100"
                  src={DromImage}
                  // src="VrGeoSolutions\VRGEOSOLUTIONS\src\assets\ds - Copy.jpg"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
                <p className="AgricultureParaofimage px-lg-4 mt-5">
                
Vr Geo Solutions is a leader in providing innovative drone survey solutions, delivering critical aerial insights to industries worldwide. From mining and stockpile management to infrastructure inspection, we use state-of-the-art drone technology to capture accurate, high-resolution data that helps optimize operations and improve efficiency. ​
In mining, our drones provide precise assessments for resource extraction and stockpile management, ensuring better control and optimization. For infrastructure inspections, we offer cost-effective, detailed evaluations of vital assets such as bridges, power lines, and pipelines, enhancing safety and operational reliability.​
​Driven by a commitment to precision and innovation, we empower organizations with actionable data and insights. Whether improving mining processes, ensuring infrastructure safety, or offering an aerial perspective of projects, Land Earth Technologies is your go-to partner for reliable drone survey solutions..​

                </p>
              </div>
            
            </div> */}
            {/* <div className="row  py-5 ForFirAgritwo mx-5 ">
             
              <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
                <p className="AgricultureParaofimage px-lg-4 mt-5">
                

At Vr Geo Solutions, we provide comprehensive ground survey services, specializing in Total Station and GPS surveys to meet the precise needs of various industries. Our skilled teams use advanced equipment and cutting-edge technology to capture highly accurate geospatial data. ​
​In Total Station surveys, we deliver precise measurements for land mapping, construction, and property boundary determination. Our GPS survey services offer real-time positioning and efficient data collection, enabling accurate mapping, navigation, and asset management.​​
​With a strong focus on precision, reliability, and efficiency, we are the trusted partner for clients seeking dependable land surveys and geospatial information. From land development to infrastructure projects and land use planning, Land Earth Technologies offers the insights needed for confident decision-making and successful project outcomes.


                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 pl-lg-3">
                <h1>GROUND SURVEYS</h1>
                <img
                  className="mainName img-fluid"
                  src={GeoImage}
                  // src="VrGeoSolutions\VRGEOSOLUTIONS\src\assets\ds - Copy.jpg"
                />
              </div>
            </div> */}
            <h1 className="mt-5 ServiceHeading">SERVICES</h1>
            <div className=" mx-5 ">
              <div className="tabs-container mb-5 row">
                <div className="tab col-lg-3 col-md-12 col-sm-12">
                  <button
                    className={`tablinks ${activeTab === "firstTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("firstTab")}
                  >
                    REMOTE SENSING
                  </button>
                  <hr></hr>
                  <button
                    className={`tablinks ${activeTab === "secondTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("secondTab")}
                  >
                    PHOTOGRAMMETRY
                  </button>
                  <hr></hr>
                  <button
                    className={`tablinks ${activeTab === "thirdTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("thirdTab")}
                  >
                    GEOGRAPHIC INFORMATION SYSTEMS(GIS)
                  </button>
                  <hr></hr>
                  <button
                    className={`tablinks ${activeTab === "forthTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("forthTab")}
                  >
                    DRONE SURVEYS
                  </button>
                  <hr></hr>
                  <button
                    className={`tablinks ${activeTab === "fifthTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("fifthTab")}
                  >
                    GROUND SURVEYS
                  </button>
                  <hr></hr>
                  <button
                    className={`tablinks ${activeTab === "sixthTab" ? "active" : ""}`}
                    onClick={() => handleTabClick("sixthTab")}
                  >
                    LIDAR (LIGHT DETECTION AND RANGING)
                  </button>

                </div>

                <div
                  id="firstTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "firstTab" ? "active-content" : ""}`}
                >
                  <h3 className="text2">REMOTE SENSING</h3>
                  <p className="ParaofTab"> Unlock the Power of Remote Sensing for Smarter, Sustainable Solutions</p>
                  <div className="row">
                    <div className="col"><img className="img-fluid" src={col1} alt="" /></div>
                    <div className="col"><img className="img-fluid" src={col2} alt="" /></div>
                    <div className="col"><img className="img-fluid" src={col3} alt="" /></div>
                    <div className="col"><img className="img-fluid" src={col4} alt="" /></div>
                    <div className="col"><img className="img-fluid" src={col5} alt="" /></div>

                  </div>
                  <p className="para1tab">

                    At Vr Geo Solutions, we are experts in photogrammetry, offering precise, reliable solutions for projects that demand accuracy. Our expertise in aerial triangulation ensures that every geospatial map is anchored with precision, laying the foundation for reliable data.
                    We specialize in generating Digital Elevation Models (DEM), Digital Terrain Models (DTM), and Digital Surface Models (DSM), allowing clients to visualize and analyze complex terrains in 3D. Our services also include detailed planimetric feature extraction, accurately mapping roads, buildings, and infrastructure to support urban planning and resource management.
                    With advanced 3D modeling capabilities, we bring landscapes and structures to life, making visualization and analysis more efficient for industries like architecture, engineering, and environmental assessment. At Land Earth Technologies, we combine innovative technology with a client-focused approach, delivering precise geospatial data that drives success and informed decision-making.
                    Discover the power of photogrammetry with us, where accuracy meets innovation.

                  </p>
                </div>

                <div
                  id="secondTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "secondTab" ? "active-content" : ""}`}
                >
                  <h3 className="text2">PHOTOGRAMMETRY</h3>
                  <p className="ParaofTab">Transforming Spaces with Precise Photogrammetry Solutions</p>
                  <div className="row">
                    <div className="col"><img src={colp1} alt="" /></div>
                    <div className="col"><img src={colp2} alt="" /></div>
                    <div className="col"><img src={colp3} alt="" /></div>
                    <div className="col"><img src={colp4} alt="" /></div>


                  </div>
                  <p className="para1tab">

                    At Vr Geo Solutions, we are experts in photogrammetry, offering precise, reliable solutions for projects that demand accuracy. Our expertise in aerial triangulation ensures that every geospatial map is anchored with precision, laying the foundation for reliable data.
                    We specialize in generating Digital Elevation Models (DEM), Digital Terrain Models (DTM), and Digital Surface Models (DSM), allowing clients to visualize and analyze complex terrains in 3D. Our services also include detailed planimetric feature extraction, accurately mapping roads, buildings, and infrastructure to support urban planning and resource management.
                    With advanced 3D modeling capabilities, we bring landscapes and structures to life, making visualization and analysis more efficient for industries like architecture, engineering, and environmental assessment. At Land Earth Technologies, we combine innovative technology with a client-focused approach, delivering precise geospatial data that drives success and informed decision-making.
                    Discover the power of photogrammetry with us, where accuracy meets innovation.

                  </p>
                </div>

                <div
                  id="thirdTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "thirdTab" ? "active-content" : ""}`}
                >
                  <h3 className="text2">GEOGRAPHIC INFORMATION SYSTEMS(GIS)</h3>
                  <p className="ParaofTab">Revolutionizing Decision-Making with Smart GIS and BAMEmap Solutions</p>
                  <div className="row">
                    <div className="col-lg-9">
                      <p className="para3tab">


                        At Vr Geo Solutions, we are pioneers in remote sensing, offering cutting-edge solutions tailored to various industries. Our expert team leverages advanced technology to capture, analyze, and interpret geospatial data from satellites, drones, and other platforms, providing clients with precise, actionable insights.
                        Our comprehensive services cover the full remote sensing workflow—data acquisition, preprocessing, image analysis, and GIS integration. Whether it’s monitoring agricultural health, assessing environmental changes, or supporting urban planning, we deliver reliable results that empower informed decision-making.
                        With a strong commitment to innovation and data security, we ensure high-quality outcomes for every project. Our diverse portfolio spans forestry management, disaster response, land use planning, and more. By partnering with clients, we help optimize operations, reduce risks, and promote sustainability through intelligent data solutions.
                        At Vr Geo Solutions, we don’t just offer services; we deliver insights that transform industries and foster responsible environmental stewardship. Discover the potential of remote sensing with us.


                      </p>
                    </div>
                    <div className="col-lg-3"><img className="w-75 h-75 img-fluid" src={bgimage} alt="" /></div>



                  </div>

                </div>
                <div
                  id="forthTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "forthTab" ? "active-content" : ""}`}
                >
                  <h3 className="text2">DRONE SURVEYS</h3>
                  <p className="ParaofTab">Harness the Power of Drone Technology for Accurate Insights and Smarter Decisions </p>
                  <div><img className="img-fluid" src={DromImage} alt="" /></div>

                  <p className="para4tab">
                    Vr Geo Solutions is a leader in providing innovative drone survey solutions, delivering critical aerial insights to industries worldwide. From mining and stockpile management to infrastructure inspection, we use state-of-the-art drone technology to capture accurate, high-resolution data that helps optimize operations and improve efficiency.
                    In mining, our drones provide precise assessments for resource extraction and stockpile management, ensuring better control and optimization. For infrastructure inspections, we offer cost-effective, detailed evaluations of vital assets such as bridges, power lines, and pipelines, enhancing safety and operational reliability.
                    Driven by a commitment to precision and innovation, we empower organizations with actionable data and insights. Whether improving mining processes, ensuring infrastructure safety, or offering an aerial perspective of projects, Land Earth Technologies is your go-to partner for reliable drone survey solutions..
                  </p>
                </div>
                <div
                  id="fifthTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "fifthTab" ? "active-content" : ""}`}
                >

                  <h3 className="text2">GROUND SURVEYS</h3>
                  <p className="ParaofTab">Transforming Imagery into Actionable Insights for Smarter Decisions</p>
                  <div><img className="img-fluid" src={GeoImage} alt="" /></div>

                  <p className="para4tab">
                    Vr Geo Solutions is a leader in providing innovative drone survey solutions, delivering critical aerial insights to industries worldwide. From mining and stockpile management to infrastructure inspection, we use state-of-the-art drone technology to capture accurate, high-resolution data that helps optimize operations and improve efficiency.
                    In mining, our drones provide precise assessments for resource extraction and stockpile management, ensuring better control and optimization. For infrastructure inspections, we offer cost-effective, detailed evaluations of vital assets such as bridges, power lines, and pipelines, enhancing safety and operational reliability.
                    Driven by a commitment to precision and innovation, we empower organizations with actionable data and insights. Whether improving mining processes, ensuring infrastructure safety, or offering an aerial perspective of projects, Land Earth Technologies is your go-to partner for reliable drone survey solutions..
                  </p>

                </div>
                <div
                  id="sixthTab"
                  className={`tabcontent col-lg-9 col-sm-12 col-md-12 ${activeTab === "sixthTab" ? "active-content" : ""}`}
                >
                  <h3 className="text2">LIDAR (LIGHT DETECTION AND RANGING)</h3>
                  <p className="ParaofTab">Harness the Precision of LiDAR for a Greener, Smarter Future 4o</p>
                  <div><img className="img-fluid" src={Lidar} alt="" /></div>

                  <p className="para5tab">
                    Vr Geo Solutions is a leader in providing innovative drone survey solutions, delivering critical aerial insights to industries worldwide. From mining and stockpile management to infrastructure inspection, we use state-of-the-art drone technology to capture accurate, high-resolution data that helps optimize operations and improve efficiency.
                    In mining, our drones provide precise assessments for resource extraction and stockpile management, ensuring better control and optimization. For infrastructure inspections, we offer cost-effective, detailed evaluations of vital assets such as bridges, power lines, and pipelines, enhancing safety and operational reliability.
                    Driven by a commitment to precision and innovation, we empower organizations with actionable data and insights. Whether improving mining processes, ensuring infrastructure safety, or offering an aerial perspective of projects, Land Earth Technologies is your go-to partner for reliable drone survey solutions..
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Services;
