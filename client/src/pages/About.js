import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">Meet Our Creative Team</p>
            <p className="text-blk subHeading">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &amp;
              Media Specialist, Online Marketing Professionals, Freelancers and
              anyone looking to pursue a career in digital marketing,
              Accounting, Web development, Programming. Multimedia and CAD
              design.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src="/client/src/images/1.jpg"
              alt="image1"
            />
            <img
              className="number2img"
              src="/client/src/images/2.jpg"
              alt="image2"
            />
            <img
              className="number3img"
              src="/client/src/images/3.jpg"
              alt="image3"
            />
            <img
              className="number5img"
              src="/client/src/images/4.jpg"
              alt="image4"
            />
            <img
              className="number7img"
              src="/client/src/images/5.jpg"
              alt="image5"
            />
          </div>
        </div>
      </div>

      {/* <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div> */}
    </Layout>
  );
};

export default About;
