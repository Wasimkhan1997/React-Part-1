import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
function App() {
  return (
    <>
    <div><p>
       <Person name="Sanket"/> who's age is
       <Person age= "20"/></p>

      
    </div>

    <div>
      <Button text="Click the button"  onClick={()=> console.log("Button Clicked")} />
    </div>

    <div>
      <Header title="Full Stack Dvelopement"/>
    </div>

     <div>
     <List Items= {['Bangalore','Channai',' Mumbai', 'Pune']}/>;
     </div>
    </>
  )
  
}

export default App;
