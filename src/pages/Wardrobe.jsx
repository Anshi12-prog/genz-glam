import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Wardrobe = () => {
  const [likedItems, setLikedItems] = useState([
    {
      id: 1,
      name: "Oversized Lavender Hoodie",
      brand: "Urban Vibe",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      tags: ["Streetwear", "Casual"],
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      brand: "RetroFit",
      price: "$125",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      tags: ["Vintage", "Casual"],
    },
    {
      id: 3,
      name: "Minimal White Crop Top",
      brand: "Clean Lines",
      price: "$45",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop",
      tags: ["Aesthetic", "Casual"],
    },
    {
      id: 4,
      name: "Neon Windbreaker",
      brand: "Flash Forward",
      price: "$95",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      tags: ["Streetwear"],
    },
    {
      id: 5,
      name: "Pastel Pink Blazer",
      brand: "Soft Power",
      price: "$145",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop",
      tags: ["Formal", "Aesthetic"],
    },
    {
      id: 6,
      name: "Retro Sneakers",
      brand: "StepUp",
      price: "$110",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      tags: ["Streetwear", "Casual"],
    },
  ]);

  const handleRemove = (id: number) => {
    setLikedItems(likedItems.filter(item => item.id !== id));
    toast.error("Removed from wardrobe");
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Wardrobe</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                {likedItems.length} items saved
              </p>
            </div>
            <Button className="rounded-full glass glow">
              <ShoppingBag className="w-4 h-4 mr-2" />
              View Cart
            </Button>
          </div>
        </motion.div>

        {/* Grid Layout - Pinterest Style */}
        {likedItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {likedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <div className="group relative overflow-hidden rounded-2xl card-elevated glass">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-cover transition-smooth group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.brand}</p>
                      <p className="text-primary font-bold text-xl mb-3">{item.price}</p>
                      
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="rounded-full"
                          onClick={() => handleRemove(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full w-10 h-10 glass"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Heart className="w-5 h-5 fill-primary text-primary" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Your wardrobe is empty</h2>
              <p className="text-muted-foreground">
                Start swiping to add items you love!
              </p>
              <Button className="rounded-full">Start Swiping</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Wardrobe;
