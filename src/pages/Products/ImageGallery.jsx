import React from 'react';
import './ImageGallery.css';
import agriculuture from "../../assets/agriculuture.jpg"
import infrastrucure from "../../assets/infrastrucure.jpg"
import renewable from "../../assets/renewable.jpg"
import forest from "../../assets/forest.jpg"
import eia from "../../assets/eia.jpg"
import slopanalysis from "../../assets/slopanalysis.jpg"
import landform from "../../assets/landform.jpg"
import orthophoto_rectification from "../../assets/orthophoto-rectification.jpg"

const ImageGallery = () => {
  const images = [
    {
      src: agriculuture,
      alt: 'Agriculture Analysis',
      description: 'Detailed analysis of agricultural land use and crop patterns.'
    },
    {
      src: infrastrucure,
      alt: 'Infrastructure Development',
      description: 'Insights into infrastructure projects and urban planning.'
    },
    {
      src: renewable,
      alt: 'Renewable Energy',
      description: 'Mapping renewable energy sources like solar and wind farms.'
    },
    {
      src: forest,
      alt: 'Forest Management',
      description: 'Assessing forest coverage and conservation areas.'
    },
    {
      src: eia,
      alt: 'Environmental Impact Assessment',
      description: 'Analyzing environmental impact for sustainable development.'
    },
    {
      src: slopanalysis,
      alt: 'Slope Analysis',
      description: 'Evaluating land slopes for construction and agriculture.'
    },
    {
      src: landform,
      alt: 'Landform Classification',
      description: 'Classifying various landforms for geospatial analysis.'
    },
    {
      src: orthophoto_rectification,
      alt: 'Orthophoto Rectification',
      description: 'High-resolution rectified images for accurate mapping.'
    },
 
  ];





  return (
    <>



      {/* <div class="container py-5">
        <div class="row align-items-center">
          <div class="text-center mb-5">
            <h2 style={{ color: "#ff69b4" }}>What can we do for you?</h2>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
            <h5 className='heading_of_qutions'>Help solve your challenges</h5>
            <p className='heading_of_text'>Get actionable intelligence from VR-DEM data to enhance decision-making and business solutions.</p>

            <h5 className='heading_of_qutions'> Access premium geospatial data</h5>
            <p className='heading_of_text'>With proprietary access to high-resolution elevation data, we provide services to empower users.</p>

            <h5 className='heading_of_qutions'>Connect and secure critical data</h5>
            <p className='heading_of_text'>We design customized geospatial data solutions, leveraging decades of expertise to meet your needs.</p>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 text-center">
            <img src={vrdemurban} alt="Tech Startup" class="img-fluid rounded" />
          </div>
        </div>


      </div> */}


      <div style={{ backgroundColor: "#fcf6f6" }}>
        <div class="container py-5 text-center">
          <h2 class="mb-4" style={{ color: "#ff69b4" }}>Accuracy of VR-DEM</h2>
          <p class="mb-5">The VR-DEM (Digital Elevation Model) boasts a vertical accuracy of 2-5 meters, ensuring reliable elevation data with a high level of confidence for users. This accuracy is achieved through advanced data processing techniques and high-resolution terrain capture methods, making VR-DEM ideal for applications requiring detailed terrain analysis and mapping.</p>

          <div class="row g-4">

            <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div class="card card-custom p-4 d-flex flex-column h-100">
                <div class="card-body d-flex flex-column">
                  <div class="card-icon">🏙️</div>
                  <h5 class="card-title">Urban Areas</h5>
                  <p class="card-text flex-grow-1">The VR-DEM provides a vertical accuracy of 2-5 meters in urban areas, enabling precise modeling of terrain and infrastructure. This accuracy is essential for effective urban planning and development.</p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div class="card card-custom p-4 d-flex flex-column h-100">
                <div class="card-body d-flex flex-column">
                  <div class="card-icon">🌊</div>
                  <h5 class="card-title">River Areas</h5>
                  <p class="card-text flex-grow-1">In river areas, the VR-DEM maintains a vertical accuracy of 2-5 meters, allowing for reliable analysis of elevation changes along riverbanks and floodplains, which is vital for environmental management.</p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div class="card card-custom p-4 d-flex flex-column h-100">
                <div class="card-body d-flex flex-column">
                  <div class="card-icon">⛰️</div>
                  <h5 class="card-title">Hilly Areas</h5>
                  <p class="card-text flex-grow-1">The VR-DEM’s vertical accuracy of 2-5 meters is particularly beneficial in hilly terrains, facilitating accurate representation of slopes and landforms for various planning and assessment purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='col-md-10 mx-auto mt-1 py-sm-4'>
        <div class="text-center mb-2 mb-sm-5">
          <h2 style={{ color: "#ff69b4" }}>Applictions</h2>
        </div>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="item-description">{image.description}</div>
            </div>
          ))}
        </div>
      </div>


      <div className='py-5 mb-5' style={{ backgroundColor: "#fcf6f6" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h4 style={{ color: "#ff69b4" }}> VR-DEM Elevation Data Minimum Order Requirement</h4>
                </div>
                <div class="card-body">
                  <p>VR-DEM elevation data has a minimum order requirement of 100 square kilometers to ensure detailed coverage.</p>

                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Service Type</th>
                        <th>Minimum Order Size</th>
                        <th>Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>VR-DEM Elevation Data</td>
                        <td>100 sq km</td>
                        <td>Customizable per order</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default ImageGallery;
