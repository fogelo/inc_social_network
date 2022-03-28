import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import photo from '../../img/user.png';
import axios from 'axios';
import React from 'react';

class Users extends React.Component<any> {
    constructor(props: any) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>
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
        users: state.usersPage.users
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)