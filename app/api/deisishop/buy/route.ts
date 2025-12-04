import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch("https://deisishop.pythonanywhere.com/api/buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      return new NextResponse(text, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return new NextResponse("Erro interno ao processar compra", { status: 500 });
  }
}
