import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = {
    style: ["Streetwear", "Aesthetic", "Casual", "Formal", "Vintage"],
    color: ["Black", "White", "Pastels", "Neon", "Earth Tones"],
    brand: ["Urban Vibe", "RetroFit", "Clean Lines", "Flash Forward", "Soft Power"],
  };

  const items = [
    {
      id: 1,
      name: "Oversized Lavender Hoodie",
      brand: "Urban Vibe",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop",
      trending: true,
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      brand: "RetroFit",
      price: "$125",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      trending: true,
    },
    {
      id: 3,
      name: "Minimal White Crop Top",
      brand: "Clean Lines",
      price: "$45",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=700&fit=crop",
      trending: false,
    },
    {
      id: 4,
      name: "Neon Windbreaker",
      brand: "Flash Forward",
      price: "$95",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=550&fit=crop",
      trending: true,
    },
    {
      id: 5,
      name: "Pastel Pink Blazer",
      brand: "Soft Power",
      price: "$145",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop",
      trending: false,
    },
    {
      id: 6,
      name: "Retro Sneakers",
      brand: "StepUp",
      price: "$110",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      trending: true,
    },
    {
      id: 7,
      name: "Graphic Tee",
      brand: "Urban Vibe",
      price: "$35",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=550&fit=crop",
      trending: false,
    },
    {
      id: 8,
      name: "Cargo Pants",
      brand: "Flash Forward",
      price: "$78",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=700&fit=crop",
      trending: true,
    },
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleLike = (itemName: string) => {
    toast.success(`${itemName} added to wardrobe! ❤️`);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Explore Fashion</h1>
          <p className="text-muted-foreground">Discover trending styles from top brands</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for styles, brands, or items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 rounded-full glass border-primary/30"
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold">Filters</h3>
          </div>
          
          {Object.entries(filters).map(([category, options]) => (
            <div key={category} className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 capitalize">{category}</p>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <Badge
                    key={option}
                    variant={selectedFilters.includes(option) ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 rounded-full transition-smooth ${
                      selectedFilters.includes(option) ? "bg-primary glow" : "glass"
                    }`}
                    onClick={() => toggleFilter(option)}
                  >
                    {option}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Items Grid - Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl card-elevated glass">
                {item.trending && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary glow rounded-full">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-cover transition-smooth group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.brand}</p>
                    <p className="text-primary font-bold text-xl mb-4">{item.price}</p>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                        onClick={() => handleLike(item.name)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full glass"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Quick Like Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button
                    size="icon"
                    className="rounded-full w-10 h-10 bg-primary glow"
                    onClick={() => handleLike(item.name)}
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="rounded-full glass">
            Load More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
