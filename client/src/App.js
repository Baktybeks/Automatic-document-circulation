import {BrowserRouter} from "react-router-dom"
import AppRouter from "./links/AppRouter"
import Header from "./components/header/Header"
import Regis from "./pages/pageRegis/RegisModul"


function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
}

export default App
