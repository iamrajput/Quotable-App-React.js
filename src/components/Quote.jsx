import {useContext} from 'react'
import QuoteContext from '../context/QuotesContext'

function Quote() {
    const {quote} = useContext(QuoteContext)
    return (
        <div className='quote'> 
            <div className="author" title={quote.author}>{quote.author}</div>
            <blockquote>
               {quote.content}
             </blockquote>
            <div className="tags">{quote.tags}</div>
        </div>
    )
}

export default Quote
