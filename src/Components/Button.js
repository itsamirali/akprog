import React from "react";

import cx from "classnames";
import styles from "./Button.module.css";

function Button({ filter, button }) {
  return (
    <button className={cx(styles.buttonsStyled)}>
      {button.map((but, i) => {
        return (
          <div
            className={cx(styles.buttonsStyled)}
            key={i}
            onClick={() => filter(but)}
          >
            {but}
          </div>
        );
      })}
    </button>
  );
}

export default Button;
