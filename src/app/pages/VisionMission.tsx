import { Target, Compass, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function VisionMission() {
  const missionPoints = [
    {
      title: "Strategic Scouting",
      description: "To utilize dedicated resources to reach the 'unreachable,' providing professional platforms for rural students to showcase their talent.",
      icon: Target,
    },
    {
      title: "Economic Stability",
      description: "To deploy grants and sponsorships as a shield against school dropouts, providing full financial support for the education and nutrition of our athletes.",
      icon: Users,
    },
    {
      title: "Legacy Building",
      description: "To create sustainable, high-impact sports infrastructure that transforms the rural landscape, ensuring that every investment in our youth lives on for decades.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://3.bp.blogspot.com/-pfL65IbQvaY/XCkOI1dPtwI/AAAAAAAAO8c/Dk3vtQcgXG05-haqz11cdQczPzatrCHJQCLcBGAs/s1600/Md_Anas_1.JPG"
            alt="Md Anas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vision & Mission
          </h1>
          <p className="text-xl">
            Building the foundation for India's sporting excellence
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Compass className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Shaping a Nation of Champions, Powered by Shared Purpose
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              To see an India where the "poverty of opportunity" no longer exists. We envision a future where every rural school playground is a center of excellence, and every underprivileged student has a dedicated bridge to reach their highest potential in sports and life.
            </p>
            <p className="text-primary text-xl italic font-medium">
              "We don't just see a rural village; we see a nursery for the world's next legends."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Translating Collective Support into Grassroots Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is built on three strategic pillars that transform intention into impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {point.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-primary text-xl italic font-medium">
              "Our mission is simple: To ensure that the only thing a child has to bring to the field is their talent."
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Approach
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-secondary mb-2">
                    Community-First Design
                  </h3>
                  <p className="text-foreground">
                    Every program is designed with input from local communities, ensuring our solutions address real needs on the ground.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-secondary mb-2">
                    Sustainable Impact
                  </h3>
                  <p className="text-foreground">
                    We don't just create temporary programs; we build infrastructure and systems that continue to benefit communities for years to come.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-secondary mb-2">
                    Measurable Outcomes
                  </h3>
                  <p className="text-foreground">
                    Every initiative is tracked with clear metrics, ensuring accountability and demonstrable social impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://footballworldindia.com/wp-content/uploads/2024/03/ARW01761-1.jpg"
                alt="Athletes training on a field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in This Mission
          </h2>
          <p className="text-xl mb-8">
            Together, we can transform rural India into a powerhouse of athletic talent and achievement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors"
            >
              Support Our Mission
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors border-2 border-white"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
