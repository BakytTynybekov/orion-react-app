import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./location.scss";

function Location() {
  return (
    <div className="location">
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
        Офис: г. Москва
      </p>
      <span>Краснопресненская набережная, 2</span>
    </div>
  );
}
export default Location;
