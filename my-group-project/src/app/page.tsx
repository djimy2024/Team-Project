export default function Home() {
  const teamMembers: string[] = ["Djimy Francillon", "Emmanuel Chukwunonso Okoye", "Joseph Zereuwa Anucha"];

  return (
    <main className="main">
      <header>
        <h1 className="title">🚀 Welcome to Our Group Project</h1>
        <p className="subtitle">
          This is the landing page for our Next.js project.
        </p>
      </header>

      <section>
        <h2 className="sectionTitle">👥 Meet Our Team</h2>
        <ul className="list">
          {teamMembers.map((member, index) => (
            <li key={index}>✨ {member}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="sectionTitle">⚡ Project Features</h2>
        <ul className="list">
          <li>✅ Built with Next.js & TypeScript</li>
          <li>✅ Clean and modern design</li>
          <li>✅ Collaborative teamwork</li>
        </ul>
      </section>

        <section style={{ marginTop: "3rem" }}>
  <h2 style={{ fontSize: "1.8rem", color: "#4FC3F7", marginBottom: "1rem" }}>
    Work Items
  </h2>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "1rem",
      textAlign: "left",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.8",
    }}
  >
    <ul>
      <li>🛠️ Setup Next.js project</li>
      <li>📂 Create and organize GitHub repository</li>
      <li>📑 Define project structure and pages</li>
      <li>🎨 Build landing page design</li>
      <li>💅 Add global styles and theme</li>
    </ul>
    <ul>
      <li>🔑 Implement authentication (login/register)</li>
      <li>🌐 Connect to external API</li>
      <li>🗄️ Create and link database schema</li>
      <li>🧪 Write and run unit tests</li>
      <li>🚀 Deploy project to Vercel</li>
    </ul>
  </div>
</section>


      <footer className="footer">
        © {new Date().getFullYear()} Our Group — All rights reserved.
      </footer>
    </main>
  );
}
