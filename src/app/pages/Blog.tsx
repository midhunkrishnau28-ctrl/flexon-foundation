import { BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Blog() {
  const blogCategories = [
    {
      title: "The Champion's Journey",
      description: "Student Spotlights",
      icon: Award,
      color: "from-primary to-primary/80",
    },
    {
      title: "The Partnership Pulse",
      description: "Collaborative Stories",
      icon: Users,
      color: "from-secondary to-secondary/80",
    },
    {
      title: "Voices from the Ground",
      description: "Coach & Teacher Perspectives",
      icon: BookOpen,
      color: "from-accent to-accent/80",
    },
  ];

  const featuredPosts = [
    {
      title: "More Than a Jersey: What a Professional Kit Means to a Rural Athlete",
      category: "The Champion's Journey",
      excerpt: "For many, it's just fabric. For a boy in a remote village, it's a uniform of dignity that says, 'I belong on this stage.'",
      image: "https://images.unsplash.com/photo-1768696082133-024fedbdbc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBlcXVpcG1lbnQlMjBzaG9lcyUyMGdlYXJ8ZW58MXx8fHwxNzcyODk5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 5, 2026",
    },
    {
      title: "The 5:00 AM Club: A Day in the Life of a Rural Scholarship Student",
      category: "The Champion's Journey",
      excerpt: "Before the sun rises and the chores begin, there is a race to be won. See how your support fuels the early hours of excellence.",
      image: "https://images.unsplash.com/photo-1640504409849-da005a55cbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhdGhsZXRlJTIwcnVubmluZyUyMHRyYWNrfGVufDF8fHx8MTc3Mjg5OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 3, 2026",
    },
    {
      title: "From Barren Land to 'Field of Dreams': The Transformation of Vidarbha School",
      category: "The Partnership Pulse",
      excerpt: "Dust and stones used to be their only teammates. Today, thanks to our dedicated partners, they have a leveled ground and a future.",
      image: "https://images.unsplash.com/photo-1664077858175-1b64e8f24748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwc3BvcnRzJTIwZmllbGR8ZW58MXx8fHwxNzcyODk5NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "March 1, 2026",
    },
    {
      title: "Breaking Barriers: How Kanya Shakti is Changing Village Mindsets",
      category: "Voices from the Ground",
      excerpt: "Local coaches share how female participation in sports has transformed not just athletes, but entire communities.",
      image: "https://images.unsplash.com/photo-1659081436930-f86b3ed51dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnaXJsJTIwc3BvcnRzJTIwY2hhbXBpb258ZW58MXx8fHwxNzcyODk5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 28, 2026",
    },
    {
      title: "When Equipment Arrives: A Teacher's Perspective on Rural Sports",
      category: "Voices from the Ground",
      excerpt: "PE teachers describe the incredible surge in student morale once professional equipment and kits arrive at their schools.",
      image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaGluZyUyMHRyYWluaW5nJTIweW91bmd8ZW58MXx8fHwxNzcyODk5NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 25, 2026",
    },
    {
      title: "The Ripple Effect: How One Scholarship Student Inspired a Village",
      category: "The Champion's Journey",
      excerpt: "When Ramesh won his first medal, something changed in his village. Now, enrollment in the sports program has tripled.",
      image: "https://images.unsplash.com/photo-1765994898026-4fa84ade4a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwxfHx8fDE3NzI4OTk0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "February 22, 2026",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://th.bing.com/th/id/R.ff4e2eb083b1175ca0eff4657bc80403?rik=xhtUAO816DgDZg&riu=http%3a%2f%2fcyclingmonks.com%2fwp-content%2fuploads%2f2021%2f02%2fDSC_3021-copy.jpg&ehk=u4eceyVi2dB4ixa8iQa%2f7Iw1xs2L5UI2jqPk5zKK1OM%3d&risl=&pid=ImgRaw&r=0"
          alt="Cycling in rural India"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Field Report
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Stories of Grit, Growth, and Grace
          </p>
          <p className="text-lg italic">
            "Every post is a testament to a dream that refused to stay silent."
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground leading-relaxed">
            Welcome to our journal of impact. Here, we document the journeys of rural athletes, the transformation of village schools, and the power of collective action in motion. This is where statistics turn into smiles and shared belief turns into a brighter future.
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Explore Our Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive into different perspectives of our grassroots movement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-8 hover:shadow-xl transition-shadow cursor-pointer`}
              >
                <category.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="opacity-90">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Descriptions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                The Champion's Journey
              </h3>
              <p className="text-foreground mb-2">
                Deep-dive interviews with the students who are defying the odds. We track their progress from their first local sports meet to their academic achievements, showing how timely support has removed the weight of poverty from their shoulders.
              </p>
              <p className="text-primary italic">
                "A hero isn't born in a stadium; they are forged in the early morning runs on a village road."
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                The Partnership Pulse
              </h3>
              <p className="text-foreground mb-2">
                Highlighting the power of shared vision. These articles showcase our partners—not just as supporters, but as catalysts for change. We share how dedicated funding is utilized on the ground to build infrastructure and revitalize local communities.
              </p>
              <p className="text-secondary italic">
                "Collaborative excellence meets community resilience."
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Voices from the Ground
              </h3>
              <p className="text-foreground mb-2">
                Perspectives from rural physical education teachers and local coaches. They share the challenges of grassroots sports and the incredible surge in student morale once professional equipment and kits arrive.
              </p>
              <p className="text-accent italic">
                "When you give a teacher the right tools, they build a nation of leaders."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent highlights from the field
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Ticker Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary to-secondary/90 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Monthly Milestone</h3>
            <p className="text-xl mb-6">
              "This month, our journal featured 5 villages and celebrated 3 new major community partnerships."
            </p>
            <p className="text-lg italic mb-6">
              "Your read today is their reality tomorrow."
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
              Subscribe for Impact Updates
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl mb-8">
            Every story we share represents a life transformed by collective support. Your contribution can create the next success story.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-lg transition-colors text-lg font-semibold"
          >
            Write the Next Chapter
          </a>
        </div>
      </section>
    </div>
  );
}
