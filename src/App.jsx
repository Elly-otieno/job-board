import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sponsers from "./components/Sponsers";
import Job from "./components/Job";
import data from './data'
import Loader from './components/Loader'
import Footer from './components/Footer'

function App() {
  const jobs = data.map((item)=>{
    return (
      <Job 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <main>
      <Navbar />
      <section>
        <Search />
        <Sponsers />
        {jobs}
        <Loader />
      </section>
      <Footer />
    </main>
  );
}

export default App;
