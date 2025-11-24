import { useEffect } from 'react';
import './App.css'
import { taskService } from './api/task.service';

function App() {

  useEffect(() => {


    taskService.list()
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    taskService.show(4)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))


  }, []);
    

  return (
    <>

    </>
  )
}

export default App
