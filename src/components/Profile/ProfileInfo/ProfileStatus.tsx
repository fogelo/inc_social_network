import React from 'react';

export class ProfileStatus extends React.Component<any> {

    state = {
        status: this.props.status,
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
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler(e: any) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // if(prevState.status !== this.)
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
                    : <div onDoubleClick={this.activateEditMode.bind(this)}>
                        <span>
                            {this.state.status ? this.state.status : '------'}
                        </span>
                    </div>}
            </div>
        )
    }
}