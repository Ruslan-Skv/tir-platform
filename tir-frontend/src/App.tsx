import { ReduxProvider } from '@/app/providers';
import { HomePage } from '@/pages/home';
import './App.css';

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <HomePage />
      </div>
    </ReduxProvider>
  );
}

export default App;
// test commit from git bash
