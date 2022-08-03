const Header = ({ mood }) => {
     return (
          <header className="flex items-center justify-center">
               <h1 className="title text-4xl md:text-6xl font-bold mb-2">
                    {mood.length
                         ? mood[0].toUpperCase() + mood.substr(1)
                         : "Moody"}{" "}
                    Songs
               </h1>
          </header>
     );
};

export default Header;
