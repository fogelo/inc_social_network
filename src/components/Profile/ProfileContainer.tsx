import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateStatus} from '../../redux/profile-reducer';
import {useMatch} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getUserProfile(this.props.userId)
        this.props.getUserStatus(this.props.userId)
        // axios.get('https://social-network.samuraijs.com/api/1.0//profile/status/' + this.props.userId, {
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': 'e1a10142-bc6b-4db7-85fc-aa063d946841'
        //     }
        // })
        //     .then(response => {
        //         this.props.setUserStatus(response.data)
        //     })
    }

    // updateStatus(status: any) {
    //     axios.put('https://social-network.samuraijs.com/api/1.0//profile/status/', {status: status}, {
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': 'e1a10142-bc6b-4db7-85fc-aa063d946841'
    //         }
    //     })
    //         .then(response => {
    //             this.props.setUserStatus(response.data)
    //         })
    // }

    render() {
        return <AuthRedirectComponent {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const WithUrlDataContainerComponent = (props: any) => {
    const match = useMatch('/profile/:item') as any;
    if (match) {
        return (
            <ProfileContainer {...props} userId={match.params.item}/>
        )
    } else {
        const userId = 23196
        return (
            <ProfileContainer {...props} userId={userId}/>
        )
    }
}


const AuthRedirectComponent = withAuthRedirect(Profile)

export default connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus
})(WithUrlDataContainerComponent)


