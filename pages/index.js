export default function Index() {
  return (
    <div className="app blog">
      <main>
        <header>
          <h1>American Iliad</h1>
          <p>A blog. This is a subtitle.</p>
        </header>

        <section className="posts">
          <ul>
            <li>
              <a href="/blog/example">
                <span>A Blog Title</span>
                <span>2020.06.10</span>
              </a>
            </li>
            <li>
              <a href="/blog/example">
                <span>Another, longer post</span>
                <span>2020.06.04</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
