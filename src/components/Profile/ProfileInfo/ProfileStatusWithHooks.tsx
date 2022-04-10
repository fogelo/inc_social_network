import React, {useEffect, useState} from 'react';

export const ProfileStatusWithHooks = (props: any) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)




    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    console.log(status)
    console.log(props)

    return (
        <div>
            {editMode
                ? <div>
                    <input type="text"
                           autoFocus
                           value={status}
                           onBlur={deActivateEditMode}
                           onChange={onChangeStatus}/>
                </div>
                : <div onDoubleClick={activateEditMode}>
                    <span>
                        {status}

                    </span>
                </div>}


        </div>
    )

}