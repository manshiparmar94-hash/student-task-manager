import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <>
      <div className="task-grid">

        {/* Task Cars 1 */}
        {tasks.map((tasks)=>(
          <div className="task-card" style={{position: 'relative'}}>
            <h3>{tasks.title}</h3>
            <p>{tasks.description}</p>

            <div className="task-meta">
                <span>Due: 2026-02-10</span>
                <span className='priority-badge priority-high'>{tasks.priority}</span>
            </div>

            <div className="task-actions">
                <button className='btn-icon' 
                        style={{background: '#00d2ff'}} 
                        title='Edit Task'
                >
                    ✏️
                </button>

                <button className='btn-icon' 
                        style={{background: '#00b894'}} 
                        title='Mark Complete'
                >
                    ✔️
                </button>

                <button className='btn-icon' 
                        style={{background: '#ff416c'}} 
                        title='Delete Task'
                >
                    🗑️
                </button>
            </div>
        </div>
        ))}
        
      </div>
    </>
  )
}

export default TaskList
