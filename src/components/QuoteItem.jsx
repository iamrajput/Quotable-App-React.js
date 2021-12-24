function QuoteItem({quote,index}) {
    return (
             <div className="quotes">
			     <div className="quote-header">
                {index+1}. {quote.content}      
			     </div>
		    </div>
       
    )
}

export default QuoteItem
