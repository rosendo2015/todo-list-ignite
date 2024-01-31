import Cliboard from "../../assets/Clipboard.svg"
import LogoTodo from "../../assets/LogoTodo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Task } from "../Task"
import { useState } from "react"
import  {ContainerTasks}  from "../Tasks/styles"

export function Tasks() {
  const [tasks, setTasks] = useState([])
  const [newTextTask, setNewTextTask] = useState("")

  function handleAddNewTask() {
    event.preventDefault()
    setTasks([...tasks, newTextTask])
    setNewTextTask("")
  }
  function handleNewTaskChang() {
    setNewTextTask(event.target.value)
  }
  return (
    <ContainerTasks>
      <header className="header">
        <img src={LogoTodo} alt="logo" />
        <form onSubmit={handleAddNewTask} className="form">
          <input
            onChange={handleNewTaskChang}
            value={newTextTask}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
      <div className="tasks">
        <header>
          <div className="tasksCreated">
            <p>Tarefas criadas</p>
            <span>10</span>
          </div>
          <div className="tasksFinished">
            <p>Concluídas</p>
            <span>5 de 10</span>
          </div>
        </header>
        {
          tasks.length
            ?
            tasks.map(task => {
              return (
                <Task
                  key={task}
                  content={task.content}
                  onDeleteTask={task}
                 
                />
              )
            })
            :
            <div className="tasksList">
              <img src={Cliboard} alt="clipboard" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        }
      </div>
    </ContainerTasks>
  )
}