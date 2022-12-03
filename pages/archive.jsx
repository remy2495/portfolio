import Link from "next/link";

const Home = () => {
  return (
    <div>
      <a>My Name is Raimi</a>

      <Link href="/">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Home;
