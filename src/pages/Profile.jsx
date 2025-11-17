import { useState } from "react";
import { motion } from "framer-motion";
import { User, Settings, Moon, Sun, Edit, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [preferences, setPreferences] = useState([
    "[translate:Streetwear]",
    "[translate:Aesthetic]",
    "[translate:Casual]",
    "[translate:Vintage]",
  ]);

  const allStyles = [
    "[translate:Streetwear]",
    "[translate:Aesthetic]",
    "[translate:Casual]",
    "[translate:Formal]",
    "[translate:Vintage]",
    "[translate:Minimalist]",
    "[translate:Grunge]",
    "[translate:Y2K]",
  ];

  const stats = [
    { label: "[translate:Items Liked]", value: "127", icon: Heart },
    { label: "[translate:Swipes]", value: "1.2K", icon: Sparkles },
    { label: "[translate:Outfits Created]", value: "45", icon: User },
  ];

  const togglePreference = (style) => {
    setPreferences(prev =>
      prev.includes(style)
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-24 md:pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Profile Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <Card className="glass card-elevated">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-primary glow">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 bg-primary"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">[translate:Jamie Doe]</h1>
                  <p className="text-muted-foreground mb-4">@jamiedoe • [translate:Fashion Enthusiast]</p>

                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <stat.icon className="w-4 h-4 text-primary" />
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="rounded-full glass">
                  <Settings className="w-4 h-4 mr-2" />
                  [translate:Settings]
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Fashion Preferences */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="glass card-elevated">
            <CardHeader>
              <CardTitle>[translate:Fashion Preferences]</CardTitle>
              <CardDescription>
                [translate:Select your favorite styles to get personalized recommendations]
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allStyles.map((style) => (
                  <Badge
                    key={style}
                    variant={preferences.includes(style) ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 rounded-full transition-smooth ${
                      preferences.includes(style) ? "bg-primary glow" : "glass"
                    }`}
                    onClick={() => togglePreference(style)}
                  >
                    {style}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Appearance Settings */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass card-elevated">
            <CardHeader>
              <CardTitle>[translate:Appearance]</CardTitle>
              <CardDescription>
                [translate:Customize how FitSwipe looks for you]
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl glass">
                  <div className="flex items-center gap-3">
                    {darkMode ? (
                      <Moon className="w-5 h-5 text-primary" />
                    ) : (
                      <Sun className="w-5 h-5 text-primary" />
                    )}
                    <div>
                      <p className="font-medium">[translate:Dark Mode]</p>
                      <p className="text-sm text-muted-foreground">
                        [translate:Switch between light and dark themes]
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>

                <div className="p-4 rounded-xl glass">
                  <p className="font-medium mb-2">[translate:Color Accent]</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground" />
                    <button className="w-10 h-10 rounded-full bg-secondary" />
                    <button className="w-10 h-10 rounded-full bg-accent" />
                    <button className="w-10 h-10 rounded-full bg-destructive" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

