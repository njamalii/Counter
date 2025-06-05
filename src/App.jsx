import './App.css'
import { useCallback, useState } from 'react';
function App() {
  const [num, setNum] = useState(0);
  // Without using Callback
  // function minusBtn() {
  //   setNum(num - 1);
  // }
  // function addBtn() {
  //   setNum(num + 1);
  // }
  
  ///With using Callback
  const minusBtn = useCallback(() => {
    setNum(num - 1);
  }, [num]);
  const addBtn = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  return (
    <>
      <div className='mt-5'>
        <h1>Counter</h1>
        <button className="bg-gray-300 hover:bg-gray-500 px-1 rounded" onClick={minusBtn}>-</button>
        <span className="font-bold">{num}</span>
        <button className="bg-gray-300 hover:bg-gray-500 px-1 rounded" onClick={addBtn}>+</button>
      </div>

    </>
  )
}

export default App
