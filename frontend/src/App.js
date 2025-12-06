import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  const sendData = async () => {
    const res = await fetch('http://localhost:5000/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Krishna', message: 'Hello Flask' })
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{message}</h1>
      <button onClick={sendData}>Send POST</button>
    </div>
  );
}

export default App;
