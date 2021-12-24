import Quote from './components/Quote'
import QuoteList from './components/QuoteList'
import Header from  './components/Header'
import {useState,useEffect} from 'react'
function App() {

   const [quote,setQuote] = useState({
       content : null,
       author : null,
       tags : null
   })

   const [quotes,setQuotes] = useState([])

   const fetchQuotes = async () => {
    const data = await fetch('https://api.quotable.io/random').then(res => res.json()); 
      return data;
   }
   const generate = async () => {
    if(quote.content){
      setQuotes([...quotes,quote])
    } 
    setQuote(await fetchQuotes())
   }
   useEffect(async () => {
    setQuote(await fetchQuotes())
   },[])

    return (
       <>
      <Header title="Quotable App"/> 
    <div className="App">
       <Quote quote = {quote}/>
       <button onClick={generate}>GET A NEW QUOTE</button>
        <QuoteList quotes={quotes}/>
    </div>
    </>       
)}

export default App