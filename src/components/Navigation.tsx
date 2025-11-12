import { NavLink } from "@/components/NavLink";
import { Home, Heart, Compass, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Navigation = () => {
  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/swipe", icon: Sparkles, label: "Swipe" },
    { to: "/wardrobe", icon: Heart, label: "Wardrobe" },
    { to: "/explore", icon: Compass, label: "Explore" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text"
          >
            FitSwipe
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={link.to}
                  className="flex items-center gap-2 px-4 py-2 rounded-full transition-smooth text-muted-foreground hover:text-foreground"
                  activeClassName="bg-primary text-primary-foreground glow"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="font-medium">{link.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t">
        <div className="flex items-center justify-around py-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-smooth text-muted-foreground"
              activeClassName="text-primary"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
