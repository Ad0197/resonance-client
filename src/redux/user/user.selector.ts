import { createSelector } from "reselect";
import { RootType } from "../root.reducer";

const selectUserFromState = (state: RootType) => state.user;

export const getUserFromState = createSelector(
    [selectUserFromState],
    (stateUser) => stateUser.user,
)

export const getAccessTokenFromState = createSelector(
    [selectUserFromState],
    (stateUser) => stateUser.accessToken,
)

export const getShowModalFromState = createSelector(
    [selectUserFromState],
    (stateUser) => stateUser.showModalLogin
)

export const getCloseModalFromState = createSelector(
    [selectUserFromState],
    stateUser => stateUser.closeModalLogin
)