type Props = {
    value: string,
    menu: string
}

const Option = ({ value, menu }: Props) => {
    return (
        <option value={value}>{menu}</option>
    )
}

export default Option
