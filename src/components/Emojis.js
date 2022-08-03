import { useState, useEffect } from "react";
import Player from "./Player";

const Emojis = ({ setMood, mood }) => {
     const [songs, setSongs] = useState([]);
     const [count, setCount] = useState(0);

     const getSongs = async (emotion) => {
          const res = await fetch(
               `https://moody-songs-react.herokuapp.com/${emotion}`
          );
          const data = await res.json();
          setSongs(data.tracks.trackList);
     };

     const pickMood = (e) => {
          setMood(e.target.title);
          getSongs(e.target.title);
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

     console.log(mood);

     return (
          <section>
               <ul className="w-full flex items-center justify-center md:justify-around mx-auto text-4xl md:text-6xl mb-5">
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
               {mood.length ? (
                    <div>
                         {songs
                              .filter((song, index) => index === count)
                              .map((song, index) => (
                                   <Player
                                        key={index}
                                        song={song}
                                        increment={increment}
                                        decrement={decrement}
                                        count={count}
                                        songs={songs}
                                   />
                              ))}
                    </div>
               ) : (
                    <section>
                         <p className="font-semibold md:text-4xl text-center">
                              Welcome! Need a song to complement your mood? Pick
                              the emoji that represents your mood the best and
                              enjoy the music!
                         </p>
                    </section>
               )}
          </section>
     );
};

export default Emojis;
