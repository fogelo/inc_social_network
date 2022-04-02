import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {useMatch} from 'react-router-dom';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = (props: any) => {
    const match = useMatch('/profile/:item') as any;
    return (
        <ProfileContainer {...props} userId={match.params.item}/>
    )
}

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)


