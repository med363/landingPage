import './App.scss';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'font-awesome/css/font-awesome.min.css'
function App() {
  return (
    <div className="container">
<Header/>
<MainContent/>
<Footer/>
    </div>
  );
}

export default App;
