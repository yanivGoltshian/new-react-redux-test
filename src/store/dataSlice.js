import { createSlice } from '@reduxjs/toolkit'
import { ITEMS } from '../components/data';

export const dataSlice = createSlice({
    name: 'counter',
    initialState: {
        users: ITEMS,
        columns: [
            { key: 'actions', label: 'אפשרויות' },
            { key: 'totalHours', label: 'סך כל שעות' },
            { key: 'Hours', label: 'שעות' },
            { key: 'manualHours', label: 'שעות ידניות' },
            { key: 'ExtraHours', label: 'שעות חריגות' },
            { key: 'workerName', label: 'שם העובד', classname: 'td-worker-name' },
            { key: 'id', label: 'מספר ת.ז', classname: 'td-id' },
        ]
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setColumns: (state, action) => {
            state.columns = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUsers, setColumns } = dataSlice.actions

export default dataSlice.reducer
