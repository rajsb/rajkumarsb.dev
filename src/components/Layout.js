import React from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/react";
import favicon from "../images/favicon.ico";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Proxima";
            src: url("../assets/Proxima-Nova-Regular.otf");
          }

          html,
          body {
            padding: 20px;
            margin: 0;
            background: #ffffff;
            color: #555;
            font-family: "Proxima", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            font-size: 18px;
            line-height: 1.4;
          }

          a {
            color: #0070c9;
            text-decoration: none;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
