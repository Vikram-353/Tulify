import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ProblemPost() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subject || !topic || !question || !image) {
      toast.error("Please fill in all fields before posting.");
      return;
    }

    setIsPosting(true);

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("topic", topic);
    formData.append("describedQuestion", question);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/post/add-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Problem posted successfully!");
        setSubject("");
        setTopic("");
        setQuestion("");
        setImage(null);
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error posting problem:", error);
      toast.error("Failed to post problem. Try again.");
    } finally {
      setIsPosting(false);
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
          disabled={isPosting}
          className={`w-full p-2 rounded-md text-white ${
            isPosting ? "bg-gray-500" : "bg-primary"
          }`}
        >
          {isPosting ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default ProblemPost;
