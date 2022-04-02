import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetched,
    unfollow
} from '../../redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetched(true)
            usersAPI.getUsers(this.props.currentPage, this.props.usersCount).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetched(false)
            })
        }
    }

    onPageChanged = (currentPage: any) => {
        this.props.toggleIsFetched(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.usersCount).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetched(false)
        })
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetched,
    toggleFollowingProgress
})(UsersContainer)
