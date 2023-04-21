function App() {
  let user = {
    name: "Dmytro",
    age: 17,
    makeSomeNoise: function () {
      return `User ${this.name}, ${this.age} says Hello`;
    },
  };
  return (
    <div>
      <h2>Hello {user.name}, from React app!</h2>
      <p>dasda</p>
      <hr />
      <div>
        Name: {user.name}, Age: {user.age}
      </div>
      <div>{user.makeSomeNoise()}</div>
    </div>
  );
}
export default App;
