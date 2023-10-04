import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="container">
        <div className="row contactus ">
          {/* <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div> */}
          <div className="col-md-9">
            <h1>About Us</h1>
            <p className="text-justify mt-2">
              E-commerce Website for Artisans of Nepal, our mission is to
              celebrate and empower the talented artisans of Nepal by providing
              them with a platform to showcase their exquisite craftsmanship to
              the world. We believe in preserving and promoting the rich
              cultural heritage of Nepal through handmade, authentic products.
              Our e-commerce platform brings together a diverse range of
              artisanal creations, including traditional handicrafts, textiles,
              jewelry, and more, allowing customers worldwide to connect
              directly with the artisans behind these unique pieces. By
              supporting our initiative, you not only acquire exceptional and
              ethically-made products but also contribute to the livelihoods of
              these skilled artisans, helping them sustain their age-old
              traditions while fostering economic growth in Nepal's rural
              communities. Join us on this journey to celebrate Nepal's artisans
              and their remarkable artistry.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
