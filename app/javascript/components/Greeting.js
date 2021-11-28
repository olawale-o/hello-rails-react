import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Greeting = () => {
  const { message, isLoading } = useSelector(state => state.greetings);
  return (
    <div className="greetings">
      { isLoading ? <Loading /> : <h1>Greeting: {message}</h1>}
    </div>
  );
};

export default Greeting;