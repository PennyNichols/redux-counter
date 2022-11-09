import React from "react";
import store from "./store";
import { Button } from "reactstrap";
import { useState } from "react";

const Todo = () => {
    const [state,setState] = useState(false)
	const data = store.getState();
    const handleClick=(id)=>{
        setState(!state)
        store.dispatch({
            type: 'removeTodo',
            id:id
        })
    }
    
    const handleComplete=(id)=>{
        setState(!state)
        store.dispatch({
            type: 'complete',
            id:id
        })
        
    }
	return (
		<div>
			{data.map((item) => {
				return (
					<div key={item.id} className="d-flex justify-content-between my-2 p-2 border shadow rounded">
						<div style={{textDecoration: item.completed ? 'line-through' : ''}}>{item.title}</div>
						<div>
							<Button onClick={()=>handleClick(item.id)} color="danger">Delete</Button>
							<Button onClick={()=>handleComplete(item.id)} className='ms-1' color="success">Complete</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Todo;
