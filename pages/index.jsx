import Link from "next/link";

const Home = () => {
  return (
    <div>
      <a>My Name is Raimi</a>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/project">
        <a>Project</a>
      </Link>
    </div>
  );
};

export default Home;
