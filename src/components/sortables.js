import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { FaChartBar, FaEllipsisV } from 'react-icons/fa';
import Status from './status/status.component';

const getCellContent = (column, cell) => {
    if (column.key === 'actions') {
        return (
            <div className="icons-container">
                <FaEllipsisV />
                <div className="separator" />
                <FaChartBar />
            </div>
        );
    }
    if (column.key === 'workerName') {
        return (
            <div>
                {cell[column.key]}
                <Status status={cell.status} />
            </div>
        )
    }
    return cell[column.key];
}

const SortableTableRow = SortableElement(({ value, columns }) => (
    <tr>
        {columns.map(column => <td key={column.key} className={column.classname}>{getCellContent(column, value)}</td>)}
    </tr>
));

export const SortableTableBody = SortableContainer(({ columns, items }) => {
    return (
        <tbody>
            {items.map((value, index) => (
                <SortableTableRow key={value._id} index={index} value={value} columns={columns} />
            ))}
        </tbody>
    );
});

const SortableHeader = SortableElement(({ value }) => <th>{value.label}</th>);

export const SortableTableHead = SortableContainer(({ columns }) => {
    return (
        <thead>
            <tr>{columns.map((column, index) => <SortableHeader key={column.key} index={index} value={column} />)}</tr>
        </thead>
    );
});
