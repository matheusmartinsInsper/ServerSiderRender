import { useState, useCallback } from 'react';

import ReactFlow, { Background, MiniMap, Controls, applyEdgeChanges, applyNodeChanges,addEdge} from 'reactflow';
import 'reactflow/dist/style.css';

const nodesInitial=[
    {
        id:'1',
        position:{x:200,y:100},
        data:{label:'Integração'}
    },
    {
        id:'2',
        position:{x:200,y:2},
        data:{label:'Tipo de documento'}
    }
]

const edgeInitial = [
    {
        id:'1-2',
        source:'2',
        target:'1'
    }
]


function Flow() {

   const [nodes,setNodes]=useState(nodesInitial);
   const [edges,setEdges]=useState(edgeInitial);

   const onNodesChange=useCallback((change)=>setNodes((current)=>applyNodeChanges(change,current)),[])
   const onEdgeChange=useCallback((change)=>setEdges((current)=>applyEdgeChanges(change,current)),[])
   const addEdge=useCallback((params)=>setEdges((current)=>addEdge(params,current)),[])
   
   return (
    <div style={{height:'100vh',width:'100%'}}>
        <ReactFlow 
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgeChange}
        onConnect={addEdge}
        >
          <Background/>
          <Controls />
        </ReactFlow>
    </div>
   )
}

export default Flow