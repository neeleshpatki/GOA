import React, { useState } from "react";
import axios from "axios";

function Main() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Your OpenAI API key (hardcoded)
  const apiKey =
    "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";

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a travel assistant specialized in creating detailed, day-wise itineraries.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while generating the itinerary.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Itinerary Generator</h1>
      <textarea
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "16px",
        }}
        placeholder="Enter your travel details, e.g., 'Give me an itinerary for 5 days trip to Goa which includes beaches, waterfalls, heritage location, anything cultural.'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Itinerary"}
      </button>
      <div style={{ marginTop: "20px" }}>
        <h2>Itinerary:</h2>
        <div
          style={{
            whiteSpace: "pre-wrap",
            border: "1px solid #ddd",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {response || "Your itinerary will appear here."}
        </div>
      </div>
    </div>
  );
}

export default Main;
