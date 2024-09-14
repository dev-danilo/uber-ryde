import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await request.json();

    // if (!name || !email || !clerkId) {
    //   console.log("teste");
    //   return Response.json(
    //     { error: "Missing required fields" },
    //     { status: 400 },
    //   );
    // }
    console.log("🚀 ~ POST ~ response:");
    const response =
      await sql`INSERT INTO users (name, email, clerk_id) VALUES (${name}, ${email}, ${clerkId})`;
    console.log("🚀 ~ POST ~ response:", response);

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
