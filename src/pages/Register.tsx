import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";
import { Leaf } from "lucide-react";

const Register = () => {
  const [userType, setUserType] = useState<"voluntario" | "ong">("voluntario");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <Leaf size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 -rotate-45">
        <Leaf size={140} className="text-primary" />
      </div>

      <Card className="w-full max-w-md shadow-lg border-0">
        <CardContent className="p-8">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>

          <p className="text-center text-muted-foreground mb-6">
            Crie sua conta e faça parte da rede
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="Seu nome" className="focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-email">E-mail</Label>
              <Input id="reg-email" type="email" placeholder="seu@email.com" className="focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-password">Senha</Label>
              <Input id="reg-password" type="password" placeholder="••••••••" className="focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar senha</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" className="focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label>Tipo de usuário</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={userType === "voluntario" ? "default" : "outline"}
                  className="flex-1 rounded-full"
                  onClick={() => setUserType("voluntario")}
                >
                  Voluntário
                </Button>
                <Button
                  type="button"
                  variant={userType === "ong" ? "default" : "outline"}
                  className="flex-1 rounded-full"
                  onClick={() => setUserType("ong")}
                >
                  ONG
                </Button>
              </div>
            </div>

            {userType === "ong" && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <Label htmlFor="ong-name">Nome da ONG</Label>
                <Input id="ong-name" placeholder="Nome da organização" className="focus-visible:ring-primary" />
              </div>
            )}

            <Button type="submit" className="w-full rounded-full text-base h-11">
              Criar conta
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Já tem conta?{" "}
            <Link to="/" className="text-primary font-medium hover:underline">
              Entrar
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
