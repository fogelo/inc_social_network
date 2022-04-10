import {connect} from 'react-redux';
import {
    follow, requestUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetched,
    unfollow
} from '../../redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetched,
    getTotalUsersCount,
    getUsers,
    getUsersCount
} from '../../redux/users-selectors';


class UsersContainer extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.requestUsers(this.props.currentPage, this.props.usersCount)
        }
    }

    onPageChanged = (currentPage: any) => {
        this.props.requestUsers(currentPage, this.props.usersCount)
        this.props.setCurrentPage(currentPage)
    }

    render() {
        return <>
            {this.props.isFetched ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   usersCount={this.props.usersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetched: getIsFetched(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (id: any) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id: any) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: any) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUserCount: any) => {
//             dispatch(setTotalUsersCountAC(totalUserCount))
//         },
//         toggleIsFetched: (isFetched: any) => {
//             dispatch(toggleIsFetchedAC(isFetched))
//         }
//
//     }
// }


const AuthRedirectComponent = withAuthRedirect(Users)

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     toggleIsFetched,
//     toggleFollowingProgress,
//     getUsers
// })(UsersContainer)

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetched,
    toggleFollowingProgress,
    requestUsers
}), withAuthRedirect)(UsersContainer)