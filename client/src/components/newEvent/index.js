// , useEffect was removed from the below brackets to get rid of an error, if needed put back in
import React, { useState} from "react";
import API from '../../utils/API';

export default function () {

  const [values, setValues] = useState({
    event: "",
    eventDate: "",
    description: "",
    CalendarId: 1
  })

  const handleInputChange = event => {
    const {name, value} = event.target
    setValues({
      ...values, 
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    API.createEvent(values).then(results => {
      console.log(results)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <form>
        <div className="form-group">
          <label for="newEventTitle">Event Title</label>
          <input type="text" name="event" onChange={handleInputChange} value={values.event} className="form-control" id="newEventTitle" />
        </div>
        <div className="form-group">
          <label for="newEventDate">Date</label>
          <input type="text" name="eventDate" onChange={handleInputChange} value={values.eventDate} className="form-control" id="newEventDate" />
        </div>
        <div className="form-group">
          <label for="description">Description (optional)</label>
          <p></p>
          <textarea type="text" name="description" onChange={handleInputChange} value={values.description}id="description" />
        </div>
        <button type="Create Event" onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
  );
}
