import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./unitList.css";
import { useAuth } from "../contexts/AuthContext";

function UnitList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const data = await fetch("/eng");
      const items = await data.json();
      console.log(items, userId);
      setItems(items[userId]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListGroup className="units">
      <ListGroup.Item id="title">
        <span>Keep Learning !</span>
      </ListGroup.Item>
      {items ? (
        items.map((data) => {
          return (
            <ListGroup.Item key={data.unit}>
              <div className="content">
                <span className="utitle">{data.unit}</span>
                <span style={{ position: "absolute", right: 20 }}>
                  {data.percentageCompletion} %
                </span>
                <p className="subtitle">{data.subtitle}</p>
              </div>
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroup.Item>
          <span>No data available. Enroll in a course !</span>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default UnitList;
