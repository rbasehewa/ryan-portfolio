
import styles from './App.module.css';
import { About } from './componets/About/About';
import {Experience} from './componets/Experience/Experience';
import {Hero} from './componets/Hero/Hero';
import {Navbar} from './componets/Navbar/Navbar';
import {Projects } from './componets/Projects/Projects';

function App() {


  return (
    <div className={styles.App}> 
    
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App
