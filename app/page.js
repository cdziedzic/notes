'use client'
import Login from './Login';
import { useSelector } from 'react-redux';

export default function Home() {
  console.log("Home Page", useSelector((state) => state.auth))
  const username = useSelector((state) => state.auth.value.username);
  return (
  <div>
    <h1>Home Page</h1>
    <Login />
    <h1>Username: {username}</h1>

  </div>
  );
}
