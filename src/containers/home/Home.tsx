import React from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import { increment, decrement } from '../../store/reducers/appReducer';

const Home = () => {
  const dispatch = useAppDispatch();
  const {value} = useAppSelector(state => state.app)
  return (
    <div>
      <h1>
        {value}
      </h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      Home
    </div>
  )
};

export default Home
