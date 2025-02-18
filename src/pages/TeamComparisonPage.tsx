import React, { useState, useEffect } from 'react';
import TeamComparison from '../components/TeamComparison';
import TeamList from '../components/TeamList';
import { fetchTeams } from '../services/api';

const TeamComparisonPage: React.FC = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam1, setSelectedTeam1] = useState(null);
    const [selectedTeam2, setSelectedTeam2] = useState(null);

    useEffect(() => {
        const loadTeams = async () => {
            const teamsData = await fetchTeams();
            setTeams(teamsData);
        };
        loadTeams();
    }, []);

    const handleTeamSelect = (team, side) => {
        if (side === 'left') {
            setSelectedTeam1(team);
        } else {
            setSelectedTeam2(team);
        }
    };

    return (
        <div>
            <h1>Team Comparison</h1>
            <TeamList teams={teams} onSelect={(team) => handleTeamSelect(team, 'left')} />
            <TeamComparison team1={selectedTeam1} team2={selectedTeam2} />
            <TeamList teams={teams} onSelect={(team) => handleTeamSelect(team, 'right')} />
        </div>
    );
};

export default TeamComparisonPage;