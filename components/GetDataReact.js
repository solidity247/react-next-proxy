import FetchWrapper from "./UI/FetchWrapper";
import { useState } from "react";

export default function GetDataNext() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
      // "http://localhost:3000/api/todos"
    );
    const blob = await response.blob();
    const dataSize = blob.size;
    console.log(`Data size: ${dataSize} bytes`);
    // const data = await blob.json();
    // setData(data);
  };

  const clickDataHandler = () => {
    fetchData();
  };
  return (
    <FetchWrapper>
      <h3>Getting Data with React directly from Backend</h3>
      <button onClick={clickDataHandler}>Click to get data!!!</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </FetchWrapper>
  );
}
