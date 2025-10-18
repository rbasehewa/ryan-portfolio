
import styles from './App.module.css';
import { Contact } from './components/Contact/Contact.jsx';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import ChatWidget from "./components/ChatWidget.jsx";

function App() {


  return (
    <div className={styles.App}> 
    
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App
