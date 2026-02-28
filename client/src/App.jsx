import { useState } from "react";
import ProposalForm from "./components/ProposalForm";
import ProposalResult from "./components/ProposalResult";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI B2B Proposal Generator
          </h1>
          <p className="text-slate-400 mt-4 text-lg">
            Smart sustainable business strategy powered by AI
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">

          <ProposalForm setResult={setResult} />

          {result && (
            <div className="mt-12 border-t border-white/10 pt-10">
              <ProposalResult result={result} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;