import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Welcome to ToDo List</h1>

      <div className='app_form'>
        <input type='text'></input>
        <button>Ok</button>
        <select name='task'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>


    </div>
  );
}

export default App;
