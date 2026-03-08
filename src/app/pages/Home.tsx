import { Link } from "react-router";
import { Trophy, Shield, Building2, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const stats = [
    { value: "500+", label: "Schools Activated" },
    { value: "₹XX Cr", label: "Invested in Student Futures" },
    { value: "15,000+", label: "Female Athletes Empowered" },
    { value: "12", label: "Districts Covered" },
  ];

  const services = [
    {
      icon: Trophy,
      title: "Rural Sports Meets",
      description: "Professional-grade tournaments in remote school clusters, bringing elite standards to village grounds.",
      anchor: "The road to the Olympics starts in a village schoolyard.",
    },
    {
      icon: Shield,
      title: "The Talent Shield",
      description: "Comprehensive financial coverage for education and gear, ensuring poverty never benches a champion.",
      anchor: "No dream should be grounded for lack of gear.",
    },
    {
      icon: Building2,
      title: "Sustainable Infrastructure",
      description: "Dedicated grants to level playgrounds and install solar-lit facilities in rural schools.",
      anchor: "Building fields of hope for generations to come.",
    },
  ];

  const stories = [
    {
      name: "Muhamad Raneef T A",
      image: "/raneef.jpeg",
      description: "HRM Postgraduate | Aspiring HR Professional | Physical Educator | Skilled in Recruitment, Conflict Resolution & Student Engagement | Passionate About People Development",
      quote: "National Level Athlete",
    },
    {
      name: "Arun Francis",
      image: "/arun.jpeg",
      description: "Disciplined professional with experience in competitive sports, coaching, and organizational coordination.",
      quote: "National Level Athlete | Netball Coach (MG University) | Business & Sports Professional",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/fvohc7saaaacx11-1655287589.jpg"
          alt="Indian athletes celebrating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Fueling Rural Grit. Powering National Dreams.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Transforming shared vision into grassroots reality. We identify, fund, and mentor the next generation of Indian athletes in the heartlands where talent is born.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
            >
              Join the Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/achievements"
              className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-white/90 text-secondary rounded-lg transition-colors"
            >
              View Our Rural Impact
            </Link>
          </motion.div>
          <p className="mt-8 text-lg italic">
            "Talent is universal; opportunity is not. We are here to change the math."
          </p>
        </div>
      </section>

      {/* Our Identity */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Where Shared Purpose Meets Grassroots Potential
            </h2>
            <p className="text-lg text-foreground mb-6">
              We are a donor-supported organization dedicated to the "unreached" student-athlete. We believe that support shouldn't just be a transaction—it should be a pair of shoes for a runner, a scholarship for a dreamer, and a stadium for a village.
            </p>
            <p className="text-primary text-xl italic font-medium">
              "Your belief is the wind beneath their feet."
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Building pathways from village grounds to national stages
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground mb-4">{service.description}</p>
                <p className="text-primary italic text-sm">"{service.anchor}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Scoreboard of Transformation
            </h2>
            <p className="text-xl opacity-90">
              We don't just utilize funds; we build a legacy. Every contribution is tracked to ensure it creates a tangible social impact and changes lives on the ground.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl italic">
            "We don't just measure growth; we measure the rise of a nation."
          </p>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The Founders of Flexon Foundation
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white border border-border overflow-hidden hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-contain transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary/90 text-white px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm">
                      Founder
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-lg text-foreground/80 mb-6 flex-1 italic leading-relaxed">
                    "{story.description}"
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                    <p className="text-primary font-medium text-lg mb-6 flex items-start gap-2">
                      <Heart className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>"{story.quote}"</span>
                    </p>
                    <Link
                      to="/achievements"
                      className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      Read Story Details
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/achievements"
              className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
            >
              Browse All Success Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Transparent. Accountable. Impact-Driven.
            </h2>
            <p className="text-lg text-foreground mb-6">
              We provide our partners and donors with end-to-end transparency—from 80G tax benefits to real-time field photography and verified impact assessments.
            </p>
            <p className="text-primary text-xl italic font-medium">
              "Integrity in our process; Excellence on the field."
            </p>
            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <div className="bg-background px-6 py-3 shadow-sm border border-border">
                <span className="text-accent font-semibold">✓ 80G Certified</span>
              </div>
              <div className="bg-background px-6 py-3 shadow-sm border border-border">
                <span className="text-accent font-semibold">✓ Impact Verified</span>
              </div>
              <div className="bg-background px-6 py-3 shadow-sm border border-border">
                <span className="text-accent font-semibold">✓ Full Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The game is just beginning. Let's play for India.
          </h2>
          <p className="text-xl mb-8 italic">
            "Your belief. Their life-changing opportunity."
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors text-lg font-semibold"
          >
            Start Making a Difference
            <Heart className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
