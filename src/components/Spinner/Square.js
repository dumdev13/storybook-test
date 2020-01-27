import React from "react";
import PropTypes from "prop-types";
import styles from "./Square.module.css";
import { css } from "@emotion/core";

import { SquareLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

Square.propTypes = {
  square: PropTypes.shape({
    cssOverride: PropTypes.string,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
  })
};

export default function Square({
  square: { cssOveride, size, color, loading }
}) {
  return (
    <div className={styles.centerLoader}>
      <SquareLoader
        css={override}
        size={150}
        color={"#ffffff"}
        loading={true}
      />
    </div>
  );
}
