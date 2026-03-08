import { Heart, Shield, Trophy, Building2, CheckCircle2, FileText } from "lucide-react";
import { motion } from "motion/react";

export function Donate() {
  const investmentTiers = [
    {
      amount: "₹5,000",
      title: "The Athlete's Kit",
      description: "Provides a student with professional spikes, a jersey, and a training gear bag.",
      anchor: "Dress them for the podium they deserve.",
      icon: Shield,
    },
    {
      amount: "₹25,000",
      title: "The Talent Scholarship",
      description: "Covers a student's school tuition and sports nutrition for a full academic year.",
      anchor: "Remove the weight of poverty from a champion's shoulders.",
      icon: Trophy,
    },
    {
      amount: "₹1,00,000",
      title: "The Village Meet",
      description: "Funds an entire inter-school sports event for 10+ rural schools.",
      anchor: "Create a festival of hope in a place the world forgot.",
      icon: Heart,
    },
    {
      amount: "₹5,00,000",
      title: "The Legacy Ground",
      description: "Funds the leveling and infrastructure of a permanent rural school sports facility.",
      anchor: "Build a 'Field of Dreams' that lasts for generations.",
      icon: Building2,
    },
  ];

  const trustBenefits = [
    {
      title: "Direct Impact Reports",
      description: "Clear proof of how and where your funds were used",
      icon: FileText,
    },
    {
      title: "80G Tax Benefits",
      description: "All donations are eligible for tax exemptions under Indian law",
      icon: CheckCircle2,
    },
    {
      title: "Field Stories",
      description: "Geo-tagged photos and video updates of the students you support",
      icon: Heart,
    },
    {
      title: "Verified Governance",
      description: "Highest standards of financial integrity and non-profit certification",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1765994898026-4fa84ade4a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwxfHx8fDE3NzI4OTk0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Donate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Invest in India's Untapped Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Your contribution is more than a gift; it's a direct investment in the health, education, and athletic future of rural India.
          </p>
          <p className="text-lg italic">
            "Your support today is their breakthrough tomorrow."
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            We believe that every child deserves a fair start at the finish line. By joining our mission, you turn a student's hidden potential into a national legacy.
          </p>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Investment Tiers
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose how you want to transform lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <tier.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {tier.amount}
                    </div>
                    <h3 className="text-xl font-bold text-secondary">
                      {tier.title}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <div className="bg-muted p-4 rounded-lg border-l-4 border-primary mb-6">
                  <p className="text-primary italic font-medium">
                    "{tier.anchor}"
                  </p>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors font-semibold">
                  Contribute {tier.amount}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-12 py-4 rounded-lg transition-colors text-lg font-semibold">
              Make a Custom Donation
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Transparent Giving. Impact-Driven Results.
            </h2>
            <p className="text-lg text-muted-foreground">
              We respect the trust you place in us. To ensure your contribution makes the maximum impact:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary text-xl italic font-medium">
              "Integrity is our foundation; impact is our result."
            </p>
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "Don't just make a donation; fuel a movement."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "The best return on your kindness is a child's confident smile."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "When you fund a rural athlete, you are nurturing a future leader for India."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "Your belief in their talent is their greatest strength."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "Distance is just a number when we run together for a cause."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg italic text-foreground">
                "Every rupee invested is a barrier broken for a rural family."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent to-accent/90 text-white rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                80G Tax Benefits
              </h2>
              <p className="text-xl">
                Your donation qualifies for tax deductions under Section 80G of the Income Tax Act
              </p>
            </div>
            <div className="bg-white text-foreground rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">How it works:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1 mr-2" />
                  <span>50% of your donation is eligible for tax deduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1 mr-2" />
                  <span>You will receive an official 80G certificate within 7 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1 mr-2" />
                  <span>All donations are fully documented and verified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Thousands Making a Difference
          </h2>
          <p className="text-xl mb-8">
            Together, we are building a legacy of athletic excellence and educational empowerment in rural India.
          </p>
          <button className="inline-flex items-center justify-center px-12 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-lg font-semibold">
            <Heart className="mr-2 w-6 h-6" />
            Donate Now
          </button>
          <p className="mt-8 text-lg italic">
            "Your contribution today creates champions tomorrow."
          </p>
        </div>
      </section>
    </div>
  );
}
