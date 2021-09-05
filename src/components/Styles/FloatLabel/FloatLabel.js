import React, { useState } from "react";
import { FloatLabelCSS, LabelCSS } from "./FloatLabelElement";

export default function FloatLabel(props) {
  const [focus, setFocus] = useState(false);
  const { children, label, value, search, select, textarea } = props;

  const labelAttribute = focus || (value && value.length !== 0) ? true : false;

  return (
    <FloatLabelCSS
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      focus={focus}
      search={search}
      select={select}
      textarea={textarea}
    >
      <LabelCSS
        float={labelAttribute}
        search={search}
        select={select}
        textarea={textarea}
      >
        {label}
      </LabelCSS>
      {children}
    </FloatLabelCSS>
  );
}
