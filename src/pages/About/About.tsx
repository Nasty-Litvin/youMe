import Title from "../../components/Title/Title";

import "./style.scss";

const titleText = "В YouMi вы не одни Вместе мы справимся";

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <Title
          text={titleText}
          style={{ fontSize: "44px", lineHeight: "130%", maxWidth: "640px" }}
        />
        <img src="/about/aboutMain.png" alt="#" />
      </div>
    </div>
  );
};

export default About;
