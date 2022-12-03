import Link from "next/link";

const About = () => {
  return (
    <main
      id="about-screen"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <section
        id="about-sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "60px",
          }}
        >
          <a>Home</a>
          <a>About Me</a>
          <a>Projects</a>
          <a>Wishlist</a>
          <a>Blogs</a>
          <a>Ding Dong</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <a>Icon</a>
          <a>Icon</a>
          <a>Icon</a>
          <a>Icon</a>
        </div>
        <button
          style={{
            borderColor: "yellow",
            borderRadius: "20px",
            marginRight: "400px",
          }}
        >
          yeehak
        </button>
      </section>
      <section style={{}}>
        <section>
          <p>animation</p>
        </section>
        <section>
          {/* Dahsyat betul semua pakai link */}
          <p>BIO</p>
          <p>Image</p>
          <p>Name</p>
          <p>Details</p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Kenapa pakai link sini? */}
          <p>Stack</p>
          <p>Curious</p>
          <div>
            {/* Pakai <a> hanya bila ko nak benda tu clickable */}
            {/* Hover tu cerita lain, hover tak sama dengan clickable */}
            <p>Depan</p>
            <div>
              <p>Icon</p>
              <p>Icon</p>t ..o 6<p>Icon</p>
              <p>Icon</p>
            </div>
            <p>Styling</p>
            <div>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <p>Back</p>
            <div>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <p>Other</p>
            <div>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
          </div>
        </section>
        <section id="career">
          <p>Career</p>
          <div>
            <p>image</p>
            <div>
              <p>Developer</p>
              <p>Company</p>
              <p>Detail</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
