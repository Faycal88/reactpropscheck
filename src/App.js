import './App.css';
import FullName from './profile/profile';
import pic from './profile/pic.jpg'

function App() {
  const stylePic = { width: "200px", height: "200px", borderRadius: "50%" }  // inline styling 
  
  function handleName(name) {
      if (!name) {
      alert("Please enter a valid name ! ")
    } else {
      alert(`Hello ${name}`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <FullName fullName="Merabet Faycal" bio="web developer" profession="GMC Student" func={handleName}>
          <img style={stylePic} src={pic} alt='myprofilepic' />
        </FullName>
      </header>
    </div>
  );
}

export default App;
