import { useState } from "react";
import FetchWrapper from "./UI/FetchWrapper";

export default function GetDataNext() {
  const [data, setData] = useState([]);
  // "/api/todos"
  const [dummyData, setDummyData] = useState({})

  const fetchData = async () => {
    const url = "/api/todos";
    const startTime = performance.now();

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDummyData(data);
      const endTime = performance.now();
      const duration = endTime - startTime;
      const size = new TextEncoder().encode(JSON.stringify(data)).length;
      const info = {
        url,
        duration,
        size,
      };
      setData(info);
    } catch (error) {
      console.error(error);
    }
  };

  const clickDataHandler = () => {
    fetchData();
  };
  return (
    <FetchWrapper>
      <h3>Getting Data with NextJS Proxy</h3>
      <button onClick={clickDataHandler}>Click to get data!!!</button>
      <h3>Request to {data.url} paremeters:</h3>
      <p>Time: {Math.round(data.duration) || ""} ms</p>
      <p>Data: {data.size} bytes</p>
      {/* <p>Dummy data</p> */}
      {/* <p>{JSON.stringify(dummyData)}</p> */}
    </FetchWrapper>
  );
}
