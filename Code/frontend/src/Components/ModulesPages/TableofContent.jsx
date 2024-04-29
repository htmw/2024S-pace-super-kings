import React, { useState, useEffect } from "react";
import './tablecontents.css';

const TableOfContent = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const newActiveHeading = headings.find((heading) => {
        const section = document.getElementById(heading.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        }
        return false;
      });

      setActiveHeading(newActiveHeading ? newActiveHeading.id : null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="table-of-contents">
      <h4>&#128970; Table of Contents &#128970;</h4>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a onClick={() => scrollToSection(heading.id)} className={activeHeading === heading.id ? "active" : ""}>
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;