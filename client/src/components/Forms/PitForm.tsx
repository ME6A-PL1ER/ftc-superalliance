import React from 'react';

const PitForm: React.FC = () => {
    const [formData, setFormData] = React.useState({
        teamNumber: '',
        robotName: '',
        comments: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit formData to the database
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Pit Scouting Form</h2>
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
                <label htmlFor="robotName">Robot Name:</label>
                <input
                    type="text"
                    id="robotName"
                    name="robotName"
                    value={formData.robotName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="comments">Comments:</label>
                <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PitForm;