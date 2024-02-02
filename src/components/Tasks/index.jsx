import Cliboard from "../../assets/Clipboard.svg"
import LogoTodo from "../../assets/LogoTodo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Task } from "../Task"
import { useState } from "react"
import { ContainerTasks } from "../Tasks/styles"

export function Tasks() {
  const [task, setTask] = useState("")
  const [listTasks, setListTasks] = useState([{
    id: 1,
    task: 'Fist task.',
    isCompleted: true,
  }])

  function handleNewTask() {
    setTask(event.target.value)
  }
  function handleAddTask() {
    event.preventDefault()
    if (!task) {
      return alert('Tarefa não pode ser vazia.')
    }
    const newTask = {
      id: Math.random(),
      task: task,
      isCompleted: false
    }
    setListTasks([...listTasks, newTask])
    setTask("")
  }
  function removeTask(id) {
    const newList = listTasks.filter(task => task.id !== id)
    setListTasks(newList)
  }
  function toggleChecked(id, isCompleted) {
   
    const index = listTasks.findIndex((task) => task.id === id)
    const newList = listTasks
    newList[index].isCompleted = !isCompleted
    setListTasks([...newList])
  }

  return (
    <ContainerTasks>
      <header className="header">
        <img src={LogoTodo} alt="logo" />
        <form
          onSubmit={handleAddTask}
          className="form"
        >
          <input
            onChange={handleNewTask}
            value={task}
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
          listTasks.length
            ?
            listTasks.map(task => {
              return (
                <Task
                  key={task.id}
                  task={task.task}
                  isCompleted={task.isCompleted}
                  onDeleteTask={() => removeTask(task.id)}
                  toggleChecked={() => toggleChecked(task.id, task.isCompleted)}
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