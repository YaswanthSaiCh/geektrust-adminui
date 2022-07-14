import React from 'react'
import { FaRegEdit, FaTrash } from 'react-icons/fa'

const DataRow = ({ user, selected, onEditClick, onDeleteClick, handleCheckboxChange }) => {


    return (
        <tr key={user.id}>
            <td>
                <input
                    type='checkbox'
                    value={user.id}
                    checked={user.isChecked || selected}
                    onChange={(event) => handleCheckboxChange(event)}
                />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <div>
                    <FaRegEdit
                        style={{ cursor: 'pointer', marginRight: '2rem' }}
                        onClick={(event) => onEditClick(event, user)}
                    />
                    <FaTrash
                        color='red' style={{ cursor: 'pointer' }}
                        onClick={() => onDeleteClick(user.id)}
                    />
                </div>
            </td>

        </tr>
    )
}

export default DataRow