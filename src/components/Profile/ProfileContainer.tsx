import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {useMatch} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getUserProfile(this.props.userId)
    }

    render() {
        return <AuthRedirectComponent {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
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
    getUserProfile
})(WithUrlDataContainerComponent)


