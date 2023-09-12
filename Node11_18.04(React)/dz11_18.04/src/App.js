import logo from './logo.svg';
import './App.css';
import First from './First';
import Second from './Second';

function App() {
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.min.js"
></script>
      <div className='container'>
      <h1>First:</h1>
      <First></First>
      <hr></hr>
      <Second></Second>
      </div>
    </>
  );
}

export default App;
