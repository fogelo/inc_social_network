import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import photo from '../../img/user.png';
import axios from 'axios';
import React from 'react';
import s from './UsersContainer.module.css'

class Users extends React.Component<any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.usersCount}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (currentPage: any) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
            &count=${this.props.usersCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersCount)
        let pagesArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        return (
            <div>
                {pagesArray.map((e, i) => <span key={i}
                                                className={e === this.props.currentPage ? s.currentPage : ''}
                                                onClick={() => this.onPageChanged(e)}>
                    {e}
                </span>)}
                {this.props.users.map((u: any) => <div key={u.id} style={{marginBottom: '20px'}}>
                    <div>
                        <img style={{width: '100px'}} src={u.photos.small !== null ? u.photos.small : photo}
                             alt="avatar"/>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>follow</button>}
                    </div>
                    <div>id: {u.id}</div>
                    <div>name: {u.name}</div>
                    <div>status: {u.status}</div>
                    {/*<div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}

                </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)