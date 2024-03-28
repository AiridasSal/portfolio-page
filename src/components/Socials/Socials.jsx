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

  return (
    <SocialsContainer>
    <SocialLink href="https://www.linkedin.com/" target="_blank">
  <FontAwesomeIcon icon={faLinkedin} />
</SocialLink>
<SocialLink href="https://www.facebook.com/" target="_blank">
  <FontAwesomeIcon icon={faFacebook} />
</SocialLink>
<SocialLink href="https://www.instagram.com/" target="_blank">
  <FontAwesomeIcon icon={faInstagram} />
</SocialLink>
<SocialLink href="https://www.github.com/" target="_blank">
  <FontAwesomeIcon icon={faGithub} />
</SocialLink>

    </SocialsContainer>
  );
};

export default Socials;