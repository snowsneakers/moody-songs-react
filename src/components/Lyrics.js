const Lyrics = ({ song, setHidden }) => {
     const newLyrics = song.lyrics.split("<br>").join(" \n");
     return (
          <section
               onClick={() => setHidden(false)}
               className="min-w-[316px] max-h-screen cursor-pointer whitespace-pre-wrap absolute inset-0 backdrop-blur-md p-2 bg-black/25 flex items-center justify-center"
          >
               <div className="lyrics max-h-[400px] overflow-scroll bg-gray-200/80 shadow-md rounded p-2">
                    <h3 className="text-2xl font-semibold text-center mb-3">
                         Lyrics
                    </h3>
                    <p className="text-center font-semibold">{newLyrics}</p>
               </div>
          </section>
     );
};

export default Lyrics;
