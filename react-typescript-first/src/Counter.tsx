import React, { useState } from "react";

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

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter
