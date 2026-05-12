import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import patnaLogo from "@/assets/patna.png";
import gayaLogo from "@/assets/gaya.png";
import muzaffarpurLogo from "@/assets/muzaffarpur.png";
import bhagalpurLogo from "@/assets/bhagalpur.png";
import darbhangaLogo from "@/assets/darbhanga.png";
import purniaLogo from "@/assets/purnia.png";
import araLogo from "@/assets/ara.png";
import begusaraiLogo from "@/assets/begusarai.png";

export const Route = createFileRoute("/match-center")({
  component: MatchCenter,
  head: () => ({
    meta: [
      { title: "Match Center — Bihar T10 League 2026" },
      { name: "description", content: "Check the points table, player statistics, and match results for the Bihar T10 League 2026." },
    ],
  }),
});

const pointsTable = [
  { pos: 1, name: "PATNA PIONEERS", logo: patnaLogo, p: 5, w: 4, l: 1, nr: 0, pts: 8, nrr: "+1.250", qualified: true },
  { pos: 2, name: "GAYA GLADIATORS", logo: gayaLogo, p: 5, w: 3, l: 2, nr: 0, pts: 6, nrr: "+0.840", qualified: true },
  { pos: 3, name: "MUZAFFARPUR MAVERICKS", logo: muzaffarpurLogo, p: 5, w: 3, l: 2, nr: 0, pts: 6, nrr: "+0.420", qualified: false },
  { pos: 4, name: "BHAGALPUR BLAZE", logo: bhagalpurLogo, p: 5, w: 3, l: 2, nr: 0, pts: 6, nrr: "-0.150", qualified: false },
  { pos: 5, name: "DARBHANGA DIAMONDS", logo: darbhangaLogo, p: 5, w: 2, l: 3, nr: 0, pts: 4, nrr: "+0.120", qualified: false },
  { pos: 6, name: "PURNIA PANTHERS", logo: purniaLogo, p: 5, w: 2, l: 3, nr: 0, pts: 4, nrr: "-0.450", qualified: false },
  { pos: 7, name: "ARA AVENGERS", logo: araLogo, p: 5, w: 2, l: 3, nr: 0, pts: 4, nrr: "-0.880", qualified: false },
  { pos: 8, name: "BEGUSARAI BULLS", logo: begusaraiLogo, p: 5, w: 1, l: 4, nr: 0, pts: 2, nrr: "-1.120", qualified: false },
];

function MatchCenter() {
  const [activeTab, setActiveTab] = useState("points-table");

  const tabs = [
    { id: "points-table", label: "Points Table" },
    { id: "player-stats", label: "Player Stats" },
    { id: "results", label: "Results" },
    { id: "mvp", label: "Season MVP" },
  ];

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">MATCH CENTER</div>
        <h1 className="display text-6xl md:text-8xl mb-12">League <span className="text-gradient-gold">Standings.</span></h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md font-bold tracking-wider text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "bg-card border border-border text-muted-foreground hover:border-gold/40"
              }`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>

        {activeTab === "points-table" ? (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/50 text-gold text-xs tracking-[0.2em] font-bold">
                  <th className="p-5 border-b border-border w-16">POS</th>
                  <th className="p-5 border-b border-border">TEAM</th>
                  <th className="p-5 border-b border-border text-center">P</th>
                  <th className="p-5 border-b border-border text-center">W</th>
                  <th className="p-5 border-b border-border text-center">L</th>
                  <th className="p-5 border-b border-border text-center">NR</th>
                  <th className="p-5 border-b border-border text-center">PTS</th>
                  <th className="p-5 border-b border-border text-center">NRR</th>
                </tr>
              </thead>
              <tbody>
                {pointsTable.map((team) => (
                  <tr key={team.name} className="hover:bg-secondary/30 transition-colors border-b border-border/50 last:border-0">
                    <td className="p-5">
                      <div className={`display text-2xl ${team.pos <= 4 ? "text-gold" : "text-muted-foreground"}`}>
                        {team.pos < 10 ? `0${team.pos}` : team.pos}
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <img src={team.logo} alt="" className="h-10 w-10 object-contain drop-shadow-md" />
                        <div>
                          <div className="font-bold tracking-wide flex items-center gap-2">
                            {team.name}
                            {team.qualified && (
                              <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full border border-gold/30">
                                QUALIFIED
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] tracking-[0.2em] text-muted-foreground">FRANCHISE</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 text-center font-bold">{team.p}</td>
                    <td className="p-5 text-center text-emerald-500 font-bold">{team.w}</td>
                    <td className="p-5 text-center text-rose-500 font-bold">{team.l}</td>
                    <td className="p-5 text-center text-muted-foreground">{team.nr}</td>
                    <td className="p-5 text-center">
                      <div className="display text-2xl text-gold">{team.pts}</div>
                    </td>
                    <td className="p-5 text-center font-mono text-sm text-muted-foreground">{team.nrr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 text-center bg-card border border-border rounded-2xl">
            <div className="display text-3xl text-muted-foreground">Coming Soon</div>
            <p className="mt-2 text-muted-foreground">Statistics are being compiled as the season progresses.</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
