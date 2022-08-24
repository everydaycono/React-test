import { useState } from "react";


// Testing State hooks

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)} >Add One </button>
      <div className="aaa" role="counthook " >Count is {count}</div>
    </div>
  )
}

export default Counter