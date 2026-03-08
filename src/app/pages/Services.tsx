import { Trophy, Shield, Building2, Users, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Trophy,
      title: "Community-Led Rural Sports Meets",
      brief: "We act as the implementation partner for visionary supporters, transforming shared goals into high-energy sports festivals. From professional officiating to national-standard equipment, we bring the 'Big League' experience to the heart of rural India. These meets are more than games—they are the primary scouting grounds for the nation's untapped potential.",
      anchor: "Turning a shared vision into the roar of a thousand cheering students.",
      image: "https://images.unsplash.com/photo-1663347118222-dd9037195795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGluZGlhbiUyMGNoaWxkcmVuJTIwcnVubmluZyUyMHNwb3J0c3xlbnwxfHx8fDE3NzI4OTk0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Shield,
      title: "The 'Talent Guard' Financial Aid",
      brief: "Through dedicated sponsorship and grants, we identify students from the most economically fragile backgrounds and provide them with a safety net. This service covers tuition fees, sports kits, and specialized nutrition, ensuring that a family's financial struggle never forces a talented child to hang up their boots.",
      anchor: "Because the only thing a child should be worried about is their form, not their fees.",
      image: "https://images.unsplash.com/photo-1768696082133-024fedbdbc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBzaG9lcyUyMGdlYXJ8ZW58MXx8fHwxNzcyODk5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Building2,
      title: "Sustainable School Infrastructure",
      brief: "We utilize partner capital to build lasting legacies. Our team identifies rural schools with neglected grounds and upgrades them with leveled playing surfaces, goalposts, and safe equipment. This service ensures that the impact of our projects lasts for generations of students, long after the first event is over.",
      anchor: "Building the foundations today for the champions of 2032.",
      image: "https://wp.scoopwhoop.com/wp-content/uploads/2021/09/614ed74d8a373a1f9294b94d_d71d8500-908b-478d-a2ca-b56b6d17a1e8.jpg",
    },
    {
      icon: Users,
      title: "Grassroots Coaching & Mentorship",
      brief: "Dedicated funding allows us to bring 'Elite Academy' knowledge to village schools. We deploy certified coaches to conduct workshops for both students and local physical education teachers. By 'training the trainers,' we create a self-sustaining ecosystem of athletic excellence in every district we touch.",
      anchor: "Bridging the gap between raw grit and professional grace.",
      image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaGluZyUyMHRyYWluaW5nJTIweW91bmd8ZW58MXx8fHwxNzcyODk5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const partnershipBenefits = [
    "Measurable Impact: Real-time data on student-athlete progress",
    "Last-Mile Visibility: Deep engagement at the heart of rural communities",
    "Full Transparency: Regular impact reports and transparent fund utilization certificates",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/07/pv-sindhu.jpg"
            alt="PV Sindhu"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl">
            Transforming communities through comprehensive sports development programs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    {service.brief}
                  </p>
                  <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-primary italic font-medium">
                      "{service.anchor}"
                    </p>
                  </div>
                </div>
                <div className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership of Purpose */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              A Partnership of Purpose
            </h2>
            <p className="text-lg text-foreground mb-6 text-center">
              Our services are meticulously designed to maximize social impact. We provide our partners and donors with:
            </p>
            <div className="space-y-4 max-w-2xl mx-auto">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg text-center">
              <p className="text-xl italic">
                "Our community partners are investing in your children's dreams. Let's play!"
              </p>
              <p className="mt-4 text-sm opacity-90">For the Public</p>
            </div>
            <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-8 rounded-lg text-center">
              <p className="text-xl italic">
                "The world is watching, and the support is here. It's your time to shine."
              </p>
              <p className="mt-4 text-sm opacity-90">For the Students</p>
            </div>
            <div className="bg-gradient-to-br from-accent to-accent/80 text-white p-8 rounded-lg text-center">
              <p className="text-xl italic">
                "Don't just provide a gift—fuel a movement."
              </p>
              <p className="mt-4 text-sm opacity-90">For the Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8">
            Partner with us to transform rural sports infrastructure and empower the next generation of champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors"
            >
              Become a Partner
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
