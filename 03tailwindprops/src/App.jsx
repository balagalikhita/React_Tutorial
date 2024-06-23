import Card from "./components/card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 mb-4">Hello world!</h1>
      <Card title="google" btntext="click here" />
      <Card title="pixel" btntext="Don't click here" />
    </>
  );
}

export default App;
