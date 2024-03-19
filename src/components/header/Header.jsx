import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import React from "react";

const Header = () => {
  return (
    <header>
      <div className={styles.link}>
        <Link to="/profile">
          <svg
            className={styles.profile_svg}
            width="55.000000"
            height="55.000000"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip28_335">
                <rect
                  id="Frame"
                  width="39.285713"
                  height="39.285713"
                  transform="translate(7.857178 7.857147)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <circle
              id="Ellipse 1"
              cx="27.500000"
              cy="27.500000"
              r="26.500000"
              stroke="#04FFFF"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
            />
            <g clip-path="url(#clip28_335)">
              <path
                id="Vector"
                d="M31.8405 22.019C30.6893 23.1702 29.128 23.817 27.5 23.817C25.872 23.817 24.3107 23.1702 23.1595 22.019C22.0083 20.8679 21.3616 19.3065 21.3616 17.6786C21.3616 16.0505 22.0083 14.4892 23.1595 13.338C24.3107 12.1869 25.872 11.5402 27.5 11.5402C29.128 11.5402 30.6893 12.1869 31.8405 13.338C32.9917 14.4892 33.6384 16.0505 33.6384 17.6786C33.6384 19.3065 32.9917 20.8679 31.8405 22.019ZM18.8902 32.2372C21.1865 29.9781 24.2787 28.7121 27.5 28.7121C30.7213 28.7121 33.8135 29.9781 36.1098 32.2372C38.4061 34.4964 39.7225 37.5675 39.7751 40.7884C35.9241 42.5542 31.7366 43.4655 27.5 43.4598C23.1196 43.4598 18.9619 42.5038 15.2249 40.7884C15.2775 37.5675 16.5939 34.4964 18.8902 32.2372Z"
                stroke="#04FFFF"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
