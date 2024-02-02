import { FiTrash2 } from "react-icons/fi"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { ContainerTask } from "./styles"

export function Task({ id, task, onDeleteTask, isCompleted, toggleChecked }) {
 
  return (
    <ContainerTask>
      <div className="task">
        <div className="wrapperTask">
          <button
            onClick={toggleChecked}
            className="check"
          >
            {isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
          </button>
          {id}
          <p>
            {task}
          </p>
        </div>
        <button
          title={task.id}
          className="delete"
          onClick={onDeleteTask}
        >
          <FiTrash2 size={20}

          />
        </button>
      </div>
    </ContainerTask>
  )
}