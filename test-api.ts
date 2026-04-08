async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/searchWithAI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'test', lang: 'en' })
    });
    const data = await res.json();
    console.log("Response:", data);
  } catch (e) {
    console.error("Error:", e);
  }
}
test();
