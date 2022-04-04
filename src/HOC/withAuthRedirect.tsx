import {Navigate} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state: any) => {
    return {
        login: state.auth.login
    }
}

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if (!props.login) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }


    return connect(mapStateToProps)(RedirectComponent)
}


// export const withAuthRedirect = (Component: any) => {
//     class AuthRedirectComponent extends React.Component<any> {
//         render() {
//             if (!this.props.login) return <Navigate to={'/login'}/>
//             return <Component {...this.props}/>
//         }
//     }
//     return AuthRedirectComponent
// }