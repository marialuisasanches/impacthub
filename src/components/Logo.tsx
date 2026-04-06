import { Leaf } from "lucide-react";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 28, text: "text-2xl" },
    lg: { icon: 36, text: "text-3xl" },
  };

  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary rounded-xl p-1.5">
        <Leaf className="text-primary-foreground" size={sizes[size].icon} />
      </div>
      <span className={`${sizes[size].text} font-bold text-foreground`}>
        Impact<span className="text-primary"> Hub</span>
      </span>
    </div>
  );
};

export default Logo;
