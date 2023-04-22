import './App.css';
import AppRouter from './components/AppRouter';
import TopNav from './components/TopNav';

function App() {
  return <AppRouter>
    <TopNav />
    <div
      id="snipcart"
      data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden
    >
    </div>
  </AppRouter>
}

export default App;
