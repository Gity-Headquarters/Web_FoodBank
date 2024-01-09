import { LuSearch } from 'react-icons/lu'
import './search.css'
type Props = {
    className?: string,
    size: number,
    value: string,
    placeholder: string,
    onChange: any

}

function Search({ className, size, value, placeholder, onChange }: Props) {
    return (
        <>
            <button className={`search__button  ${className}`}>
                <LuSearch size={size} />
            </button>
            <input type="text" className="form-control input-search shadow-none" placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default Search