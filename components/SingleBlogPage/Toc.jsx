import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const contentDiv = document.getElementById("blog-content");
    const headingElements = Array.from(contentDiv.querySelectorAll("h2"));

    const headings = headingElements.map((heading) => {
      const id = heading.innerText
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      heading.id = id; // set the ID of the h2 element to the generated ID
      return {
        id,
        text: heading.innerText,
        level: Number(heading.tagName.slice(1)),
        className: heading.className,
      };
    });
    setHeadings(headings);
  }, []);

  return (
    <nav>
      {headings.length > 0 && (
        <TocHeading>
          <strong> Table of Contents:</strong>
        </TocHeading>
      )}
      <Arrow>
        {headings.map((heading) => (
          <li key={uuidv4()}>
            <TocLink href={`#${heading.id}`}>{heading.text}</TocLink>
          </li>
        ))}
      </Arrow>
    </nav>
  );
}
export default TableOfContents;
const TocHeading = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 1rem;
`;

const TocLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`;

const Arrow = styled.ul`
  padding-left: 15px;
  /* list-style-image: url("/right-arrow.png");
  height: 10px; */
`;
