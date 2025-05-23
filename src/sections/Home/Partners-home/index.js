
import React from "react";
import { Container, Row } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import PartnerItemWrapper from "./partnerSection.style";
import { Link } from "gatsby";
import { partners } from "./partners-home-data";
import Slider from "react-slick";

const settings = {
  initialSlide: 1,
  lazyLoad: true,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1500,
  className: "partner-slider",
  responsive: [
    {
      breakpoint: 1400,
      settings: "unslick"
    }
  ]
};

const Projects = () => {
  return (
    <PartnerItemWrapper>
      <Container>
        <Row>
          <SectionTitle
            className="section-title"
            $leftAlign={true}
            $UniWidth="75%"
          >
            <h4>ENGAGING AND COLLABORATING WITH</h4>
          </SectionTitle>
        </Row>
      </Container>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <Link className="partner-card" to={partner.imageRoute} key={index}>
            <div className={partner.innerDivStyle}>
              <img className="partner-image" id={partner.name} loading="lazy" src={partner.imageLink} alt={partner.name} width={partner.imageWidth} height={partner.imageHeight} />
            </div>
          </Link>
        ))}
      </Slider>
    </PartnerItemWrapper>
  );
};

export default Projects;
