import React, { useState } from 'react';

const FormEditor = () => {
    const [elements, setElements] = useState([]);
    const [preview, setPreview] = useState([]);

    const handleDragStart = (e, element) => {
        e.dataTransfer.setData('element', JSON.stringify(element));
    };

    const handleDrop = (e) => {
        const element = JSON.parse(e.dataTransfer.getData('element'));
        setPreview([...preview, element]);
    };

    const handleEditElement = (index, newTitle) => {
        const updatedPreview = [...preview];
        updatedPreview[index].title = newTitle;
        setPreview(updatedPreview);
    };

    return (
        <div className="form-editor">
            <div className="catalog">
                <h3>Catalog</h3>
                <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, { title: 'New Element' })}
                    className="draggable-element"
                >
                    New Element
                </div>
                {/* Add more draggable elements as needed */}
            </div>
            <div className="preview" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                <h3>Preview</h3>
                {preview.map((element, index) => (
                    <div key={index} className="preview-element">
                        <input
                            type="text"
                            value={element.title}
                            onChange={(e) => handleEditElement(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormEditor;