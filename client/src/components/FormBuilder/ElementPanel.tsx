import React from 'react';

const ElementPanel: React.FC = () => {
    const elements = [
        { id: 'text', label: 'Text Field' },
        { id: 'number', label: 'Number Field' },
        { id: 'checkbox', label: 'Checkbox' },
        { id: 'radio', label: 'Radio Button' },
        { id: 'dropdown', label: 'Dropdown' },
    ];

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, elementId: string) => {
        event.dataTransfer.setData('text/plain', elementId);
    };

    return (
        <div className="element-panel">
            <h2>Draggable Elements</h2>
            <div className="elements">
                {elements.map(element => (
                    <div
                        key={element.id}
                        draggable
                        onDragStart={(event) => handleDragStart(event, element.id)}
                        className="draggable-element"
                    >
                        {element.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElementPanel;