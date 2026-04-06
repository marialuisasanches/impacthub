const categoryColors: Record<string, string> = {
  "Meio Ambiente": "bg-emerald-100 text-emerald-800",
  "Educação": "bg-blue-100 text-blue-800",
  "Animais": "bg-amber-100 text-amber-800",
  "Saúde": "bg-rose-100 text-rose-800",
  "Cultura": "bg-purple-100 text-purple-800",
  "Direitos Humanos": "bg-orange-100 text-orange-800",
  "Esporte": "bg-cyan-100 text-cyan-800",
  "Alimentação": "bg-yellow-100 text-yellow-800",
};

const CategoryBadge = ({ category }: { category: string }) => {
  const colors = categoryColors[category] || "bg-muted text-muted-foreground";
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;
