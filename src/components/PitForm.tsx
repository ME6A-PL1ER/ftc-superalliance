import React, { useState } from 'react';

const PitForm: React.FC = () => {
    const [teamName, setTeamName] = useState('');
    const [robotSpecs, setRobotSpecs] = useState('');
    const [strategy, setStrategy] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!teamName) newErrors.teamName = 'Team name is required';
        if (!robotSpecs) newErrors.robotSpecs = 'Robot specifications are required';
        if (!strategy) newErrors.strategy = 'Strategy is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form data to the backend
            console.log({ teamName, robotSpecs, strategy });
            // Reset form fields
            setTeamName('');
            setRobotSpecs('');
            setStrategy('');
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Team Name:</label>
                <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                {errors.teamName && <span>{errors.teamName}</span>}
            </div>
            <div>
                <label>Robot Specifications:</label>
                <textarea
                    value={robotSpecs}
                    onChange={(e) => setRobotSpecs(e.target.value)}
                />
                {errors.robotSpecs && <span>{errors.robotSpecs}</span>}
            </div>
            <div>
                <label>Strategy:</label>
                <textarea
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                />
                {errors.strategy && <span>{errors.strategy}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PitForm;