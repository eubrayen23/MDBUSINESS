const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
const GROQ_ENDPOINT = `https://api.groq.com/openai/v1/chat/completions`;

async function callGemini(systemPrompt, userPrompt) {
  const response = await fetch(GEMINI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
    })
  });
  if (!response.ok) { const err = await response.json(); throw new Error(`Gemini erro: ${err?.error?.message}`); }
  const data = await response.json(); return data.candidates[0].content.parts[0].text;
}

async function callGroq(systemPrompt, userPrompt) {
  const response = await fetch(GROQ_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      temperature: 0.7, max_tokens: 1024
    })
  });
  if (!response.ok) { const err = await response.json(); throw new Error(`Groq erro: ${err?.error?.message}`); }
  const data = await response.json(); return data.choices[0].message.content;
}

export async function callAI(systemPrompt, userPrompt) {
  try { return await callGemini(systemPrompt, userPrompt); }
  catch (e) { try { return await callGroq(systemPrompt, userPrompt); } catch (e2) { throw new Error('AI Service Unavailable'); } }
}

const SYSTEM_BASE = `És um especialista em RH para o mercado angolano. Escreves em português formal (AO). Os teus textos são concisos, impactantes, orientados para resultados e otimizados para sistemas ATS. Nunca inventas informações. Responde APENAS com o texto pedido.`;

export async function gerarResumoProfissional(d) {
  const prompt = `Gera um resumo profissional impactante para um CV com estes dados: ${JSON.stringify(d)}. O resumo deve ter 3-4 frases, ser orientado para resultados. Formato: texto corrido.`;
  return await callAI(SYSTEM_BASE, prompt);
}

export async function melhorarExperiencia(exp) {
  const prompt = `Melhora esta descrição de experiência profissional: ${JSON.stringify(exp)}. Reescreve em 3-5 bullet points com verbos de acção fortes. Formato: cada bullet começa com "• ".`;
  return await callAI(SYSTEM_BASE, prompt);
}

export async function sugerirCompetencias(cargo, sector) {
  const prompt = `Para um profissional com o cargo "${cargo}" no sector "${sector}" em Angola, lista 10 competências técnicas (hard skills) e 5 competências transversais (soft skills). Responde APENAS com JSON: {"hard_skills":[], "soft_skills":[]}`;
  const res = await callAI(SYSTEM_BASE, prompt);
  try { return JSON.parse(res.replace(/```json|```/g, '').trim()); } catch { return { hard_skills: [], soft_skills: [] }; }
}

export async function otimizarParaVaga(cvData, descricaoVaga) {
  const prompt = `Analisa este CV e esta oferta de emprego, e sugere melhorias: CV: ${JSON.stringify(cvData)}. Vaga: ${descricaoVaga}. Responde APENAS com JSON: {"score": 75, "keywords_em_falta": [], "sugestoes": []}`;
  const res = await callAI(SYSTEM_BASE, prompt);
  try { return JSON.parse(res.replace(/```json|```/g, '').trim()); } catch { return { score: 0, keywords_em_falta: [], sugestoes: [] }; }
}

export async function gerarCartaApresentacao(cvData, empresa, vaga) {
  const prompt = `Escreve uma carta de apresentação para: Candidato: ${cvData.nome}, Empresa: ${empresa}, Vaga: ${vaga}. Máximo 250 palavras.`;
  return await callAI(SYSTEM_BASE, prompt);
}

export async function traduzirSeccao(texto, idiomaDestino) {
  const prompt = `Traduz este texto de CV para ${idiomaDestino}: ${texto}`;
  const systemTraducao = `És um tradutor especializado em documentos profissionais e CVs.`;
  return await callAI(systemTraducao, prompt);
}

export default { callAI, gerarResumoProfissional, melhorarExperiencia, sugerirCompetencias, otimizarParaVaga, gerarCartaApresentacao, traduzirSeccao };
