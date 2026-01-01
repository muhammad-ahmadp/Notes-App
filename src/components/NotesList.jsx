import NoteCard from './NoteCard'

const NotesList = ({ task, deleteTask }) => {
  return (
    <>
      <div className='flex items-start flex-wrap gap-6 md:gap-10 py-10'>
        {task.map((task, i) => {
          return (
            <NoteCard key={i} task={task} i={i} deleteTask={deleteTask} />
          )
        })}
      </div>

      {task.length === 0 && (
        <div className='text-center py-20'>
          <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-4'>
            <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
            </svg>
          </div>
          <p className='text-gray-400 text-lg'>No notes yet. Start creating your first note!</p>
        </div>
      )}
    </>
  )
}

export default NotesList
