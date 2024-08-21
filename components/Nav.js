import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/nav.module.css";

const Nav = ({ libraryStatus, setLibraryStatus, isLargeScreen }) => {
  return (
    <nav className={styles.nav}>
      <h1>
        <FontAwesomeIcon icon={faAngleLeft} /> MyTunes{" "}
        {/* <span className="forward-slash">/</span> */}
        <FontAwesomeIcon icon={faAngleRight} />
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)} disabled={isLargeScreen}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
