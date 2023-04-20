export default async function handler(req, res) {
  // console.log("res", res)
  // console.log("req", req)
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  res.status(200).json(todos);
}
