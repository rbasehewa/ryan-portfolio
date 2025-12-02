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
    range: "2013–2016",
    title: "Associate Software Engineer (Healthcare, LK)",
    data: [
      { name: ".NET/C#", value: 70 },
      { name: "REST APIs", value: 20 },
      { name: "Soft Skills", value: 10 },
    ],
  },
  {
    range: "2016–2018",
    title: "Assistant Support Engineer (Linux) · Master’s",
    data: [
      { name: "Linux", value: 60 },
      { name: ".NET/C#", value: 20 },
      { name: "AWS", value: 10 },
      { name: "Soft Skills", value: 10 },
    ],
  },
  {
    range: "2018–2019",
    title: "Enee Solutions · Software Developer",
    data: [
      { name: "Laravel", value: 50 },
      { name: "REST APIs", value: 25 },
      { name: "AWS", value: 15 },
      { name: ".NET/C#", value: 10 },
    ],
  },
  {
    range: "2019–2020",
    title: "ITechYouLearn (EdTech) · Software Developer",
    data: [
      { name: ".NET/C#", value: 35 },
      { name: "React", value: 25 },
      { name: "AWS", value: 25 },
      { name: "REST APIs", value: 15 },
    ],
  },
  {
    range: "2020–2021",
    title: "ZippyCrowd · Frontend Developer",
    data: [
      { name: "React", value: 60 },
      { name: "REST APIs", value: 25 },
      { name: "Soft Skills", value: 15 },
    ],
  },
  {
    range: "Oct 2021–Jan 2024",
    title: "Vocus Group (Dodo / iPrimus) · Frontend Engineer",
    data: [
      { name: "Angular", value: 50 },
      { name: "Salesforce", value: 20 },
      { name: ".NET/C#", value: 10 },
      { name: "React", value: 10 },
      { name: "AWS", value: 10 },
    ],
  },
  {
    range: "Jan 2024–Present",
    title: "Ocean Health Systems · Software Engineer",
    data: [
      { name: "Angular", value: 30 },
      { name: ".NET/C#", value: 20 },
      { name: "Django", value: 20 },
      { name: "Azure", value: 10 },
      { name: "REST APIs", value: 20 },
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
{[...M].reverse().map((m) => (
  <div key={`${m.range}-${m.title}`} className="flex items-center gap-6">
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
