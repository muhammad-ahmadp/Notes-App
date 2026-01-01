const NotesHeader = ({ task }) => {
    return (
      <div className='mb-8'>
        <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
          Notes
        </h2>
        <p className='text-gray-400 text-sm md:text-base'>
          {task.length} {task.length === 1 ? 'note' : 'notes'} saved
        </p>
      </div>
    )
  }
  
  export default NotesHeader
  