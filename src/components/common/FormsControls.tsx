import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    return (
        <div>
            <textarea className={meta.error === true && meta.touched === true ? s.error : ''} {...input} {...props}/>
            <div>{meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}</div>
        </div>
    )
}
export const Input = ({input, meta, ...props}: any) => {
    return (
        <div>
            <input className={meta.error === true && meta.touched === true ? s.error : ''} {...input} {...props}/>
            <div>{meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}</div>
        </div>
    )
}