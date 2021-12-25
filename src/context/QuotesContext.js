import {
    createContext,
    useState,
    useEffect
} from 'react'


const QuoteContext = createContext()
export const QuoteProvider = ({
    children
}) => {

    const [quote,setQuote] = useState({
        content : null,
        author : null,
        tags : null
    })
    const fetchQuotes = async () => {
        const data = await fetch('https://api.quotable.io/random').then(res => res.json()); 
          return data;
    }

    useEffect(() => {
        async function getData(){
         setQuote(await fetchQuotes())
        }
        getData()
    },[])

    const [quotes,setQuotes] = useState([])

  // list down all the quotes or generate the list of quotes
  const generateQuote = async () => {
      if(quote.content){
        setQuotes([...quotes,quote])
      } 
      setQuote(await fetchQuotes())
     }

    return <QuoteContext.Provider value={{
        quote,
        quotes,
        generateQuote
    }}>
            {children}
        </QuoteContext.Provider>
}

export default QuoteContext
