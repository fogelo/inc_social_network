import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchedAC,
    unfollowAC
} from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import {Users} from './Users';
import preloader from '../../img/preloader.gif'
import {Preloader} from '../common/Preloader';


class UsersContainer extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetched(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.usersCount}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.toggleIsFetched(false)
                })
        }
    }

    onPageChanged = (currentPage: any) => {
        this.props.toggleIsFetched(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
            &count=${this.props.usersCount}`)
            .then(response => {
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
        isFetched: state.usersPage.isFetched
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: any) => {
            dispatch(followAC(id))
        },
        unfollow: (id: any) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: any) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUserCount: any) => {
            dispatch(setTotalUsersCountAC(totalUserCount))
        },
        toggleIsFetched: (isFetched: any) => {
            dispatch(toggleIsFetchedAC(isFetched))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)