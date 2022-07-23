import React, { useState } from "react";

import { useIntl } from "react-intl";
import Headers from "./Headers";
import Portfolio from "./Portfolio";

function Layout(props) {
  const [rtl, setRtl] = useState(false);
  const [toggled, setToggled] = useState(false);
  const intl = useIntl();

  const handleRtlChange = (checked) => {
    setRtl(checked);
    //setLocale(checked ? "ar" : "en");
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Portfolio
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>
        <Headers handleToggleSidebar={handleToggleSidebar} />
        <div className="app-content">{props.children}</div>
      </main>
    </div>
  );
}

export default Layout;
