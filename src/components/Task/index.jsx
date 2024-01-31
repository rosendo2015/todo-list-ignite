import { FiTrash2 } from "react-icons/fi"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { useState } from "react"
import { ContainerTask } from "./styles"


export function Task({ id, content, onDeleteTask, isCompleted }) {
  
  return (
    <ContainerTask>
      <div className="task">
        <div className="wrapperTask">
          <button
            className="check"
            
          >
            {isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />}
          </button>
          {id}
          <p>
            {content}
          </p>
        </div>
        <button
          className="delete"
        >
          <FiTrash2 size={20}

          />
        </button>
      </div>
    </ContainerTask>
  )
}