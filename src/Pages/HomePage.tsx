import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <section>
      <div className='landing'></div>
      <div className='overlay'></div>
      <h1 className='page-title'>MovieFlix</h1>

      <nav className='home-links'>
        <Link to='/movies' className='home-link'>
          Movies
        </Link>
        <Link to='/shows' className='home-link'>
          TV Shows
        </Link>
      </nav>
    </section>
  );
};
