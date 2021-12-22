import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/authorization';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
// import * as transactionAPI from 'services/transactionAPI';

export const ReduxTest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const a = useSelector(transactionSelectors.getSpendReportDataPerMonth(5));
  console.log(`a`, a);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(
            authOperations.loginUser({
              email,
              password,
            }),
          );
        }}
      >
        <input
          type="text"
          name="email"
          id=""
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="password"
          id=""
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">login</button>
      </form>
      {isLoggedIn ? (
        <button
          onClick={() => {
            dispatch(transactionOperations.getAllTransaction());
          }}
        >
          Click me
        </button>
      ) : null}
      <button
        onClick={() => {
          dispatch(
            transactionOperations.setDate({ day: 11, month: 11, year: 2021 }),
          );
        }}
      >
        Date
      </button>
      {/* <p>{toString(a)}</p> */}
      {/* <ul>
        {transactions.map(element => {
          return <li key={element._id}>{element.sum}</li>;
        })}
      </ul> */}
    </div>
  );
};
