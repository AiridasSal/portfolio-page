import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, Route, Navigate } from "react-router-dom";

const SocialsContainer = styled.div`
  /* General container styles */
  z-index: 10;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  width: 50px;
  padding: var(--spacing-md);
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-md);
  align-items: center;
`;

export const SocialLink = styled.a`
  font-size: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: var(--white-color);

  @keyframes myAnim {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  &:hover {
    animation: myAnim 0.5s ease 0s 1 normal forwards; 
    color: var(--warning-color);
  }
`;

const Socials = () => {
  const navigate = useNavigate();

  return (
    <SocialsContainer>
      <SocialLink onClick={() => navigate("https://www.linkedin.com/", { replace: true })}>
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink onClick={() => navigate("https://www.facebook.com/", { replace: true })}>
        <FontAwesomeIcon icon={faFacebook} />
      </SocialLink>
      <SocialLink onClick={() => navigate("https://www.instagram.com/", { replace: true })}>
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
      <SocialLink onClick={() => navigate("https://www.github.com/", { replace: true })}>
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
    </SocialsContainer>
  );
};

export default Socials;