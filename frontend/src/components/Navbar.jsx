import  { useEffect,useState  } from 'react';
// import { useContext, } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import { UserContext } from '../providers/UserProvider';

export const Navbar = () => {
//   const { user } = useContext(UserContext);
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    const shouldHaveShadow = window.scrollY > 0;
    setHasShadow(shouldHaveShadow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` headerShadow mb-20 flex w-full items-center justify-evenly fixed top-0 bg-white py-4  z-10  ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <Link to={'/'} className="flex items-center gap-1">
        <img
          className="h-8 w-8 md:h-10 md:w-10"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
          alt=""
        />

        <span className="hidden md:block font-bold text-2xl text-red-500">
          airbnb
        </span>
      </Link>

      <SearchBar />

      <Link
      //   to={user ? '/account' : '/login'}
        className="flex gap-2 items-center md:border border-gray-300 rounded-full py-2 px-4 userProfile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden md:block w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden absolute md:static">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-6 md:h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* {user && <div className='hidden md:block'>{user.name}</div>} */}
      </Link>
      <br className="border border-gray-600 " />
    </header>
  );
};

