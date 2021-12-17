import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faVk,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./socialMedia.scss";

function SocialMedia(props) {
  return (
    <a href="" className="social-media-icon vk">
      <FontAwesomeIcon icon={props.sclMedia} />
    </a>
  );
}
export default SocialMedia;
