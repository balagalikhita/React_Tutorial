
import './App.css'
import {InputBox} from './components'
import {useCurrencyInfo} from './hooks/useCurrencyinfo'
function App() {
const [amount, setAmount] =useState(0);
const [from, setFrom] =useState("usd");
const [to, setTo]=useState("inr");

  return (
    <>
    <h1 className="text-3xl bg-orange-500">Currency app</h1>
    </>
  )
}

export default App
