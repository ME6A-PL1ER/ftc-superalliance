import React, { useState } from 'react';

const TrackerForm: React.FC = () => {
    const [formData, setFormData] = useState({
        teamNumber: '',
        matchNumber: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Submit form data to the database
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="teamNumber">Team Number:</label>
                <input
                    type="text"
                    id="teamNumber"
                    name="teamNumber"
                    value={formData.teamNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="matchNumber">Match Number:</label>
                <input
                    type="text"
                    id="matchNumber"
                    name="matchNumber"
                    value={formData.matchNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="notes">Notes:</label>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TrackerForm;