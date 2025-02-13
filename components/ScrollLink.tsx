"use client";

import React from "react";

const ScrollLink = ({ link, children }: { link: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = link.startsWith("#") ? link.slice(1) : null;
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 80;
        const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a href={link} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
