import { useState } from "react";
import axios from "axios";

export default function ProposalForm({ setResult }) {
  const [form, setForm] = useState({
    industry: "",
    budget: "",
    goals: "",
    targetMarket: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/proposal",
        form
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col items-center gap-6"
>
  <div className="w-full md:w-1/2 flex flex-col gap-2">
    <label className="text-sm text-slate-400">
      Industry
    </label>
    <input
      name="industry"
      type="text"
      placeholder="Manufacturing"
      onChange={handleChange}
      className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col gap-2">
    <label className="text-sm text-slate-400">
      Budget (₹)
    </label>
    <input
      name="budget"
      type="number"
      placeholder="500000"
      onChange={handleChange}
      className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col gap-2">
    <label className="text-sm text-slate-400">
      Sustainability Goals
    </label>
    <input
      name="goals"
      type="text"
      placeholder="Reduce emissions"
      onChange={handleChange}
      className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col gap-2">
    <label className="text-sm text-slate-400">
      Target Market
    </label>
    <input
      name="targetMarket"
      type="text"
      placeholder="Mid-sized enterprises"
      onChange={handleChange}
      className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className={`mt-4 px-10 py-3 rounded-lg font-medium transition-all ${
      loading
        ? "bg-slate-700 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
    }`}
  >
    {loading ? "Generating..." : "Generate Proposal"}
  </button>
</form>
  );
}