const Header = ({ mood }) => {
     return (
          <header className="flex items-center justify-center">
               <h1 className="text-4xl md:text-6xl font-semibold mb-10">
                    {mood[0].toUpperCase() + mood.substr(1)} Songs
               </h1>
          </header>
     );
};

export default Header;
