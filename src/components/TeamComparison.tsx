import React, { useState, useEffect } from 'react';
import { fetchTeams, fetchTeamStats } from '../services/api';

const TeamComparison: React.FC = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam1, setSelectedTeam1] = useState(null);
    const [selectedTeam2, setSelectedTeam2] = useState(null);
    const [team1Stats, setTeam1Stats] = useState(null);
    const [team2Stats, setTeam2Stats] = useState(null);

    useEffect(() => {
        const loadTeams = async () => {
            const teamsData = await fetchTeams();
            setTeams(teamsData);
        };
        loadTeams();
    }, []);

    const handleTeamSelect = async (teamId: string, teamNumber: number) => {
        const stats = await fetchTeamStats(teamId);
        if (teamNumber === 1) {
            setSelectedTeam1(teamId);
            setTeam1Stats(stats);
        } else {
            setSelectedTeam2(teamId);
            setTeam2Stats(stats);
        }
    };

    return (
        <div className="team-comparison">
            <h1>Team Comparison</h1>
            <div className="team-selection">
                <div>
                    <h2>Team 1</h2>
                    <select onChange={(e) => handleTeamSelect(e.target.value, 1)}>
                        <option value="">Select a team</option>
                        {teams.map(team => (
                            <option key={team.id} value={team.id}>{team.name}</option>
                        ))}
                    </select>
                    {team1Stats && <div>{JSON.stringify(team1Stats)}</div>}
                </div>
                <div>
                    <h2>Team 2</h2>
                    <select onChange={(e) => handleTeamSelect(e.target.value, 2)}>
                        <option value="">Select a team</option>
                        {teams.map(team => (
                            <option key={team.id} value={team.id}>{team.name}</option>
                        ))}
                    </select>
                    {team2Stats && <div>{JSON.stringify(team2Stats)}</div>}
                </div>
            </div>
        </div>
    );
};

export default TeamComparison;