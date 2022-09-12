import React from "react";
import Link from "next/link"

function Header() {
  return (
    <>
      <header style={{ margin: "0 0 50px" }}>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/movie">Movie</Link>
          {" | "}
          <Link href="/about">About</Link>
          {" | "}
          <Link href="/getstatic_paths">GetStaticPaths</Link>
          {" | "}
          <Link href="/feed/posts">Feed</Link>
          {" | "}
          <Link href="/strapi">strapi</Link>
        </nav>
      </header>
    </>
  );
}

export default Header
