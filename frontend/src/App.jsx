import React,{ useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    fetch("/linaaa")
      .then(res => res.text())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>{data}</div>
  )
}

export default App