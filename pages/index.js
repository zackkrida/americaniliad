export default function Index() {
  return (
    <div className="app blog">
      <main>
        <header>
          <h1>The American Iliad</h1>
          {/* <p>A blog. This is a subtitle.</p> */}
        </header>

        <section className="posts">
          <ul>
            <li>
              <a href="/blog/an-introduction">
                <span>An Introduction</span>
                <span>2020.06.15</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
