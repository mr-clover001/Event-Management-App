
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
                    <div className='create-event-form'>
                        <CreateEvent onEventCreated={handleEventCreated} />
                    </div>

                    <div className="event-card-container row">
                        {data.map((d) => (
                            <div key={d.id} className="event-card">

                                <div className="img">
                                    <img src={d.image.name} alt={`Event ${d.id}`} />
                                </div>
                                <div className="event-card-body">
                                    <h2>ID: {d.id}</h2>
                                    <h2>Title: {d.title}</h2>
                                    <h2>Description: {d.description}</h2>
                                    <h2>img: {d.image.name}</h2>
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


