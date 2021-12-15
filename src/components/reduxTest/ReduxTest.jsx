import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';
import { transactionOperations } from 'redux/transaction';

export const ReduxTest = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(transactionOperations.getAll());
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          dispatch(
            authOperations.loginUser({
              email: 'Koliadjun@gmail.com',
              password: '123',
            }),
          );
        }}
      >
        login
      </button>
    </div>
  );
};
