import { useState } from "react";
import { Bell, Heart, MessageCircle, UserPlus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";

type NotificationType = "follow" | "like" | "comment" | "event";

interface Notification {
  id: number;
  type: NotificationType;
  actor: string;
  actorInitial: string;
  message: string;
  time: string;
  read: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    type: "follow",
    actor: "Verde Vivo",
    actorInitial: "V",
    message: "começou a te seguir.",
    time: "2 min atrás",
    read: false,
  },
  {
    id: 2,
    type: "like",
    actor: "Educação para Todos",
    actorInitial: "E",
    message: "curtiu sua publicação.",
    time: "15 min atrás",
    read: false,
  },
  {
    id: 3,
    type: "comment",
    actor: "Patas Amigas",
    actorInitial: "P",
    message: 'comentou na sua publicação: "Incrível iniciativa! 🌱"',
    time: "1h atrás",
    read: false,
  },
  {
    id: 4,
    type: "event",
    actor: "Saúde na Comunidade",
    actorInitial: "S",
    message: "criou um novo evento: Mutirão de Saúde — BH.",
    time: "3h atrás",
    read: true,
  },
  {
    id: 5,
    type: "follow",
    actor: "Ação Jovem",
    actorInitial: "A",
    message: "começou a te seguir.",
    time: "5h atrás",
    read: true,
  },
  {
    id: 6,
    type: "like",
    actor: "Verde Vivo",
    actorInitial: "V",
    message: "curtiu sua publicação.",
    time: "ontem",
    read: true,
  },
  {
    id: 7,
    type: "event",
    actor: "Educação para Todos",
    actorInitial: "E",
    message: "atualizou o evento: Aulas de Reforço — Sábado.",
    time: "ontem",
    read: true,
  },
];

const iconByType: Record<NotificationType, React.ReactNode> = {
  follow: <UserPlus size={12} />,
  like: <Heart size={12} />,
  comment: <MessageCircle size={12} />,
  event: <Calendar size={12} />,
};

const colorByType: Record<NotificationType, string> = {
  follow: "bg-primary/10 text-primary",
  like: "bg-red-100 text-red-500",
  comment: "bg-blue-100 text-blue-500",
  event: "bg-amber-100 text-amber-500",
};

const Notifications = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const displayed =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-foreground">
            Notificações
          </h1>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-sm text-primary hover:underline"
            >
              Marcar todas como lidas
            </button>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setFilter("all")}
          >
            Todas
          </Button>
          <Button
            variant={filter === "unread" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setFilter("unread")}
          >
            Não lidas {unreadCount > 0 ? `(${unreadCount})` : ""}
          </Button>
        </div>

        {/* Notification list */}
        <div className="flex flex-col gap-3">
          {displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
              <Bell size={40} className="opacity-30" />
              <p className="text-sm">Nenhuma notificação não lida.</p>
            </div>
          ) : (
            displayed.map((n) => (
              <div
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`flex items-start gap-4 bg-card rounded-2xl px-5 py-4 cursor-pointer transition hover:shadow-sm border ${
                  !n.read
                    ? "border-l-4 border-l-primary border-t-border border-r-border border-b-border"
                    : "border-border"
                }`}
              >
                {/* Avatar com ícone do tipo */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-base">
                    {n.actorInitial}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${colorByType[n.type]}`}
                  >
                    {iconByType[n.type]}
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{n.actor}</span> {n.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                </div>

                {/* Bolinha não lida */}
                {!n.read && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
