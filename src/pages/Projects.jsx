import React from "react";
import { Card, Button } from "react-bootstrap";

const projectList = [
  {
    title: "KNU MATE",
    description: "SCHOOL APP FOR PAST PEPERS AND MATERIALS.",
    viewLink: "https://github.com/Reuben-Nguni?tab=repositories",
    visitLink: "https://knu-mate.vercel.app/",
  },
  {
    title: "MUSIC BLOG",
    description: " Web app for music and videos etc.",
    viewLink: "https://github.com/Reuben-Nguni?tab=repositories",
    visitLink: "https://newgernerationmusic.vercel.app/",
  },
  {
    title: "PRODUCERS BLOG",
    description: " A web app blog Sepcific for a producer.",
    viewLink: "https://github.com/Reuben-Nguni?tab=repositories",
    visitLink: "https://benthewaveleader.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }} className="py-5 text-light">
      <h1 className="text-center mb-5" style={{ color: "#38bdf8" }}>My Projects</h1>
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-wrap justify-content-center gap-4" style={{ maxWidth: "1200px" }}>
          {projectList.map((project, idx) => (
            <Card
              key={idx}
              className="bg-dark text-white shadow-lg border-secondary"
              style={{ width: "350px", height: "300px", flex: "0 0 auto" }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-3">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="outline-info"
                    href={project.viewLink}
                    className="flex-fill"
                    style={{ fontWeight: "600" }}
                  >
                    View Codes
                  </Button>
                  <Button
                    variant="outline-success"
                    href={project.visitLink}
                    className="flex-fill"
                    style={{ fontWeight: "600" }}
                  >
                    Visit
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
