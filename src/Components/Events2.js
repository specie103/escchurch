import React, {useState, useEffect} from "react";
import eventsData from '../eventsData';
import {Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const UpcomingEvents2 = ({numberOfEvents}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsData.slice(0, numberOfEvents));
    }, [numberOfEvents]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = {
          day: 'numeric',
          timeZone: 'Africa/Lagos', // Set the time zone to Nigeria (Africa/Lagos)
      };
      return date.toLocaleDateString('en-US', options);
  };
  
  const formatDate2 = (dateString) => {
      const date = new Date(dateString);
      const options = {
          month: 'short',
          timeZone: 'Africa/Lagos', // Set the time zone to Nigeria (Africa/Lagos)
      };
      return date.toLocaleDateString('en-US', options);
  };

    const renderEventCards = () => {
        return events.map((event) => {
          const eventDateTime = new Date(event.date).getTime(); // Get the timestamp of the event's date and time
          const now = new Date().getTime(); // Get the current timestamp
          const isEventOver = eventDateTime < now; // Check if the event's date and time have elapsed
            return (
                <div key={
                        event.id
                    }
                    className="event-card">

                    <div className="flex-item1">
                        <p className="event-date text-center">
                            <span className="day">{
                            formatDate(event.date)
                        }</span> <br></br> <span className="month">{
                          formatDate2(event.date)
                      }</span></p>
                    </div>
                    <div className="flex-item2"> 
                          <Image src={
                                event.image
                            }
                            alt={
                                event.title
                            }
                            className="event-image" />
                    </div>

                    <div className="flex-item3">
                        <h3 className="event-title d">
                            {
                            event.title
                        }</h3>
                        <p className="event-description">
                            {
                            event.description
                        }</p>
                        <h6 className="bluec">
                        {
                            event.time
                        }
                        </h6>
                    </div>
                    <div className="flex-item4 "> {
                        isEventOver ? (
                            <div className="event-timer bg-white">
                                <span className="timer-value text-danger fw-bold">This Event is Over</span>
                            </div>
                        ) : (
                            <div className="event-timer bg-light">
                                <div className="timer-item">
                                    <span className="timer-value">
                                        {
                                        event.days
                                    }</span>
                                    <span className="timer-label">Days</span>
                                </div>
                                <div className="timer-item">
                                    <span className="timer-value">
                                        {
                                        event.hours
                                    }</span>
                                    <span className="timer-label">Hours</span>
                                </div>
                                <div className="timer-item">
                                    <span className="timer-value">
                                        {
                                        event.minutes
                                    }</span>
                                    <span className="timer-label">Minutes</span>
                                </div>
                                <div className="timer-item">
                                    <span className="timer-value">
                                        {
                                        event.seconds
                                    }</span>
                                    <span className="timer-label">Seconds</span>
                                </div>
                            </div>
                        )
                    } </div>
                </div>
            );
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setEvents((prevEvents) => {
                return prevEvents.map((event) => {
                    const eventDate = new Date(event.date).getTime();
                    const now = new Date().getTime();
                    const timeRemaining = eventDate - now;
                    event.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    event.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    event.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                    event.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                    return event;
                });
            });
        }, 1000);

        return() => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container className="py-5 bg-light " fluid>
            <Container>
            <div className="hone bluec my-3">
                <h1>Upcoming Events</h1>
            </div>
            <Row className="p-1 py-3">
                {
                renderEventCards()
            } </Row>
            </Container>
        </Container>
    );
};

export default UpcomingEvents2;
