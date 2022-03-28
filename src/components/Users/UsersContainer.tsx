import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {v1} from 'uuid';
import photo from '../../img/user.png';

const Users = (props: any) => {

    return (
        <div>
            <button onClick={()=>{
                if (props.users.length === 0) {
                    props.setUsers([
                        {
                            id: v1(),
                            fullName: 'Anton',
                            status: 'i am a boss1',
                            location: {city: 'Moscow', country: 'Russia'},
                            followed: false,
                            photoUrl: photo
                        },
                        {
                            id: v1(),
                            fullName: 'Ivan',
                            status: 'i am a boss2',
                            location: {city: 'Kiev', country: 'Ukraine'},
                            followed: false,
                            photoUrl: photo
                        },
                        {
                            id: v1(),
                            fullName: 'Artem',
                            status: 'i am a boss3',
                            location: {city: 'Minsk', country: 'Belarus'},
                            followed: false,
                            photoUrl: photo
                        },
                    ])
                }
            }}>set users</button>
            {props.users.map((u: any) => <div style={{marginBottom: '20px'}}>
                <div><img style={{width: '100px'}} src={u.photoUrl} alt="1"/></div>

                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>follow</button>}
                </div>

                <div>{u.fullName}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>

            </div>)}
        </div>
    )
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