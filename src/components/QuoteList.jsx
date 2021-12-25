import QuoteItem from './QuoteItem'
import {useContext} from 'react'
import QuoteContext from '../context/QuotesContext'

function QuoteList() {
    const {quotes} = useContext(QuoteContext)

    return (
        <section className="quote-list">
            {quotes.slice().reverse().map((quote,i) =>( 
                <QuoteItem quote={quote} key={quote._id} index={i}/>
            ))}
		
	</section>
    )
}

export default QuoteList
