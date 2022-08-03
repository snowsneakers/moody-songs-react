import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { useState } from "react";
import Lyrics from "./Lyrics";

const Card = ({ song, increment, decrement, count, songs }) => {
     // console.log(song);

     const [hidden, setHidden] = useState(false);
     return (
          <section className="p-2">
               <div className="w-[320px] md:w-full mx-auto flex items-start md:items-center flex-col md:flex-row gap-2 p-2 rounded relative bg-black/55 shadow-xl">
                    <div>
                         <iframe
                              className="h-[250px] rounded"
                              src={song.url}
                              frameBorder="0"
                         ></iframe>
                    </div>
                    <div>
                         <h1 className="artist text-4xl md:text-6xl font-semibold leading-normal">
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
               {hidden && <Lyrics song={song} setHidden={setHidden} />}
          </section>
     );
};

export default Card;
