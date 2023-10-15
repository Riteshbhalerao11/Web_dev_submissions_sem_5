import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./unitList.css";
import { useAuth } from "../contexts/AuthContext";
import SideBar from "./CustomSideBar";

export default function Scores() {
  useEffect(() => {
    fetchItems();
  }, []);

  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    console.log("RUN");
    try {
      const data = await fetch(`/getscores/${userId}`);
      const items = await data.json();
      console.log(items, userId);
      setItems(items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar selected="scores" />
      <ListGroup className="units">
        <ListGroup.Item id="title">
          <span>Quiz Scores</span>
        </ListGroup.Item>
        {items ? (
          Object.entries(items).map(([qkey, data]) => {
            console.log(data);
            return (
              <ListGroup.Item key={qkey}>
                <div className="content">
                  <span className="utitle">{data[0].topic}</span>
                  <p className="subtitle">
                    {data[0].score} /{" "}
                    {(data[0].correctAnswers + data[0].wrongAnswers) * 5}
                  </p>
                </div>
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item>
            <span>Nothing to show. Start Learning !</span>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}
