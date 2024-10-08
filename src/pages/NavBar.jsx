import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='bg-black flex w-full  items-center justify-center h-10 text-white font-bold'>
      <Link className='text-white' to="/admin">
        Admin login
      </Link>
    </div>
  );
}

export default NavBar;
