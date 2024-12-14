import Header from './components/Header'
import Footer from './components/Footer'
import App_body from './components/App_body'
import './App.css'

function App() {


  return (
    <>
        <Header></Header>
      <div className='app'>
         <App_body></App_body>
         <Footer></Footer>
      </div>
    </>
  )
}

export default App
