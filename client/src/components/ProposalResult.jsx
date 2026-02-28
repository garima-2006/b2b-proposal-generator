import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProposalResult({ result }) {
  const { aiGenerated, calculatedBudget } = result;

  const chartData = Object.entries(calculatedBudget).map(
    ([key, value]) => ({
      name: key.replace(/_/g, " "),
      value: value,
    })
  );

  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="space-y-14 animate-fadeIn">

      {/* PRODUCT MIX */}
      <div>
        <h2 className="text-3xl font-bold mb-8">
          Suggested Product Mix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {aiGenerated.product_mix?.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/70 border border-slate-700 p-6 rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {item.name}
              </h3>

              <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 text-green-400 font-bold text-lg">
                {formatCurrency(item.estimated_cost)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT SUMMARY */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Impact Summary
        </h2>

        <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl shadow-md">
          <p className="text-slate-300 leading-relaxed text-lg">
            {aiGenerated.impact_summary}
          </p>
        </div>
      </div>

      {/* BUDGET CHART */}
      <div>
        <h2 className="text-3xl font-bold mb-8">
          Budget Allocation
        </h2>

        <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl shadow-lg">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fill: "#cbd5e1" }}
              />
              <YAxis
                stroke="#94a3b8"
                tick={{ fill: "#cbd5e1" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => formatCurrency(value)}
              />
              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}