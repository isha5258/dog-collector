import { useEffect, useRef, useState } from "react"

function AddToDo(props) {

  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState('')

  


  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
    console.log(evt);
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(formData)
  }


  return ( 
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
      <input 
        placeholder="Todo"
        type="text"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
        required
      /> 
      <button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
					>Submit</button>
      <p>{}</p>
    </form>
  );
}

export default AddToDo;