
export const getUsers = (state: any) => {
    return state.usersPage.users
}
export const getTotalUsersCount = (state: any) => {
    return state.usersPage.totalUsersCount
}
export const getUsersCount = (state: any) => {
    return state.usersPage.usersCount
}
export const getCurrentPage = (state: any) => {
    return state.usersPage.currentPage
}
export const getIsFetched = (state: any) => {
    return state.usersPage.isFetched
}
export const getFollowingInProgress = (state: any) => {
    return state.usersPage.followingInProgress
}