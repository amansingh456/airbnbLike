import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import "./style/index.css"
import { HotelProvider } from './context/HotelProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HotelProvider>
      <App />
    </HotelProvider>
  </BrowserRouter>,
)
