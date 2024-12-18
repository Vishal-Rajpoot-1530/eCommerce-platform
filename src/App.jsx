import Header from './components/Header'
import Footer from './components/Footer'
import App_body from './components/App_body'
import './App.css'

function App() {


  return (
    <div className='app_container'>
        <Header></Header>
      <div className='app'>
         <App_body></App_body>
         <Footer></Footer>
      </div>
    </div>
  )
}

export default App
