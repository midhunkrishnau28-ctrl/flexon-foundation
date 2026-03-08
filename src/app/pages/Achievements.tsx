import { Trophy, GraduationCap, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "motion/react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "The Grassroots Gold Standard",
      brief: "Through strategic community partnerships, we have successfully transformed over 150+ rural schoolyards into functional sporting hubs. By providing professional-grade equipment and standardized tournament formats, we have moved the needle from 'informal play' to 'competitive excellence' for over 25,000 student-athletes.",
      anchor: "Success isn't just about the trophy; it's about the transformation of a village playground into a center of hope.",
    },
    {
      icon: GraduationCap,
      title: "The 'Zero-Dropout' Milestone",
      brief: "Financial insecurity is the leading cause of rural school dropouts. By utilizing dedicated grants for educational and sports scholarships, we have achieved a 98% school retention rate among our sponsored athletes. We don't just fund players; we safeguard the academic future of India's next generation.",
      anchor: "We measure our victory not by the seconds on a clock, but by the years a child stays in school.",
    },
    {
      icon: Award,
      title: "National-Level Breakthroughs",
      brief: "Our scouting programs have bridged the gap between the village and the national stage. In the last two years, 42 of our rural scholars have qualified for State and National level trials. These are children who, without external backing, might never have owned a pair of professional running spikes.",
      anchor: "Distance is a physical reality, but talent knows no boundaries.",
    },
    {
      icon: Users,
      title: "Inclusivity in Motion",
      brief: "Breaking social barriers through sport is a core pillar of our mission. We are proud to report a 55% increase in female participation across our rural sports meets. By engaging parents and local leaders, we have turned 'sports for girls' from a conversation into a celebration.",
      anchor: "When a girl runs, she chases away the shadows of a thousand limitations.",
    },
  ];

  const impactData = [
    {
      metric: "Direct Beneficiaries",
      achievement: "50,000+ Students",
      value: "Every ₹1 invested creates ₹4 in social return",
    },
    {
      metric: "Rural Reach",
      achievement: "12 Districts Covered",
      value: "Bridging the urban-rural divide in sports infrastructure",
    },
    {
      metric: "Equipment Kits",
      achievement: "15,000+ Kits",
      value: "High-quality gear reducing injury rates by 60%",
    },
    {
      metric: "Community Impact",
      achievement: "200+ Teachers Trained",
      value: "Building sustainable sports leadership at the village level",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cricinformer.com/wp-content/uploads/2023/04/sachin-tendulkar.jpg"
            alt="Sachin Tendulkar"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h1>
          <p className="text-xl">
            Milestones Powered by Shared Purpose
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-muted rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {achievement.title}
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  {achievement.brief}
                </p>
                <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-primary italic font-medium">
                    "{achievement.anchor}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Data */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Impact Data: The Transparency Block
            </h2>
            <p className="text-lg text-muted-foreground">
              Tangible results of dedicated funding and community support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h4 className="font-semibold text-secondary mb-2">
                  {data.metric}
                </h4>
                <div className="text-3xl font-bold text-primary mb-2">
                  {data.achievement}
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Governance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Accountability Commitment
            </h2>
            <p className="text-xl leading-relaxed">
              "We maintain the highest standards of financial integrity. We provide detailed quarterly impact reports and fund utilization transparency for all our primary partners and individual donors."
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white text-secondary px-6 py-3 rounded-lg">
                <span className="font-semibold">Quarterly Reports</span>
              </div>
              <div className="bg-white text-secondary px-6 py-3 rounded-lg">
                <span className="font-semibold">Fund Transparency</span>
              </div>
              <div className="bg-white text-secondary px-6 py-3 rounded-lg">
                <span className="font-semibold">Impact Verification</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real people, real transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-50 overflow-hidden">
                <img
                  src="/raneef.jpeg"
                  alt="Muhamad Raneef T A"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-secondary mb-2">
                  Muhamad Raneef T A
                </h3>
                <p className="text-foreground mb-3">
                  HRM Postgraduate | Aspiring HR Professional | Physical Educator | Skilled in Recruitment, Conflict Resolution & Student Engagement | Passionate About People Development
                </p>
                <p className="text-sm text-primary italic font-medium">
                  "National Level Athlete"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-50 overflow-hidden">
                <img
                  src="/arun.jpeg"
                  alt="Arun Francis"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-secondary mb-2">
                  Arun Francis
                </h3>
                <p className="text-foreground mb-3">
                  Disciplined professional with experience in competitive sports, coaching, and organizational coordination.
                </p>
                <p className="text-sm text-primary italic font-medium">
                  "National Level Athlete | Netball Coach (MG University) | Business & Sports Professional"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Vision, Their Reality
          </h2>
          <p className="text-xl mb-4">
            Achievements are shared milestones. Every medal won in a rural school is a testament to the support that funded the dream.
          </p>
          <p className="text-xl italic mb-8">
            Let's move the scoreboard together.
          </p>
          <p className="text-2xl font-semibold mb-8">
            "Passion meets Purpose: Investing in the grit of rural India."
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors text-lg font-semibold"
          >
            Be Part of the Success Story
          </a>
        </div>
      </section>
    </div>
  );
}
