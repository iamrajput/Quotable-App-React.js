import {useContext} from 'react'
import QuoteContext from '../context/QuotesContext'

function Button() {
    const {generateQuote} = useContext(QuoteContext)

    const handleClick = () => {
        generateQuote()
    }

    return (
        <div>
             <button onClick={handleClick}>GET A NEW QUOTE</button>
        </div>
    )
}

export default Button
