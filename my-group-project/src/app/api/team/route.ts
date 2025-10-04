import { Client } from "@neondatabase/serverless";

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT name, role FROM team"); // query sou tab 'team'
    return new Response(JSON.stringify(res.rows), { status: 200 });
  } catch (err) {
    console.error("DB query failed:", err);
    return new Response(JSON.stringify([]), { status: 200 });
  } finally {
    await client.end();
  }
}
