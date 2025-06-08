import React from "react";
import { Card, Button } from "react-bootstrap";

const projectList = [
  {
    title: "To-Do App",
    description: "A MERN stack app with CRUD functionality and responsive design.",
    link: "/todo",
  },
  {
    title: "Network Monitor",
    description: "Tool to monitor network traffic and status with real-time updates.",
    link: "/network",
  },
  {
    title: "CCTV Dashboard",
    description: "Interface to view and manage CCTV feeds and alerts.",
    link: "/cctv",
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
                <Button
                  variant="outline-info"
                  href={project.link}
                  className="mt-3 align-self-start"
                  style={{ fontWeight: "600" }}
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
