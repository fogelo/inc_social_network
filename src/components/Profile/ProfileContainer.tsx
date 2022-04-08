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
    }

    render() {
        return <AuthRedirectComponent {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

const WithUrlDataContainerComponent = (props: any) => {
    const match = useMatch('/profile/:item') as any;
    if (match) {
        return (
            <ProfileContainer {...props} userId={match.params.item}/>
        )
    } else {
        return (
            <ProfileContainer {...props} userId={props.authorizedUserId}/>
        )
    }
}


const AuthRedirectComponent = withAuthRedirect(Profile)

export default connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus
})(WithUrlDataContainerComponent)


