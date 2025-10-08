"use client";

import { MessageSquare, Send, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { useState } from "react";
import { askQuestion } from "@/ai/ai-support-chatbot";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Como posso ajudar a impulsionar seu Instagram hoje?",
      sender: "bot",
    },
    {
      id: 2,
      text: "Você pode me perguntar sobre nossos pacotes, o processo de entrega ou métodos de pagamento.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askQuestion({ question: input });
      const botResponse: Message = {
        id: Date.now() + 1,
        text: response.answer,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "Desculpe, não consegui processar sua pergunta. Tente novamente.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-accent shadow-lg hover:bg-accent/90"
          size="icon"
          aria-label="Abrir chat de suporte"
        >
          <MessageSquare className="h-8 w-8 text-accent-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[calc(100vw-32px)] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl p-0 flex flex-col mr-4 mb-2"
      >
        <div className="flex items-center justify-between p-4 bg-primary rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary-foreground text-primary">
                IT
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-primary-foreground">Suporte InstaTurbo</h3>
              <p className="text-xs text-primary-foreground/80">
                Normalmente respondemos instantaneamente
              </p>
            </div>
          </div>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">IT</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">IT</AvatarFallback>
              </Avatar>
              <div className="max-w-[75%] rounded-2xl px-4 py-2 text-sm bg-muted text-muted-foreground rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
              autoComplete="off"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 shrink-0" disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar</span>
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
