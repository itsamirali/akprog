import React from "react";
import cx from "classnames"

import styles from "./ContactItem.module.css"

function ContactItem({ title, icon, cont1, cont2 }) {
  return (
    <div className={cx(styles.contactItemStyled)}>
      <div className={cx(styles.leftContent)}>{icon}</div>
      <div className={cx(styles.rightContent)}>
        <h6>{title}</h6>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </div>
  );
}



export default ContactItem;
