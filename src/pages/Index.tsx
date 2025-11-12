import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

const Index = () => {
  const navigate = useNavigate();

  const trendingItems = [
    { id: 1, name: "Vintage Denim Jacket", price: "$89", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
    { id: 2, name: "Pastel Hoodie", price: "$65", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop" },
    { id: 3, name: "Aesthetic Crop Top", price: "$42", image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop" },
    { id: 4, name: "Streetwear Sneakers", price: "$120", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop" },
    { id: 5, name: "Minimal Tote Bag", price: "$55", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop" },
    { id: 6, name: "Neon Windbreaker", price: "$78", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
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
                <span className="text-sm font-medium">Discover Your Style</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Swipe Your
                <span className="block gradient-text">Next Outfit</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                The most fun way to discover fashion. Swipe through curated pieces, 
                save what you love, and build your dream wardrobe.
              </p>
              
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/swipe")}
                  className="rounded-full bg-primary hover:bg-primary/90 glow transition-smooth"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Swiping
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/explore")}
                  className="rounded-full glass border-primary/30"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Explore Trends
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
                  alt="Fashion collection"
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
              <h2 className="text-3xl md:text-4xl font-bold">Trending Now</h2>
              <p className="text-muted-foreground mt-2">What everyone's swiping right on</p>
            </div>
            <Button variant="ghost" className="rounded-full">
              View All
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
