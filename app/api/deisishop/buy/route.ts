import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    console.log("📦 Body recebido:", body);

    // URL correta da API
    const apiUrl = "https://deisishop.pythonanywhere.com/buy/";
    console.log("🌐 Fazendo POST para:", apiUrl);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    console.log("📡 Status da resposta:", res.status);
    console.log("📡 Headers:", res.headers);

    // Pegar o texto da resposta primeiro
    const text = await res.text();
    console.log("📄 Resposta (texto):", text);

    if (!res.ok) {
      console.error("❌ Erro da API:", text);
      return new NextResponse(text, { status: res.status });
    }

    // Tentar parsear como JSON
    try {
      const data = JSON.parse(text);
      console.log("✅ Resposta (JSON):", data);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("❌ Erro ao parsear JSON:", parseError);
      console.error("❌ Texto recebido:", text);
      return new NextResponse("Resposta da API não é JSON válido", { status: 500 });
    }
    
  } catch (error) {
    console.error("❌ Erro no route:", error);
    return new NextResponse("Erro interno ao processar compra", { status: 500 });
  }
}