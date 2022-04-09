import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<any> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {
    getAuthUserData, logout
})(HeaderContainer)