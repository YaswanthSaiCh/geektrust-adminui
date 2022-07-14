/* eslint-disable */
import React, { Fragment } from "react";
import TableHeading from "./TableHeading";
import "../Styles/Table.css";
import DataRow from "./DataRow";
import EditRow from "./EditRow";

const Table = ({
    usersData,
    editUserId,
    editedData,
    onEditClick,
    onSaveClick,
    onCancelClick,
    handleEdit,
    onDeleteClick,
    handleCheckAll,
    handleCheckboxChange,
}) => {

    return (
        <form>
            <table>
                <TableHeading
                    handleCheckAll={handleCheckAll}
                />
                <tbody>
                    {usersData.map((user, idx) => (
                        <Fragment key={idx}>
                            {editUserId == user.id ? (
                                <EditRow
                                    key={user.id}
                                    user={user}
                                    editedData={editedData}
                                    onSaveClick={onSaveClick}
                                    onCancelClick={onCancelClick}
                                    handleEdit={handleEdit}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            ) : (
                                <DataRow
                                    key={user.id}
                                    user={user}
                                    onEditClick={onEditClick}
                                    onDeleteClick={onDeleteClick}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </form>
    );
};

export default Table;
