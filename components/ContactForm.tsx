"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("Preencha os campos obrigatórios.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar sua mensagem. Tente novamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl bg-card border border-borderc px-4 py-3 text-sm text-text-primary focus:border-blue-electric outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-text-secondary mb-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-card border border-borderc px-4 py-3 text-sm text-text-primary focus:border-blue-electric outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-text-secondary mb-2">
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-xl bg-card border border-borderc px-4 py-3 text-sm text-text-primary focus:border-blue-electric outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl bg-card border border-borderc px-4 py-3 text-sm text-text-primary focus:border-blue-electric outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-bg hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 size={16} /> Mensagem enviada com sucesso. Obrigado pelo contato!
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} /> {errorMsg}
        </p>
      )}
    </form>
  );
}
