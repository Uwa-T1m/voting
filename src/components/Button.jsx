const Button = ({ className, onClick, children, style, disabled }) => {
    return (
        <button className={"rounded-lg bg-sky-500 hover:bg-sky-600 py-2 px-4 capitalize mt-4 text-lg" + className}
        onClick={onClick}
        disabled={disabled}
        style={style}
        >
            {children}
        </button>
    )
}

export default Button