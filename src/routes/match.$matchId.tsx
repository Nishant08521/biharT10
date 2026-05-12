import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";
import patnaLogo from "@/assets/patna.png";
import gayaLogo from "@/assets/gaya.png";

export const Route = createFileRoute("/match/$matchId")({
  component: MatchScorecard,
  head: () => ({
    meta: [
      { title: "Match Scorecard — Bihar T10 League 2026" },
      { name: "description", content: "View detailed scorecard, player performances, and match summary." },
    ],
  }),
});

function MatchScorecard() {
  const { matchId } = Route.useParams();

  // Mock match data
  const match = {
    id: matchId,
    t1: { name: "PATNA PIONEERS", logo: patnaLogo, score: "124/4", overs: "10.0" },
    t2: { name: "GAYA GLADIATORS", logo: gayaLogo, score: "118/7", overs: "10.0" },
    result: "Patna Pioneers won by 6 runs",
    venue: "Moin-ul-Haq Stadium, Patna",
    date: "FEB 14, 2026",
    status: "Completed",
    potm: "Rahul Singh (54* off 22)",
  };

  const batting = [
    { name: "Rahul Singh", status: "not out", r: 54, b: 22, fours: 4, sixes: 5, sr: 245.5 },
    { name: "Amit Kumar", status: "c & b Sharma", r: 28, b: 15, fours: 3, sixes: 1, sr: 186.7 },
    { name: "Sanjay Yadav", status: "run out", r: 12, b: 8, fours: 1, sixes: 0, sr: 150.0 },
    { name: "Vikram Roy", status: "b Khan", r: 15, b: 10, fours: 2, sixes: 0, sr: 150.0 },
    { name: "Deepak Jha", status: "not out", r: 8, b: 5, fours: 1, sixes: 0, sr: 160.0 },
  ];

  const bowling = [
    { name: "Mohit Khan", o: 2.0, m: 0, r: 18, w: 1, econ: 9.0 },
    { name: "Rajesh Sharma", o: 2.0, m: 0, r: 24, w: 1, econ: 12.0 },
    { name: "Ishan Ali", o: 2.0, m: 0, r: 32, w: 0, econ: 16.0 },
    { name: "Sandeep V.", o: 2.0, m: 0, r: 22, w: 0, econ: 11.0 },
    { name: "Pankaj G.", o: 2.0, m: 0, r: 25, w: 0, econ: 12.5 },
  ];

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Match Header */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden mb-8 shadow-glow">
          <div className="bg-secondary/50 p-4 border-b border-border flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gold text-xs tracking-widest font-bold uppercase">
              <Trophy className="h-4 w-4" /> BIHAR T10 LEAGUE · MATCH {matchId}
            </div>
            <div className="text-xs text-muted-foreground flex gap-4">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {match.date}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {match.venue}</span>
            </div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-4 flex-1">
              <img src={match.t1.logo} alt="" className="h-32 w-32 object-contain drop-shadow-glow" />
              <div className="text-center">
                <h2 className="display text-3xl mb-1">{match.t1.name}</h2>
                <div className="display text-5xl text-gold">{match.t1.score}</div>
                <div className="text-sm text-muted-foreground mt-1">({match.t1.overs} Overs)</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-gold text-xl tracking-[0.4em] px-4 py-2 border border-gold/30 rounded-full mb-4">VS</div>
              <div className="text-center md:hidden">
                <div className="display text-2xl text-gradient-gold uppercase tracking-widest">{match.result}</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 flex-1">
              <img src={match.t2.logo} alt="" className="h-32 w-32 object-contain drop-shadow-glow" />
              <div className="text-center">
                <h2 className="display text-3xl mb-1">{match.t2.name}</h2>
                <div className="display text-5xl text-gold">{match.t2.score}</div>
                <div className="text-sm text-muted-foreground mt-1">({match.t2.overs} Overs)</div>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 p-4 border-t border-gold/20 text-center">
            <div className="display text-2xl text-gold uppercase tracking-wider">{match.result}</div>
          </div>
        </div>

        {/* POTM */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-muted-foreground">PLAYER OF THE MATCH</div>
              <div className="display text-xl text-foreground">{match.potm}</div>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Batting */}
          <div className="space-y-4">
            <h3 className="display text-2xl text-gold">BATTING · {match.t1.name}</h3>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-secondary/50 text-muted-foreground uppercase text-[10px] tracking-widest">
                    <th className="p-4">Batsman</th>
                    <th className="p-4 text-right">R</th>
                    <th className="p-4 text-right">B</th>
                    <th className="p-4 text-right">4s</th>
                    <th className="p-4 text-right">6s</th>
                    <th className="p-4 text-right hidden sm:table-cell">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {batting.map((b) => (
                    <tr key={b.name} className="border-t border-border/50">
                      <td className="p-4">
                        <div className="font-bold">{b.name}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">{b.status}</div>
                      </td>
                      <td className="p-4 text-right font-bold text-gold">{b.r}</td>
                      <td className="p-4 text-right text-muted-foreground">{b.b}</td>
                      <td className="p-4 text-right">{b.fours}</td>
                      <td className="p-4 text-right">{b.sixes}</td>
                      <td className="p-4 text-right hidden sm:table-cell text-muted-foreground">{b.sr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bowling */}
          <div className="space-y-4">
            <h3 className="display text-2xl text-gold">BOWLING · {match.t2.name}</h3>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-secondary/50 text-muted-foreground uppercase text-[10px] tracking-widest">
                    <th className="p-4">Bowler</th>
                    <th className="p-4 text-right">O</th>
                    <th className="p-4 text-right">M</th>
                    <th className="p-4 text-right">R</th>
                    <th className="p-4 text-right text-gold">W</th>
                    <th className="p-4 text-right hidden sm:table-cell">ECON</th>
                  </tr>
                </thead>
                <tbody>
                  {bowling.map((bw) => (
                    <tr key={bw.name} className="border-t border-border/50">
                      <td className="p-4 font-bold">{bw.name}</td>
                      <td className="p-4 text-right">{bw.o}</td>
                      <td className="p-4 text-right">{bw.m}</td>
                      <td className="p-4 text-right">{bw.r}</td>
                      <td className="p-4 text-right font-bold text-gold">{bw.w}</td>
                      <td className="p-4 text-right hidden sm:table-cell text-muted-foreground">{bw.econ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
