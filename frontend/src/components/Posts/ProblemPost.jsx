import React, { useState } from "react";

function ProblemPost() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [isPosted, setIsPosted] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && topic && question) {
      setIsPosted(true);
      alert("Problem posted successfully!");
    } else {
      alert("Please fill in all fields before posting.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Post Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Write Your Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className={`w-full p-2 rounded-md text-white ${
            isPosted ? "bg-gray-500" : "bg-primary"
          }`}
        >
          {isPosted ? "Apply" : "Post"}
        </button>
      </form>
    </div>
  );
}

export default ProblemPost;
