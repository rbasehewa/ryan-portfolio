// src/components/About/AboutTimeline.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLOR_MAP = {
  // existing
  Angular: "var(--color-angular)",
  React: "var(--color-react)",
  ".NET/C#": "var(--color-dotnet)",
  Linux: "var(--color-linux)",
  AWS: "var(--color-aws)",
  "Soft Skills": "var(--color-soft)",

  // new
  Laravel: "var(--color-laravel)",
  Flutter: "var(--color-flutter)",
  "REST APIs": "var(--color-rest)",
  Salesforce: "var(--color-salesforce)",
  Azure: "var(--color-azure)",
};

const M = [
  {
    range: "2014–2016",
    title: ".NET Backend Developer",
    data: [
      { name: ".NET/C#", value: 80 },
      { name: "Angular", value: 10 },
      { name: "React", value: 10 },
    ],
  },
  {
    range: "2016–2018",
    title: "System Support Engineer (Linux) · Master’s",
    data: [
      { name: "Linux", value: 70 },
      { name: "AWS", value: 15 },
      { name: "day-to-day IT support and troubleshooting", value: 15 },
    ],
  },
  {
    range: "2018–2019",
    title: "Professional Year (AU culture & ACS Internship)",
    data: [
      { name: "Soft Skills", value: 60 },
      { name: "AWS", value: 20 },
      { name: ".NET/C#", value: 20 },
    ],
  },
  {
    range: "2019 (Jan–May)",
    title: "Enee Solutions · Software Developer",
    data: [
      { name: "Laravel", value: 60 },
      { name: "Flutter", value: 20 },
      { name: "REST APIs", value: 10 },
      { name: "AWS", value: 10 },
    ],
  },
  {
    range: "2019 May – 2021 Oct",
    title: "I Tech You Learn · Full-stack (.NET + React, AWS)",
    data: [
      { name: ".NET/C#", value: 40 },
      { name: "React", value: 35 },
      { name: "AWS", value: 25 },
    ],
  },
  {
    range: "2021–2023",
    title: "Vocus Group · Frontend (Angular & React)",
    data: [
      { name: ".NET/C#", value: 20 },
      { name: "Salesforce", value: 20 },
      { name: "Angular", value: 30 },
      { name: "React", value: 20 },
      { name: "AWS", value: 10 },
    ],
  },
  {
    range: "2023–Present",
    title: "Ocean Health Systems · Software Developer · .NET APIs + Angular",
    data: [
      { name: ".NET/C#", value: 40 },
      { name: "Angular", value: 40 },
      { name: "React", value: 10 },
      { name: "Azure", value: 10 },
    ],
  },
];

const Dot = ({ color }) => (
  <span
    aria-hidden="true"
    style={{ background: color }}
    className="inline-block h-2 w-2 rounded-full"
  />
);

export default function AboutTimeline() {
  return (
    <div className="grid gap-12">
      {M.map((m, i) => (
        <div key={i} className="flex items-center gap-6">
          {/* mini pie */}
          <div className="h-28 w-28 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={m.data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={24}
                  outerRadius={40}
                  paddingAngle={2}
                  stroke="rgba(255,255,255,.25)"
                  strokeWidth={1}
                >
                  {m.data.map((s, idx) => (
                    <Cell
                      key={idx}
                      fill={COLOR_MAP[s.name] || "rgba(255,255,255,.6)"}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* text + compact legend */}
          <div className="min-w-0">
            <h3 className="m-0 text-sm uppercase tracking-wide text-white/70">
              {m.range}
            </h3>
            <p className="m-0 text-lg font-semibold text-[var(--color-emerald)]">
              {m.title}
            </p>

            <ul
              className="mt-2 flex flex-wrap gap-3 text-xs text-white/85"
              role="list"
            >
              {m.data.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Dot color={COLOR_MAP[s.name] || "rgba(255,255,255,.6)"} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
