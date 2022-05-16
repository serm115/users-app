function Input(props) {
    return (
        <>
            {props.label && (
                <label
                    htmlFor={props.id}
                    className={props.type === 'checkbox' ? 'form-check-label' : 'form-label'}
                >
                    {props.label}
                </label>
            )}
            <input
                className={props.type === 'checkbox' ? 'form-check-input' : 'form-control'}
                {...props}
            />
        </>
    )
}

export default Input
