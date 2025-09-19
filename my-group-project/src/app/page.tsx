export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <header>
        <h1 style={{ fontSize: "2.5rem", color: "#3F3D56", marginBottom: "1rem" }}>
          🚀 Welcome to Our Group Project
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "600px" }}>
          This is the landing page for our Next.js project.  
          Together, we are building something awesome as a team!
        </p>
      </header>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#4FC3F7", marginBottom: "1rem" }}>
          Project Features
        </h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li>✅ Built with Next.js & TypeScript</li>
          <li>✅ Clean and modern design</li>
          <li>✅ Collaborative teamwork</li>
        </ul>
      </section>

      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#777" }}>
        © {new Date().getFullYear()} Our Group — All rights reserved.
      </footer>
    </main>
  );
}
