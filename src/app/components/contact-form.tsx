"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitContactForm } from "../actions";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      const response = await submitContactForm(formData);
      setMessage(response.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="p-6 bg-card text-card-foreground">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Name
          </label>
          <Input id="name" name="name" required className="bg-background" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-background"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="bg-background"
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p className="text-sm text-center mt-4 text-muted-foreground">
            {message}
          </p>
        )}
      </form>
    </Card>
  );
}
