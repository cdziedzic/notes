import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        isAuthenticated: false,
        username: '',
        uid: '',
        isModerator: false,
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action) => {
            return {
                value: {
                    isAuthenticated: true,
                    username: action.payload,
                    uid: '2354243562gfdagdaf',
                    isModerator: false,
                }
            }
        }
    }})