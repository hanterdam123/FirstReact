export const requiredField = (value) => {
    return (!value) ?  'Ошибка' :  undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    return (value.length > maxLength) ? `Максимальное число символов ${maxLength}` : undefined
}