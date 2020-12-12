import React from "react";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <p>
        Hey <span>👋🏼</span>&nbsp;&nbsp;I'm Raj. This is my space on the
        internet. I love to travel, occasionally read books and listen to lots
        of music.
      </p>
      <br />
      <p>
        You can find me on{" "}
        <a href="https://twitter.com/Rajsb_" target="_blank" rel="noreferrer">
          Twitter
        </a>{" "}
        and{" "}
        <a
          href="https://open.spotify.com/user/rajkumar.s.b"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
      </p>
    </Layout>
  );
};
