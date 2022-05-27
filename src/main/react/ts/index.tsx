import React from "react"
import ReactDOM from "react-dom/client"

const App = () => {
    return <div>Hello React</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)