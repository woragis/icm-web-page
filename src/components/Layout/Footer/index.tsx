import React from "react";
import { StyledFooter, StyledSocialMedia } from "./style";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SocialMediaType } from "../../../types/pages";

const SocialMediaComponent = ({ path, icon, title }: SocialMediaType) => {
  return (
    <li key={title}>
      <a href={path}>
        {icon}
        {title}
      </a>
    </li>
  );
};

const Footer = () => {
  const socialMedia: SocialMediaType[] = [
    {
      path: "https://www.instagram.com/y.jezreel.andrade",
      icon: <FaInstagram />,
      title: "Instagram",
    },
    {
      path: "https://www.linkedin.com/in/jezreel-vel%C3%B4so-9bba981a5/",
      icon: <FaLinkedin />,
      title: "Linkedin",
    },
    { path: "https://github.com/woragis", icon: <FaGithub />, title: "Github" },
  ];

  const social = socialMedia.map(({ path, icon, title }: SocialMediaType) => {
    return <SocialMediaComponent path={path} icon={icon} title={title} />;
  });

  return (
    <StyledFooter>
      <section className="container">
        <p className="about" id="about">
          This Website is used to control the information about{" "}
          <span className="icm">ICM - Igreja Crista Maranata </span>
          contribuitons from the local church{" "}
          <span className="cidade-verde">Cidade Verde - Joao Pessoa, PB</span>
        </p>
        <StyledSocialMedia>{social}</StyledSocialMedia>
      </section>
      <small>Jezreel de Andrade - 2023&copy;</small>
    </StyledFooter>
  );
};

export default Footer;
