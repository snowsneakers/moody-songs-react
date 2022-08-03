import Header from "./components/Header";
import Emojis from "./components/Emojis";
import { useState } from "react";
function App() {
     const [mood, setMood] = useState("angry");
     return (
          <section className="min-h-screen flex items-center justify-center app">
               <div className="w-full md:w-[880px] mx-auto text-yellow-50">
                    <Header mood={mood} />
                    <Emojis setMood={setMood} mood={mood} />
               </div>
          </section>
     );
}

export default App;
