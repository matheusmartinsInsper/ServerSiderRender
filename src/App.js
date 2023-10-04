
import './App.css';
import RenderChildrens from './functions/RenderChildrens';
import jsonData from './DataComponents';
import Flow from '../src/Components/ReactFlow'

const root=jsonData.root
//{RenderChildrens(root)}

function App() {
  return (
    <div className="App" >
     <Flow />
    </div>
  );
}

export default App;
