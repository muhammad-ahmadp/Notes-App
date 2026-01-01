const NoteCard = ({ task, i, deleteTask }) => {
    return (
      <div
        className='bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-md py-5 px-5 rounded-xl w-full sm:w-[280px] md:w-[300px] border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
      >
        <h4 className='text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 break-words'>
          {task.title}
        </h4>
        <p className='text-gray-200 mb-2.5 text-sm md:text-base leading-relaxed break-words'>
          {task.details}
        </p>
        <button
          className='text-[16px] cursor-pointer bg-red-400 rounded py-1 px-3 outline-none text-white'
          onClick={() => {
            deleteTask(i);
          }}
        >
          Delete
        </button>
      </div>
    )
  }
  
  export default NoteCard
  