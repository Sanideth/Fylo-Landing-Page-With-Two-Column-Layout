import "./App.prefixed.css";
import Header from "./layout/Header";
import SectionInfo from "./layout/SectionInfo";
import SectionSignup from "./layout/SectionSignup";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionInfo />
      <SectionSignup />
      <Footer />
    </div>
  );
}

export default App;
