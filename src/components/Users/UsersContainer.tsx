import {connect} from 'react-redux';
import {
    follow, getUsers,
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
import {Profile} from '../Profile/Profile';
import {compose} from 'redux';


class UsersContainer extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.usersCount)
        }
    }

    onPageChanged = (currentPage: any) => {
        this.props.getUsers(currentPage, this.props.usersCount)
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
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
        followingInProgress: state.usersPage.followingInProgress
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
    getUsers
}), withAuthRedirect)(UsersContainer)