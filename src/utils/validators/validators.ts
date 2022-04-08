export const requiredField = (value: any) => {
    return value ? undefined : 'required field'
}

export const maxLength = (length: any) => (value: any) => {
    return value.length < length ? undefined : 'max length 15'
}