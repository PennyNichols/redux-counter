import { Button, Input } from "reactstrap";
import Todo from './Todo'
import store from './store'
import { useState } from "react";

function App() {
  const [inputValue, setInput] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleClick = () => {
    store.dispatch({
      type: 'addTodo',
      description: inputValue
    })
    setInput('')
  }

  console.log(store.getState())
	return (
		<div className="text-center m-auto" style={{width: '40%'}}>
			<div className="d-flex">
				<Input onChange={handleChange} value={inputValue} />
				<Button onClick={handleClick}>Add New To-Do</Button>
			</div>
      <Todo/>
		</div>
	);
}

export default App;
