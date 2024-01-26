import { FiTrash2 } from "react-icons/fi"
import { BsFillCheckCircleFill } from "react-icons/bs"
import styles from "./Task.module.css"
export function Task({ id, content, onDeletarTask }) {
  const isCompleted = true

  function handleDeleteTask() {
    onDeletarTask(id)
  }

  return (

    <div className={styles.task}>
      <div className={styles.wrapperTask}>
        <button className={styles.check} >
          {isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
        </button>
        {id}
        <p>
          {content}
        </p>

      </div>
      <button
        onClick={handleDeleteTask}
        className={styles.delete}
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  )
}