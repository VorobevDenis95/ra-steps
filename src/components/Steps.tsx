import Form from "./Form";



const Steps = (onSubmit: () => void) => {
    return (
        <Form onSubmit={onSubmit} />
    );
}

export default Steps;