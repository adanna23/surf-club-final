import React from "react";
import about from "../../assets/about.jpg";
// import ftw from "../../assets/ftw.png";
import "./style.scss";
import MenuManager from "../Menu/MenuManager";

const About = () => {
  return (
    <MenuManager>
      <div>
        <div className="about-container">
          <div className="about-title">
            <h1>ABOUT US</h1>
            <div className="about-content">
              <img src={about} />
              <p>
                Welcome to Surf Club – your go-to destination for unique apparel
                inspired by the vibrant spirit of Nigeria.
                <br />
                At Surf Club, we're more than just a clothing brand; we're a
                movement. Our philosophy, "Wave after wave," reflects the
                unending energy of the ocean – always moving forward, never
                looking back. Just as the waves continue to crash upon the
                shore, we believe in the power of progress, growth, and
                embracing change. <br />
                Based in Nigeria, our brand is deeply rooted in the rich culture
                and diversity of this incredible nation. Our apparel is a
                reflection of the spirit, resilience, and creativity that define
                us. From bold designs that capture the essence of the Nigerian
                experience to comfortable and stylish pieces that effortlessly
                blend fashion with everyday life, Surf Club is here to make a
                statement.
                <br />
                We're not just selling clothes; we're sharing a mindset. Our
                passion for keeping it moving, just like the ocean, drives us to
                curate pieces that resonate with those who seek adventure,
                embrace their individuality, and ride the waves of life with
                style and confidence.
                <br />
                Join us on this journey as we ride "wave after wave,"
                celebrating the beauty of progression, and uniting fashion with
                the unstoppable force of the ocean. Together, let's make every
                day an opportunity to move forward, create change, and rock the
                world with our unique style.
                <br />
                Welcome to Surf Club – where the spirit of Nigeria meets the
                energy of the waves.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MenuManager>
  );
};

export default About;
