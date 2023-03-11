import React from "react";
import Navbar from "../Components/GlobalComponents/Navbar";
import Technologey from "../Components/HomePageComponent/FashionProduct/Technology";
import SectionOne from "../Components/HomePageComponent/SectionOne";
import mobile1 from "../image/mobile1.jpg";
import laptop1 from "../image/laptop1.jpg";
import Cloth from "../Components/HomePageComponent/ClothProduct.jsx/Cloth";
import FeatureProduct from "../Components/HomePageComponent/FeatureProduct/FeatureProduct";
import Footer from "../Components/GlobalComponents/Footer";

function Home() {
  return (
    <div>
      <Navbar />
        <header className="container-fluid" >
          <div className="header-wrapper pd-4">
            <div>
              <h1>SHOP IS FUN</h1>
              <p>They are great appear whose land fly grass.</p>
              <a href="#buy-now" className="btn">Shop Now</a>
            </div>
          </div>
        </header>

      {/*------------------ HEADER PART END--------------  */}
      {/*---------------------- SECTION ONE PART START -------------- */}
      {/* IN THIS PART THERE ARE SOME IMAGE  */}
      <section className="container-fluid">
        <div className="pd-4">
          <div className="section-one-wrapper">
            <div className="section-one-upper">
              <div className="row">
                <SectionOne
                  image="./images/policy1.png"
                  title="FREE DELIVERY"
                  desc="For all oders over $120"
                />
                <SectionOne
                  image="./images/policy2.png"
                  title="SAFE PAYMENT"
                  desc="100% secure payment"
                />
                <SectionOne
                  image="./images/policy3.png"
                  title="WITH CONFIDENCE"
                  desc="If goods have problems"
                />
                <SectionOne
                  image="./images/policy4.png"
                  title="24/7 HELP CENTER"
                  desc="Dedicated 24/7 support"
                />
              </div>
            </div>
            <div className="section-one-banner">
              <div className="row">
                <div className="col-md-3 col-6">
                  <img
                    className="img-fluid"
                    src="./images/jk-banner-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-12">
                  <img
                    className="img-fluid"
                    src="./images/jk-banner-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-3 col-6" style={{border:'none'}} >
                  <img
                    className="img-fluid"
                    src="./images/jk-banner-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------------------- SECTION ONE PART END------------------- */}
      {/*------------------ SECTION TWO FASHION PRODUCT START ---------------- */}
      {/* IN THIS COMPONENT THERE ARE TECHNOLOGY PRODUCTS */}

      <Technologey />

      {/* AFTER FASHION COMPONENT THERE ARE TWO IMAGE */}

      <div className="container-fluid">
        <div className="pd-4">
          <div className="section-one-wrapper mobile-picture">
            <div className="section-one-banner ">
              <div className="row">
                <div className="col-6">
                  <img className="img-fluid" src={mobile1} alt="" />
                </div>
                <div className="col-6">
                  <img className="img-fluid" src={laptop1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE PART END  */}
      {/* CLOTH PRODUCT PART START  */}

      <Cloth />
      {/* FEATURED PRODUCT PART START  */}

      <FeatureProduct />

      {/* AFTER FEATURE PRODUCT  */}

      <div className="container-fluid">
        <div className="pd-4">
          <div className="for-position">
            <div className="arrive-wrapper">
              <div>
                <h3>NEW ARRIVALS</h3>
                <h2>STRIPED SHIRTS</h2>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="subscrive-wrapper">
              <div>
                <h2>GET UPDATE FROM ANYWHERE</h2>
                <h3>
                  Bearing Void gathering light light his eavening unto dont
                  afraid
                </h3>
                <div className="d-flex">
                  <input type="email" placeholder="Your Email Address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER PART START  */}

      <div className="for-margin" >
        <Footer />
      </div>
    </div>
  );
}

export default Home;
