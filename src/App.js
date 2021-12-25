import Quote from './components/Quote'
import QuoteList from './components/QuoteList'
import Header from  './components/Header'
import {QuoteProvider} from './context/QuotesContext'
import Button from './components/Button'


function App() {

/**
 * 
 * Now we are using the context one of the react hook that's why we don't need to write garbaze over the app.js
 * 
 */

  //  const [quote,setQuote] = useState({
  //      content : null,
  //      author : null,
  //      tags : null
  //  })

 //  const [quotes,setQuotes] = useState([])

  //  const fetchQuotes = async () => {
  //   const data = await fetch('https://api.quotable.io/random').then(res => res.json()); 
  //     return data;
  //  }
  //  const generate = async () => {
  //   if(quote.content){
  //     setQuotes([...quotes,quote])
  //   } 
  //   setQuote(await fetchQuotes())
  //  }
  //  useEffect(() => {
  //      async function getData(){
  //       setQuote(await fetchQuotes())
  //      }
  //      getData()
  //  },[])

    return (
    <QuoteProvider>
      <Header title="Quotable App"/> 
    <div className="App">
        <Quote/>
        <Button />
        <QuoteList />
    </div>
    </QuoteProvider>       
)}

export default App