import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../services/api';

const TeamList: React.FC<{ onSelect: (teamId: string) => void }> = ({ onSelect }) => {
    const [teams, setTeams] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTeams = async () => {
            try {
                const data = await fetchTeams();
                setTeams(data);
            } catch (err) {
                setError('Failed to load teams');
            } finally {
                setLoading(false);
            }
        };

        loadTeams();
    }, []);

    if (loading) {
        return <div>Loading teams...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Team List</h2>
            <ul>
                {teams.map(team => (
                    <li key={team.id} onClick={() => onSelect(team.id)}>
                        {team.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;