
export async function onRequest() {
  return new Response(
    JSON.stringify({
      success: true,
      message: "AI Smart Keyboard Backend is Ready!"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
