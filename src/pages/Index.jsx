import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const Index = () => {
  const navigate = useNavigate();

  const trendingItems = [
    // ...items unchanged for brevity
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-16 pb-20 md:pb-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">[translate:Discover Your Style]</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                [translate:Swipe Your]
                <span className="block gradient-text">[translate:Next Outfit]</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                [translate:The most fun way to discover fashion. Swipe through curated pieces, 
                save what you love, and build your dream wardrobe.]
              </p>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/swipe")}
                  className="rounded-full bg-primary hover:bg-primary/90 glow transition-smooth"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  [translate:Start Swiping]
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/explore")}
                  className="rounded-full glass border-primary/30"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  [translate:Explore Trends]
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden card-elevated animate-float">
                <img
                  src={heroImage}
                  alt="[translate:Fashion collection]"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">[translate:Trending Now]</h2>
              <p className="text-muted-foreground mt-2">[translate:What everyone's swiping right on]</p>
            </div>
            <Button variant="ghost" className="rounded-full">
              [translate:View All]
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl card-elevated">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full aspect-[3/4] object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-primary font-bold">{item.price}</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;

