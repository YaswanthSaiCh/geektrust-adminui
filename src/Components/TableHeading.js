import React from 'react'
import '../Styles/Table.css'

const TableHeading = ({ handleCheckAll }) => {
    return (
        <thead>
            <tr>
                <th className='tableHeading'>
                    <input
                        type='checkbox'
                        name='checkAll'
                        value='tableHeading'
                        onChange={handleCheckAll}
                    />
                </th>
                <th className='tableHeading'>Name</th>
                <th className='tableHeading'>Email</th>
                <th className='tableHeading'>Role</th>
                <th className='tableHeading'>Actions</th>
            </tr>
        </thead>
    )
}

export default TableHeading