import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useState } from "react";

const Card = ({ song, increment, decrement, count, songs }) => {
     // console.log(song);
     const newLyrics = song.lyrics.split("<br>").join(" \n");
     const [hidden, setHidden] = useState(false);
     return (
          <section className="flex items-center justify-center flex-col md:flex-row gap-5">
               <div className="h-[450px] p-2 rounded backdrop-blur-md backdrop-saturate-150 shadow-black/75 shadow-md">
                    <div className="mb-2">
                         <iframe
                              className="h-[250px] rounded"
                              src={song.url}
                              frameborder="0"
                         ></iframe>
                    </div>
                    <div className="flex justify-center flex-col">
                         <div>
                              <h1 className="text-xl font-semibold">
                                   {song.artist}
                              </h1>
                              <h2 className="font-medium">{song.song}</h2>
                              <p>
                                   Track: {count + 1} / {songs.length}
                              </p>
                              <button onClick={() => setHidden(true)}>
                                   Show Lyrics
                              </button>
                         </div>
                         <div className="flex items-center justify-center gap-2">
                              <button
                                   className="bg-gray-200/25 p-2 rounded-full text-2xl shadow-black/75 shadow-sm"
                                   onClick={decrement}
                              >
                                   <BiSkipPrevious />
                              </button>
                              <button
                                   className="bg-gray-200/25 p-2 rounded-full text-2xl shadow-black/75 shadow-sm"
                                   onClick={increment}
                              >
                                   <BiSkipNext />
                              </button>
                         </div>
                    </div>
               </div>
               {hidden && (
                    <section
                         onClick={() => setHidden(false)}
                         className="min-w-[316px] max-h-screen  whitespace-pre-wrap absolute inset-0 backdrop-blur-md p-2 bg-black/25 flex items-center justify-center"
                    >
                         <div className="lyrics max-h-[400px] overflow-scroll">
                              <h3 className="text-2xl font-semibold text-center mb-3">
                                   Lyrics
                              </h3>
                              <p className="text-center">{newLyrics}</p>
                         </div>
                    </section>
               )}
          </section>
     );
};

export default Card;
