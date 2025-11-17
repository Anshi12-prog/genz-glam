import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = {
    style: ["Streetwear", "Aesthetic", "Casual", "Formal", "Vintage"],
    color: ["Black", "White", "Pastels", "Neon", "Earth Tones"],
    brand: ["Urban Vibe", "RetroFit", "Clean Lines", "Flash Forward", "Soft Power"],
  };

  const items = [
    // ...item list unchanged for brevity
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleLike = (itemName) => {
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
          <h1 className="text-4xl font-bold mb-2">[translate:Explore Fashion]</h1>
          <p className="text-muted-foreground">Discover trending styles from top brands</p>
        </motion.div>

        {/* Search Bar */}
        {/* ...rest unchanged */}

        {/* Filters */}
        {/* ...rest unchanged */}

        {/* Items Grid - Masonry Layout */}
        {/* ...rest unchanged */}

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

