import { NextResponse } from "next/server";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar validação dos campos obrigatórios (products, student, coupon)
// 2. Adicionar timeout para a chamada fetch
// 3. Adicionar retry logic em caso de falha
// 4. Adicionar logging mais detalhado
// 5. Validar se products é um array não vazio
// 6. Validar tipos de dados (student deve ser boolean, coupon string)
// 7. Adicionar rate limiting
// 8. Adicionar autenticação/autorização
// 9. Sanitizar inputs antes de enviar para API
// 10. Adicionar cache de respostas bem-sucedidas

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // MODIFICAÇÃO POSSÍVEL: Validação de campos obrigatórios
    // if (!body.products || !Array.isArray(body.products) || body.products.length === 0) {
    //   return NextResponse.json({ error: "Products array is required and must not be empty" }, { status: 400 });
    // }
    
    // MODIFICAÇÃO POSSÍVEL: Validação de tipos
    // if (typeof body.student !== "boolean") {
    //   return NextResponse.json({ error: "Student must be a boolean" }, { status: 400 });
    // }
    
    console.log("📦 Body recebido:", body);

    // URL correta da API
    const apiUrl = "https://deisishop.pythonanywhere.com/buy/";
    console.log("🌐 Fazendo POST para:", apiUrl);

    // MODIFICAÇÃO POSSÍVEL: Adicionar timeout
    // const controller = new AbortController();
    // const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // signal: controller.signal, // Para timeout
    });
    
    // clearTimeout(timeoutId); // Limpar timeout se bem-sucedido

    console.log("📡 Status da resposta:", res.status);
    console.log("📡 Headers:", res.headers);

    // Pegar o texto da resposta primeiro
    const text = await res.text();
    console.log("📄 Resposta (texto):", text);

    if (!res.ok) {
      console.error("❌ Erro da API:", text);
      // MODIFICAÇÃO POSSÍVEL: Retornar JSON estruturado em vez de texto
      // return NextResponse.json({ error: text || "Erro ao processar compra" }, { status: res.status });
      return new NextResponse(text, { status: res.status });
    }

    // Tentar parsear como JSON
    try {
      const data = JSON.parse(text);
      console.log("✅ Resposta (JSON):", data);
      
      // MODIFICAÇÃO POSSÍVEL: Validar estrutura da resposta
      // if (!data.totalCost || !data.reference) {
      //   console.warn("⚠️ Resposta não contém campos esperados");
      // }
      
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("❌ Erro ao parsear JSON:", parseError);
      console.error("❌ Texto recebido:", text);
      return new NextResponse("Resposta da API não é JSON válido", { status: 500 });
    }
    
  } catch (error) {
    console.error("❌ Erro no route:", error);
    
    // MODIFICAÇÃO POSSÍVEL: Distinguir tipos de erro
    // if (error.name === 'AbortError') {
    //   return NextResponse.json({ error: "Request timeout" }, { status: 408 });
    // }
    
    return new NextResponse("Erro interno ao processar compra", { status: 500 });
  }
}