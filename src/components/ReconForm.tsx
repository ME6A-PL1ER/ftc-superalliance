import React, { useState } from 'react';

const ReconForm = () => {
    const [formData, setFormData] = useState({
        teamNumber: '',
        scoutName: '',
        robotPerformance: '',
        strategy: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the backend
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reconnaissance Form</h2>
            <div>
                <label>Team Number:</label>
                <input
                    type="text"
                    name="teamNumber"
                    value={formData.teamNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Scout Name:</label>
                <input
                    type="text"
                    name="scoutName"
                    value={formData.scoutName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Robot Performance:</label>
                <textarea
                    name="robotPerformance"
                    value={formData.robotPerformance}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Strategy:</label>
                <textarea
                    name="strategy"
                    value={formData.strategy}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Notes:</label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReconForm;