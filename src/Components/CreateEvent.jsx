
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CreateEvent({ onEventCreated }) {
    const [values, setValues] = useState({
        title: '',
        description: '',
        location: '',
        startDate: '',
        endDate: '',
        image: null,
        duration: '',
    });

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setValues({ ...values, image: e.target.files[0] });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Assuming that the event object structure matches your data
        const newEvent = { ...values, id: Date.now() };
        onEventCreated(newEvent);
        // Clear form values
        setValues({
            title: '',
            description: '',
            location: '',
            startDate: '',
            endDate: '',
            image: null,
            duration: '',
        });
    };

    return (
        <div className="create-event-container">
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="event-form-card">
                    <div className="event-info">
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={(e) => setValues({ ...values, title: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={values.location}
                                onChange={(e) => setValues({ ...values, location: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                type="datetime-local"
                                name="startDate"
                                value={values.startDate}
                                onChange={(e) => setValues({ ...values, startDate: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDate">End Date:</label>
                            <input
                                type="datetime-local"
                                name="endDate"
                                value={values.endDate}
                                onChange={(e) => setValues({ ...values, endDate: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <input
                                type="text"
                                name="duration"
                                value={values.duration}
                                onChange={(e) => setValues({ ...values, duration: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="event-poster">
                        <div className="block">

                            {values.image && <img src={URL.createObjectURL(values.image)} alt="Event Poster" />}
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>



                <button className="submit" type="submit">
                    Create Event
                </button>
                <Link to="/" className="back-link">
                    Back
                </Link>
            </form>
        </div>
    );
}

export default CreateEvent;
