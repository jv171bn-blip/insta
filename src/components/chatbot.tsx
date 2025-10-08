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

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you boost your Instagram today?",
      sender: "bot",
    },
    {
      id: 2,
      text: "You can ask me about our packages, the delivery process, or payment methods.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "Thanks for your question! One of our human agents will get back to you shortly. For now, check our FAQ section for common questions.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-accent shadow-lg hover:bg-accent/90"
          size="icon"
          aria-label="Open support chat"
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
                IB
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-primary-foreground">InstaBoost Support</h3>
              <p className="text-xs text-primary-foreground/80">
                We typically reply instantly
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
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">IB</AvatarFallback>
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
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
            />
            <Button type="submit" size="icon" className="bg-accent hover:bg-accent/90 shrink-0">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
