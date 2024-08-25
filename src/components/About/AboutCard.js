import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shyam Pratap </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I have 1 year Internship Experience as a Java Intern Position at Ascrop software
            <br/>
            I have completed PGDCA (BTEUP) in  Computer Application at Government Polytechnic Kanpur
            Mesra.
            <br />
            I have completed  Bsc  in science at Agra University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shyam Pratap</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
