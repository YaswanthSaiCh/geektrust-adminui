import React from "react";
import "../Styles/DeleteSelected.css";
const DeleteSelected = ({ handleDeleteSelected }) => {
    return (
        <button className="deleteSelected" onClick={() => handleDeleteSelected()}>
            Delete Selected
        </button>
    );
};

export default DeleteSelected;
