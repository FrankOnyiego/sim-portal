// components/TextToImage.jsx
import React, { useState } from "react";
import axios from "axios";

const ImageEnhancer = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const DEEPAI_API_KEY = "7d9140eb-521d-43cf-a128-6ec36738c1c0"; // Replace with your DeepAI key

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl("");

    try {
      const res = await axios.post(
        "https://api.deepai.org/api/text2img",
        { text: prompt },
        {
          headers: {
            "api-key": DEEPAI_API_KEY,
          },
        }
      );

      setImageUrl(res.data.output_url);
    } catch (err) {
      console.error("Error generating image:", err.message);
      alert("Failed to generate image. Try another prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">🧠 Text to Image (DeepAI)</h2>

      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder='e.g. "a titration setup in a school chemistry lab"'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImage}
        disabled={loading || !prompt.trim()}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {imageUrl && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">🖼️ Generated Image</h3>
          <img src={imageUrl} alt="Generated" className="border rounded max-w-full" />
        </div>
      )}
    </div>
  );
};

export default ImageEnhancer;
