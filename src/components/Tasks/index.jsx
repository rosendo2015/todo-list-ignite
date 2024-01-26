import styles from "./tasks.module.css"
import Cliboard from "../../assets/Clipboard.svg"
import LogoTodo from "../../assets/LogoTodo.svg"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Task } from "../Task"
import { useState } from "react"
export function Tasks() {
  const [tasks, setTasks] = useState([])
  const [newTextTask, setNewTextTask] = useState("")

  const taskQtd = tasks.length;
  const completedTasks = tasks.filter(task => {
    return (
      task.isCompleted === true
    )
  })
  function handleTaskText(event) {
    setNewTextTask(event.target.value)
  }
  function handleAddTask(event) {
    event.preventDefault()
    setTasks([...tasks, newTextTask])
    setNewTextTask("")
  }
  function deletarTask(taskToDelete) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(taskWithoutDeletedOne)
  }
  return (
    <div>
      <header className={styles.header}>
        <img src={LogoTodo} alt="logo" />
        <form onSubmit={handleAddTask} className={styles.form}>
          <input
            onChange={handleTaskText}
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
      <div className={styles.tasks}>
        <header>
          <div className={styles.tasksCreated}>
            <p>Tarefas criadas</p>
            <span>{taskQtd}</span>
          </div>
          <div className={styles.tasksFinished}>
            <p>Concluídas</p>
            <span>{completedTasks.length} de {taskQtd}</span>
          </div>
        </header>
        {
          tasks.map(task => {
            return (
              <Task
                key={crypto.randomUUID()}
                content={task}
                isCompleted={task.isCompleted}
                onDeletarTask={() => deletarTask(task)}
              />
            )
          })
        }
        <div className={styles.tasksList}>
          <img src={Cliboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}