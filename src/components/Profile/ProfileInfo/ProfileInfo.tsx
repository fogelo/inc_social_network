import React from 'react';
import {Preloader} from '../../common/Preloader';
import photo from '../../../img/user.png'

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>name: {props.profile.fullName}</div>
            <ProfileStatus/>
            <div>
                <img src={props.profile.photos.small ? props.profile.photos.small : photo}
                     alt="1"
                     style={{width: '100px'}}/>
            </div>
            <div>about me: {props.profile.aboutMe}</div>
        </div>
    )
}


class ProfileStatus extends React.Component<any> {
    state = {
        status: 'hello',
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    onChangeHandler(e: any) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input type="text"
                               onBlur={this.deActivateEditMode.bind(this)}
                               autoFocus
                               onChange={this.onChangeHandler.bind(this)}
                               value={this.state.status}/>
                    </div>
                    : <div onDoubleClick={this.activateEditMode.bind(this)}><span>{this.state.status}</span></div>}


            </div>
        )
    }
}