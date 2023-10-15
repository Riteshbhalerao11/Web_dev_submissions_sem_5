import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TeacherForm() {
  const contentRef = useRef();
  const dateRef = useRef();
  //   const [announcement, setAnnouncement] = useState();

  function StoreData(announcement) {
    fetch("/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(announcement),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function HandleSubmit(e) {
    e.preventDefault();
    const data = {
      announcement: contentRef.current.value,
      date: dateRef.current.value,
    };
    if (data) {
      StoreData(data);
    }
  }

  //   useEffect(() => StoreData(), []);

  return (
    <div style={{ marginLeft: "10rem", marginTop: "5rem" }}>
      <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" id="content">
          <Form.Label>Announcement</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter announcement"
            ref={contentRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" id="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" ref={dateRef} required />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
