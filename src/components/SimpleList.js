import "./SimpleList.css";

function SimpleList({ items }) {
  const output = items.map((item) => <li>{item}</li>);

  return <ul>{output}</ul>;
}

export default SimpleList;
