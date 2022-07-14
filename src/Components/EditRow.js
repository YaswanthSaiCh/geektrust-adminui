import React from "react";
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";
const EditRow = ({
    user,
    editedData,
    handleEdit,
    onSaveClick,
    onCancelClick,
    handleCheckboxChange,
}) => {
    return (
        <tr key={user.id}>
            <td>
                <input
                    type="checkbox"
                    name="edit"
                    value={user.id}
                    checked={user.isChecked}
                    onChange={(event) => handleCheckboxChange(event)}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleEdit}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="email"
                    value={editedData.email}
                    onChange={handleEdit}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="role"
                    value={editedData.role}
                    onChange={handleEdit}
                />
            </td>
            <td>
                <div>
                    <FaRegCheckCircle
                        type="submit"
                        style={{ cursor: "pointer", marginRight: "2rem", color: "#3DBE29" }}
                        onClick={(event) => onSaveClick(event, user.id)}
                    />
                    <FaTimes
                        color="red"
                        style={{ cursor: "pointer" }}
                        onClick={() => onCancelClick()}
                    />
                </div>
            </td>
        </tr>
    );
};

export default EditRow;
