import QuoteItem from './QuoteItem'
function QuoteList({quotes}) {
    return (
        <section className="quote-list">
            {quotes.slice().reverse().map((quote,i) =>( 
                <QuoteItem quote={quote} key={quote._id} index={i}/>
            ))}
		
	</section>
    )
}

export default QuoteList
