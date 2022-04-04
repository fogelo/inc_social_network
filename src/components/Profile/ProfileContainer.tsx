import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {useMatch} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getUserProfile(this.props.userId)
    }

    render() {
        if (!this.props.login) return <Navigate to={'/login'}/>
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    login: state.auth.login
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

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent)


