"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const {toast} = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send email");
      }

     return toast({
        description:<p className="text-green-500">Message sent successfully.</p>
      })
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch{
     return toast({
      description:<p className="text-red-500">Couldn&apos;t send message. Try again..</p>
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto text-center my-20 max-w-4xl p-5">
      <h1 className="text-5xl font-greatVibes font-extrabold mb-10">Contact Me</h1>
      <p className="text-3xl font-light font-greatVibes text-muted-foreground mb-5">
        Feel free to reach out via the form below or through email/phone.
      </p>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
        <Link
          href="mailto:ingshelpidy@gmail.com"
          className="flex items-center gap-2 text-primary text-lg font-semibold hover:underline"
        >
          <span className="bg-neutral-100 rounded-full p-4 dark:bg-neutral-800">
            <Mail className="w-5 h-5" />
          </span>
          ingshelpidy@gmail.com
        </Link>
        <Link
          href="tel:+23279027241"
          className="flex items-center gap-2 text-primary text-lg font-semibold hover:underline"
        >
          <span className="bg-neutral-100 rounded-full p-4 dark:bg-neutral-800">
            <Phone className="w-5 h-5" />
          </span>
          +232 79 027241
        </Link>
        <Link
          href="tel:+23288722317"
          className="flex items-center gap-2 text-primary text-lg font-semibold hover:underline"
        >
          <span className="bg-neutral-100 rounded-full p-4 dark:bg-neutral-800">
            <Phone className="w-5 h-5" />
          </span>
          +232 88 722317
        </Link>
      </div>

      {/* Contact Form */}
      <form
        className="bg-card p-4 md:p-10 rounded-lg shadow-lg dark:shadow-black space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full"
            required
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="w-full"
            required
          />
        </div>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full"
          rows={5}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />}
          Send Message
        </Button>
      </form>
    </section>
  );
}
