import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Swipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const moods = ["Casual", "Aesthetic", "Streetwear", "Formal", "Vintage"];
  const [selectedMood, setSelectedMood] = useState("Casual");

  const items = [
    {
      id: 1,
      name: "[translate:Oversized Lavender Hoodie]",
      brand: "[translate:Urban Vibe]",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
      description: "[translate:Cozy oversized fit with pastel lavender tone]",
      tags: ["Streetwear", "Casual"],
    },
    {
      id: 2,
      name: "[translate:Vintage Denim Jacket]",
      brand: "[translate:RetroFit]",
      price: "$125",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
      description: "[translate:Classic 90s-inspired denim with distressed details]",
      tags: ["Vintage", "Casual"],
    },
    {
      id: 3,
      name: "[translate:Minimal White Crop Top]",
      brand: "[translate:Clean Lines]",
      price: "$45",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop",
      description: "[translate:Essential piece for every wardrobe]",
      tags: ["Aesthetic", "Casual"],
    },
    {
      id: 4,
      name: "[translate:Neon Windbreaker]",
      brand: "[translate:Flash Forward]",
      price: "$95",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
      description: "[translate:Bold neon accents with waterproof material]",
      tags: ["Streetwear"],
    },
    {
      id: 5,
      name: "[translate:Pastel Pink Blazer]",
      brand: "[translate:Soft Power]",
      price: "$145",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop",
      description: "[translate:Structured fit with a playful pastel twist]",
      tags: ["Formal", "Aesthetic"],
    },
  ];

  const currentItem = items[currentIndex];

  const handleSwipe = (liked) => {
    setDirection(liked ? "right" : "left");

    setTimeout(() => {
      if (liked) {
        toast.success(`${currentItem.name} [translate:added to wardrobe!] ❤️`);
      }

      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        toast("[translate:No more items to swipe! Starting over...]");
      }
      setDirection(null);
    }, 300);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Mood Selector */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 flex flex-wrap gap-2 justify-center"
        >
          {moods.map((mood) => (
            <Badge
              key={mood}
              variant={selectedMood === mood ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 rounded-full transition-smooth ${
                selectedMood === mood ? "bg-primary glow" : "glass"
              }`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </Badge>
          ))}
        </motion.div>

        {/* Swipe Card */}
        <div className="max-w-md mx-auto relative h-[600px]">
          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={currentItem.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: direction === "left" ? -500 : direction === "right" ? 500 : 0,
                  rotate: direction === "left" ? -30 : direction === "right" ? 30 : 0,
                }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-3xl overflow-hidden card-elevated glass">
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-foreground">{currentItem.name}</h2>
                        <p className="text-muted-foreground">{currentItem.brand}</p>
                        <p className="text-xl font-bold text-primary">{currentItem.price}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="rounded-full glass">
                        <Info className="w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">{currentItem.description}</p>

                    <div className="flex gap-2">
                      {currentItem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <Button
            size="lg"
            onClick={() => handleSwipe(false)}
            className="w-16 h-16 rounded-full bg-destructive hover:bg-destructive/90 glow"
          >
            <X className="w-8 h-8" />
          </Button>

          <Button
            size="lg"
            onClick={() => handleSwipe(true)}
            className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 glow"
          >
            <Heart className="w-10 h-10" />
          </Button>
        </motion.div>

        {/* Counter */}
        <div className="text-center mt-6 text-muted-foreground">
          {currentIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
};

export default Swipe;

