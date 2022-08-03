const Lyrics = ({ song }) => {
     const newLyrics = song.lyrics.split("<br>").join(" \n");
     return (
          <section className="min-w-[316px] max-h-screen cursor-pointer whitespace-pre-wrap sticky top-0 p-2 flex items-center justify-center mb-10">
               <div className="lyrics max-h-[400px] min-w-[320px] overflow-scroll shadow-md rounded p-2">
                    <h3 className="title text-2xl font-semibold text-center">
                         Lyrics
                    </h3>
                    <p className="text-center font-semibold">{newLyrics}</p>
               </div>
          </section>
     );
};

export default Lyrics;
