import React from "react";
import { arrayMove, SortableContainer, SortableElement, } from "react-sortable-hoc";
import { useDispatch, useSelector } from 'react-redux';
import { setColumns, setUsers } from '../store/dataSlice';
import { ReactComponent as Icon } from '../logo.svg';

import "./App.css";

const SortableTableRow = SortableElement(({ value, columns }) => (
    <tr>
        {columns.map(column => (
            <td className={column.classname}>
                {column.key === 'actions' ? <div>
                    <Icon />
                    <Icon />
                </div> : value[column.key]}
            </td>
        ))}
    </tr>
));

const SortableTableBody = SortableContainer(({ columns, items }) => {
    return (
        <tbody>
            {items.map((value, index) => (
                <SortableTableRow key={value.id} index={index} value={value} columns={columns} />
            ))}
        </tbody>
    );
});

const SortableHeader = SortableElement(({ value }) => (
    <th>{value.label}</th>
));

const SortableTableHead = SortableContainer(({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <SortableHeader key={column.key} index={index} value={column} />
                ))}
            </tr>
        </thead>
    );
});

function SortableComponent() {
    const users = useSelector(state => state.data.users);
    const columns = useSelector(state => state.data.columns);
    const dispatch = useDispatch()

    const onRowSort = ({ oldIndex, newIndex }) => {
        dispatch(setUsers(arrayMove(users, oldIndex, newIndex)));
    };

    const onColumnSort = ({ oldIndex, newIndex }) => {
        dispatch(setColumns(arrayMove(columns, oldIndex, newIndex)));
    };

    return (
        <div className="table-container">
            <table>
                <SortableTableHead columns={columns} onSortEnd={onColumnSort} axis="x" />
                <SortableTableBody columns={columns} items={users} onSortEnd={onRowSort} />
            </table>
        </div>
    );
}

export default SortableComponent;
