export default function Index() {
  return (
    <div className="app blog">
      <main>
        <header>
          <h1>The American Iliad</h1>
          <p>
            A blog and running commentary on Shelby Foote's Civil War trilogy
            and tangentially related topics, on mostly aesthetic grounds.
          </p>
        </header>

        <section className="posts">
          <ul>
            <li>
              <a href="/blog/beginnings">
                <span>Beginnings</span>
                <span>2020.06.16</span>
              </a>
            </li>
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
