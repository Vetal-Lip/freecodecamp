class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

// Change code below this line
<div id="challenge-node"></div>;

ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
