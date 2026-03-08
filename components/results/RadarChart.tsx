"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface RadarChartProps {
  groupedScores: Record<string, number>;
  categoryScores: Record<string, number>;
}

const categoryLabels: Record<string, string> = {
  cooking_oils: "Cooking Oils",
  snacks: "Snacks",
  bread_grains: "Bread & Grains",
  condiments: "Condiments",
  breakfast: "Breakfast",
  beverages: "Beverages",
  protein: "Protein",
  label_reading: "Label Reading",
  dining_out: "Dining Out",
  packaged_foods: "Packaged Foods",
};

function scoreColor(score: number): string {
  if (score <= 3) return "#EF4444"; // red
  if (score <= 6) return "#F59E0B"; // amber
  return "#7A9B7D";                 // sage green
}

export default function RadarChart({ categoryScores }: RadarChartProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const entries = Object.entries(categoryScores);
  const labels = entries.map(([slug]) => categoryLabels[slug] ?? slug);
  const values = entries.map(([, v]) => v);
  const colors = values.map(scoreColor);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 20,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 10,
        ticks: { stepSize: 2, font: { size: 11 }, color: "#8C7269" },
        grid: { color: "#F0E8E0" },
        border: { display: false },
      },
      y: {
        ticks: { font: { size: 12 }, color: "#5C4A42" },
        grid: { display: false },
        border: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` Score: ${ctx.raw}/10`,
        },
      },
    },
  };

  // Legend
  const legend = [
    { color: "#EF4444", label: "Needs work (0–3)" },
    { color: "#F59E0B", label: "Getting there (4–6)" },
    { color: "#7A9B7D", label: "Clean (7–10)" },
  ];

  return (
    <div>
      {/* Color legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm inline-block flex-shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-brown-light">{item.label}</span>
          </div>
        ))}
      </div>
      {/* Chart — height scales with number of categories */}
      <div style={{ height: entries.length * 38 + 16 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
