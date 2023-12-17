interface Props {
    value?: string,
    placeholder: string,
}

const Input = ({value, placeholder} : Props) => {
    return (
        <input value={value} placeholder={placeholder}/>
    )
} 

export default Input;