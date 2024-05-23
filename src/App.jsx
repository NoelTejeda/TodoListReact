import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import moment from 'moment'


export const App = (props) => {

  const [task, setTask] = useState('')
  const [listTask, setListTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === '') {
      alert('Debes poner una tarea')
      return
    }

    const newTask = {
      id: moment(Date.now()).format('DD/MM/YYYY - HH:mm'),
      task: task,
      completed: false
    }

    const temp = [newTask, ...listTask]
    setListTask(temp)
    setTask('')
    console.log(listTask)
  }



  const handleChange = (e) => {
    setTask(e.target.value)
    console.log(task)
  }


  return (
    <>
      <div className='contenedorPrincipal'>
        <h4>To-Do List</h4>


        <div className='contenedorFormulario'>
          <Form
            task={task}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <div className='contenedorTareas'>
          <h5>Lista de Tareas</h5>
          <div className='contenedorInfoTareas'>
            {
              listTask.map((item, index) => {
                return (
                  <div key={index} className='contenedorTarea'>
                    <p>{item.task}</p>
                    <button className='btnBorrar'>Eliminar</button>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </>

  )
}