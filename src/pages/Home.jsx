import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm Raissa Diane H. Capistrano</h1>
      <p>BS Computer Science Student in University of Cabuyao</p>
      <p>
        Welcome to my portfolio. I build small web apps and I'm currently
        learning React and client-side routing.
      </p>
      <Link to="/projects">View My Projects</Link>
    </div>
  );
}