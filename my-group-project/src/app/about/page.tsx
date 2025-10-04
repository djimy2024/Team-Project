// src/app/about/page.tsx
import { neon } from "@neondatabase/serverless";

export default async function AboutPage() {
  // 1. Konekte ak Neon DB la
  const sql = neon(process.env.DATABASE_URL!);

  // 2. Fè yon query sou tab "team"
  const rows = await sql`SELECT name, role FROM team`;

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Meet Our Team</h1>
      <ul>
        {rows.map((row: any, i: number) => (
          <li key={i}>
            <strong>{row.name}</strong> — {row.role}
          </li>
        ))}
      </ul>
    </main>
  );
}
