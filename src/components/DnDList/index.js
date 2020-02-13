import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Loader from "../Loader";

import "./index.scss";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const DndList = ({ points, setPoints }) => {
    const onDragEnd = result => {
        if (!result.destination) return;
        const items = reorder(points, result.source.index, result.destination.index);
        setPoints(items);
    };

    const deleteItem = e => {
        const prev = [...points];
        setPoints(prev.splice(e.target.dataset.index, 1) && prev);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={!snapshot.isDraggingOver ? "drag-list" : "drag-list active"}
                    >
                        {points.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        className="drag-item-wrapper padding-5"
                                        style={provided.draggableProps.style}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div className={!snapshot.isDragging ? "drag-item" : "drag-item active"}>
                                            <div className="dnd-icon"></div>
                                            {item.address}
                                            <div
                                                className="delete-item-button"
                                                data-index={index}
                                                onClick={deleteItem}
                                            ></div>
                                            {item.load && <Loader />}
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DndList;
