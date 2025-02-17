import React from 'react';

const CompareView: React.FC = () => {
    return (
        <div className="compare-view">
            <h1>Compare Scouting Entries</h1>
            <div className="comparison-container">
                <div className="entry">
                    <h2>Entry 1</h2>
                    {/* Display Entry 1 data here */}
                </div>
                <div className="entry">
                    <h2>Entry 2</h2>
                    {/* Display Entry 2 data here */}
                </div>
            </div>
        </div>
    );
};

export default CompareView;