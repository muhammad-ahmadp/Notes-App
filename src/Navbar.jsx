import React, { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NotesHeader from './components/NotesHeader'
import NotesList from './components/NotesList'

const Navbar = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState(() => {
    const stored = localStorage.getItem('task');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task]);

  const submitForm = (e) => {
    e.preventDefault();
    if (title.trim() == '' || details.trim() == '') {
      alert('Please fill all fields');
      return;
    }

    addTask()
    setTitle('')
    setDetails('')
  }

  function addTask() {
    const newTask = [...task];
    newTask.push({ title, details });
    setTask(newTask)
  }

  const deleteTask = (i) => {
    const newTask = [...task];
    const isConfirmed = window.confirm("Are you sure you want to delete this note?");
    if (!isConfirmed) return;

    newTask.splice(i, 1);
    setTask(newTask);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900'>
      <div className='container mx-auto py-14 px-4 sm:px-8 md:px-12 lg:px-20'>

        <NoteForm
          title={title}
          details={details}
          setTitle={setTitle}
          setDetails={setDetails}
          submitForm={submitForm}
        />

        <NotesHeader task={task} />

        <NotesList task={task} deleteTask={deleteTask} />

      </div>
    </div>
  )
}

export default Navbar
