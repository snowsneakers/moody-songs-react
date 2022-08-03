import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useState } from "react";

const Card = ({ song, increment, decrement, count, songs }) => {
     // console.log(song);
     const newLyrics = song.lyrics.split("<br>").join(" \n");
     const [hidden, setHidden] = useState(false);
     return (
          <section className="p-2">
               <div className="w-[320px] md:w-full mx-auto flex items-start md:items-center flex-col md:flex-row gap-2 p-2 rounded relative bg-black/55 shadow-xl">
                    <div>
                         <iframe
                              className="h-[250px] rounded"
                              src={song.url}
                              frameborder="0"
                         ></iframe>
                    </div>
                    <div>
                         <h1 className="artist text-4xl md:text-6xl font-semibold">
                              {song.artist}
                         </h1>
                         <h2 className="font-medium text-2xl md:text-4xl mb-2">
                              {song.song}
                         </h2>
                         <div className="flex items-center gap-2">
                              <button
                                   className="bg-gray-300 p-2 rounded-full text-2xl shadow-xl"
                                   onClick={decrement}
                              >
                                   <BiSkipPrevious />
                              </button>
                              <button
                                   className="bg-gray-300 p-2 rounded-full text-2xl shadow-xl"
                                   onClick={increment}
                              >
                                   <BiSkipNext />
                              </button>
                         </div>
                         <div className="absolute right-1 bottom-1">
                              <p className="text-right">
                                   {count + 1} / {songs.length}
                              </p>
                              <button
                                   onClick={() => setHidden(true)}
                                   className="py-0.5 px-2 bg-gray-300 rounded font-semibold"
                              >
                                   Show Lyrics
                              </button>
                         </div>
                    </div>
               </div>
               {hidden && (
                    <section
                         onClick={() => setHidden(false)}
                         className="min-w-[316px] max-h-screen cursor-pointer whitespace-pre-wrap absolute inset-0 backdrop-blur-md p-2 bg-black/25 flex items-center justify-center"
                    >
                         <div className="lyrics max-h-[400px] overflow-scroll bg-gray-200/80 rounded p-2">
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
