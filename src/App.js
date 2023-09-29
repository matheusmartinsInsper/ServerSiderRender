
import './App.css';
import RenderChildrens from './functions/RenderChildrens';
import jsonData from './DataComponents';

const root=jsonData.root

function App() {
  return (
    <div className="App">
     {RenderChildrens(root)}
    </div>
  );
}

export default App;
