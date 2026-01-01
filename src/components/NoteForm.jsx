import reactLogo from '../assets/react.svg'
const NoteForm = ({ title, details, setTitle, setDetails, submitForm }) => {
  return (
    <div className='home-container mb-12 flex justify-between'>
      <div className='bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 w-full lg:w-[700px]'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Create Note
        </h1>
        <form className='flex flex-col space-y-5' onSubmit={(e) => {
          submitForm(e)
        }}>
          <input
            className='bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none rounded-xl py-4 px-4 w-full sm:w-[440px] border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 shadow-lg hover:shadow-xl'
            type="text"
            placeholder='Add Notes Title...'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className='bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 outline-none rounded-xl py-4 px-4 w-full sm:w-[440px] min-h-[200px] border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 resize-y shadow-lg hover:shadow-xl'
            name=""
            id=""
            placeholder='Add Notes Details...'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          >
          </textarea>
          <button className='py-4 px-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl cursor-pointer active:scale-95 w-full sm:w-[240px] mb-10 font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105'>
            Add Notes
          </button>
        </form>
      </div>
      <div className='hidden lg:block'>
        <img className='w-[350px] h-[350px] rotate-smooth' src={reactLogo} alt="" />
      </div>

    </div>
  )
}

export default NoteForm
