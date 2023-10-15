import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SideBar from "./CustomSideBar";
import { useNavigate } from "react-router-dom";

export default function QuizSelect() {
  const navigate = useNavigate();

  const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar selected={"quiz"} />
      <div style={{ flex: 1, padding: "10px" }}>
        <ListGroup style={{ height: "200px" }}>
          <ListGroup.Item>
            <Card>
              <Card.Header>Quiz 1</Card.Header>
              <Card.Body>
                <Card.Title>Basics of French</Card.Title>
                <Card.Text>
                  Learn the fundamentals of the French language.
                </Card.Text>
                <Button onClick={() => handleQuizClick(1)} variant="primary">
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card>
              <Card.Header>Quiz 2</Card.Header>
              <Card.Body>
                <Card.Title>Intermediate French</Card.Title>
                <Card.Text>
                  Test your knowledge of intermediate-level French.
                </Card.Text>
                <Button onClick={() => handleQuizClick(2)} variant="primary">
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
