import React, { useState, useRef, useEffect } from "react";

// useEffect
// const array: Array<number> [1, 2, 3]
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3]
// array[0] = 11
// readonlyArray[0] = 11


const Counter: React.FC<{}> = () => {
  const initialValue: number = 0
  // valueの型
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // setValueの型
  // const setValue: React.Dispatch<React.SetStateAction<number>>
  // type SetStateAction<S> = S | ((prevState: S) => S);
  // type MySetStateAction = number | ((prevState: number) => number);
  // type Dispatch<A> = (value: A) => void;
  // type Dispatch<A> = (value: MySetStateAction) => void;
  const [value, setValue] = useState<number>(initialValue)

  const increment = () => {
    setValue((prevState) => prevState + 1)
  }

  const decrement = () => {
    setValue((prevState) => prevState - 1)
  }
  
  const renderTimes = useRef<number>(0)
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1
  })
  

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  )
}

export default Counter
