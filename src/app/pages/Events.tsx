import { Trophy, Award, Target, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function Events() {
  const eventCategories = [
    {
      title: "The 'Gramin' Athletics Championship",
      brief: "A professional track and field meet designed for rural school students. We provide specialized tracks, electronic timing, and professional spikes. This event identifies the fastest and strongest students who have been honed by the rugged terrain of their home villages.",
      commitment: "Fully funded travel, professional kits, and nutrition for every participant.",
      anchor: "Barefoot on the soil today, gold on the podium tomorrow.",
      icon: Trophy,
    },
    {
      title: "The 'Kanya Shakti' Sports Fest",
      brief: "Dedicated exclusively to female athletes in rural areas. This event breaks social barriers by encouraging girls to participate in football, kabaddi, and volleyball. It is a celebration of grit, proving that leadership and sport are for everyone.",
      commitment: "Supported by partners committed to gender equality and women's empowerment.",
      anchor: "When a girl runs, she outpaces a thousand limitations.",
      icon: Award,
    },
    {
      title: "Talent Scouting & Trial Camps",
      brief: "Specialized, high-intensity camps where top performers from our school meets receive elite assessment. Certified national coaches provide technical feedback, and high-potential students are selected for our long-term financial scholarship programs.",
      commitment: "Powered by sponsorships focusing on human potential and long-term skill building.",
      anchor: "Raw talent is found; champions are built.",
      icon: Target,
    },
  ];

  const stats = [
    { value: "250+", label: "Total Events Hosted" },
    { value: "1,200+", label: "Villages Covered" },
    { value: "5,000+", label: "Prizes Distributed" },
    { value: "15+", label: "Community Partners Involved" },
  ];

  const upcomingEvents = [
    {
      name: "District Level Athletics Meet",
      date: "March 25, 2026",
      location: "Vidarbha Region",
      participants: "500+ Students",
    },
    {
      name: "Kanya Shakti Football Tournament",
      date: "April 10, 2026",
      location: "Maharashtra",
      participants: "300+ Female Athletes",
    },
    {
      name: "Talent Scouting Camp",
      date: "April 28, 2026",
      location: "Gujarat",
      participants: "150+ Elite Performers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10" />
        <img
          src="https://wallpapers.com/images/hd/indian-cricket-team-field-victory-5m4qefu7qksjdpo9.jpg"
          alt="Indian cricket team victory"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Arena of Opportunity
          </h1>
          <p className="text-xl md:text-2xl">
            Where Rural Talent Meets Global Standards
          </p>
          <p className="mt-6 text-lg italic">
            "A whistle in a village can echo across the world."
          </p>
        </div>
      </section>

      {/* Event Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground leading-relaxed">
            Our events are the heartbeat of our mission. Funded entirely by our dedicated partners and supporters, these sports meets act as the primary scouting grounds for India's next generation of athletes. We bring a professional stadium experience—complete with high-quality gear, officiating, and awards—to the most remote school clusters.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Event Categories
            </h2>
          </div>

          <div className="space-y-8">
            {eventCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {category.title}
                    </h3>
                    <p className="text-foreground mb-4 leading-relaxed">
                      {category.brief}
                    </p>
                    <div className="bg-accent/10 p-4 rounded-lg mb-3">
                      <p className="text-accent font-semibold">
                        Our Commitment: {category.commitment}
                      </p>
                    </div>
                    <p className="text-primary italic font-medium">
                      "{category.anchor}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Beyond the Scoreboard
            </h2>
            <p className="text-xl leading-relaxed text-center mb-6">
              Every event we host is a data-rich environment. We track student growth, school attendance post-event, and community engagement. For our sponsors, these events provide the tangible satisfaction of seeing their investment in social change come to life through the athletes' success.
            </p>
            <p className="text-2xl italic text-center">
              "We don't just crown winners; we ignite a community's hope."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Event Impact by Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in celebrating rural talent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {event.name}
                </h3>
                <div className="space-y-2 text-foreground">
                  <p>📍 {event.location}</p>
                  <p>👥 {event.participants}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg italic text-foreground">
                "The dirt on their jerseys is the mark of a dream in progress."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg italic text-foreground">
                "Every finish line crossed is a barrier broken for a rural family."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg italic text-foreground">
                "Powered by Shared Purpose. Won by Village Grit."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Events
          </h2>
          <p className="text-xl mb-8">
            Every event is an opportunity to discover and nurture rural talent. Your support makes these transformative experiences possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors"
            >
              Sponsor an Event
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors border-2 border-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
