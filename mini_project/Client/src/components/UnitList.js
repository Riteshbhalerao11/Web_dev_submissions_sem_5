import React, {useEffect,useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./unitList.css";

function UnitList() {
  
  useEffect(
    () => {
      fetchItems();
    },[]);

  const [items,setItems] = useState([]);
  
  const fetchItems = async ()=> {
    try{
      const data = await fetch("/eng");
     const items = await data.json()
     console.log(items);
     setItems(items["listItems"]);
   }
    catch (err) {
      console.log(err)
    } 
    
  }  
  return (
    <ListGroup className="units">
      <ListGroup.Item id="title">
        <span>Keep Learning !</span>
      </ListGroup.Item>
      {items.map(
        (data) =>
        (<ListGroup.Item key={data.unit}> 
          <div className="content">
          <p className="utitle">{data.unit}</p>
          <p className="subtitle">{data.subtitle}</p>
        </div>
        </ListGroup.Item>)
      )}
    </ListGroup>
  );
}

export default UnitList;