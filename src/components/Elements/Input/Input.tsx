import './inputform.css'

type Props = {
    htmlFor: string
    title?: string
    type: string
    onChange: any
    value: string
    placeholder?: string,
    className?: string
}

function InputForm({ htmlFor, title, type, onChange, value, placeholder, className }: Props) {
    return (
        <div className={`mb-3 ${className}`} >
            <label htmlFor={htmlFor} className="form-label ">
                {title}
            </label>
            <input
                type={type}
                className="form-control shadow-none"
                name={htmlFor}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputForm