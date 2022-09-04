import Link from "next/link";

const About = () => {
  return (
    <main>
      <section id="navigation_pane">
        <div id="menu-button">
          <a>Home</a>
          <a>About Me</a>
          <a>Projects</a>
          <a>Wishlist</a>
          <a>Blogs</a>
          <a>Ding Dong</a>
        </div>
        <div id="social">
          <a>Icon</a>
          <a>Icon</a>
          <a>Icon</a>
          <a>Icon</a>
        </div>
        <button>yeehak</button>
      </section>
      <section id="description">
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
        <section id="stack">
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
