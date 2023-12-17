interface PropsForm {
    onSubmit: () => void,  
}   

const Form = ({onSubmit} :PropsForm) => {
    return (
      <form onSubmit={onSubmit}>
        <input type="date"/>
        <input type='input'/>
        <button type="submit">Ок</button>
      </form>
    )
}

export default Form;