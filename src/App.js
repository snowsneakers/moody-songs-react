import Header from "./components/Header";
import Emojis from "./components/Emojis";
import { useState } from "react";
function App() {
     const [mood, setMood] = useState("");
     return (
          <section className="min-h-screen flex items-start md:items-center mt-20 md:mt-0 app">
               <div className="w-full md:w-[768px] mx-auto text-black">
                    <Header mood={mood} />
                    <Emojis setMood={setMood} mood={mood} />
               </div>
          </section>
     );
}

export default App;
