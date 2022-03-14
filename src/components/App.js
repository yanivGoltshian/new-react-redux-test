import React from 'react';
import { arrayMove, } from 'react-sortable-hoc';
import { useDispatch, useSelector } from 'react-redux';
import { setColumns, setUsers } from '../store/dataSlice';
import { SortableTableBody, SortableTableHead } from './sortables';

import './App.css';

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
