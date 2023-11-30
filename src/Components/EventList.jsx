
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import CreateEvent from './CreateEvent';

function EventList() {
    const [data, setData] = useState([]);

    const handleEventCreated = (newEvent) => {
        setData([...data, newEvent]);

    };
    console.log(data);
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="container-head row">
                    <h1>Events</h1>
                </div>

                <div className="event-handler">
                    <div className='create-event-form-comp'>
                        <CreateEvent onEventCreated={handleEventCreated} />
                    </div>



                    <div className="event-card-container">
                        {data && data.map((d) => (


                            <div className="event-card-container">
                                <div className="event-card-body">
                                    <div className="Event-details col">
                                        <div className="details row">
                                            <div className="col">Title:</div>
                                            <div className="col">
                                                <p>{d.title}</p>
                                            </div>
                                        </div>
                                        <div className="details row">
                                            <div className="col">Start Date:</div>
                                            <div className="col">
                                                <p>{d.startDate}</p>
                                            </div>
                                        </div>
                                        <div className="details row">
                                            <div className="col">End Date:</div>
                                            <div className="col">
                                                <p>{d.endDate}</p>
                                            </div>
                                        </div>
                                        <div className="details row">
                                            <div className="col">Duration:</div>
                                            <div className="col">
                                                <p>{d.duration} Days</p>
                                            </div>
                                        </div>
                                        <div className="details row">
                                            <div className="col">Location</div>
                                            <div className="col">
                                                <p>{d.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="event-poster col">
                                        <img src={d.image.name} alt={d.title} />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default EventList;


