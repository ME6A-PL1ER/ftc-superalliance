import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialElements = [
    { id: '1', content: 'Text Field' },
    { id: '2', content: 'Checkbox' },
    { id: '3', content: 'Radio Button' },
    { id: '4', content: 'Dropdown' },
];

const DragDrop = () => {
    const [elements, setElements] = useState(initialElements);
    const [formPreview, setFormPreview] = useState([]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newElements = Array.from(elements);
        const [removed] = newElements.splice(result.source.index, 1);
        newElements.splice(result.destination.index, 0, removed);
        setElements(newElements);
    };

    const handleAddToPreview = (element) => {
        setFormPreview([...formPreview, element]);
    };

    return (
        <div className="drag-drop-container">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {elements.map((element, index) => (
                                <Draggable key={element.id} draggableId={element.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={() => handleAddToPreview(element)}
                                            className="draggable-element"
                                        >
                                            {element.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="form-preview">
                <h3>Form Preview</h3>
                {formPreview.map((item, index) => (
                    <div key={index} className="preview-item">
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragDrop;