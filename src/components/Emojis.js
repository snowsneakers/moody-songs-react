import { useState, useEffect } from "react";
import Card from "./Card";

const Emojis = ({ setMood, mood }) => {
     const [songs, setSongs] = useState([]);
     const [count, setCount] = useState(0);

     const getSongs = async () => {
          const res = await fetch(
               `https://moody-songs-react.herokuapp.com//${mood}`
          );
          const data = await res.json();
          setSongs(data.tracks.trackList);
     };

     useEffect(() => {
          getSongs();
     }, [mood]);

     const pickMood = (e) => {
          setMood(e.target.title);
          setCount(0);
     };

     const increment = () => {
          setCount((prevState) => prevState + 1);
          if (count === songs.length - 1) {
               setCount(0);
          }
     };
     const decrement = () => {
          setCount((prevState) => prevState - 1);
          if (count === 0) {
               setCount(songs.length - 1);
          }
     };

     return (
          <section>
               <ul className="w-full flex items-center justify-evenly mx-auto text-4xl md:text-6xl mb-5">
                    <li
                         className="emoji cursor-pointer"
                         title="Angry"
                         onClick={pickMood}
                    >
                         😠
                    </li>
                    <li
                         className="emoji cursor-pointer"
                         title="Chill"
                         onClick={pickMood}
                    >
                         😴
                    </li>
                    <li
                         className="emoji cursor-pointer"
                         title="Happy"
                         onClick={pickMood}
                    >
                         😀
                    </li>
                    <li
                         className="emoji cursor-pointer"
                         title="Love"
                         onClick={pickMood}
                    >
                         😍
                    </li>
                    <li
                         className="emoji cursor-pointer"
                         title="Sad"
                         onClick={pickMood}
                    >
                         😭
                    </li>
               </ul>
               <div>
                    {songs
                         .filter((song, index) => index === count)
                         .map((song) => (
                              <Card
                                   song={song}
                                   increment={increment}
                                   decrement={decrement}
                                   count={count}
                                   songs={songs}
                              />
                         ))}
               </div>
          </section>
     );
};

export default Emojis;
