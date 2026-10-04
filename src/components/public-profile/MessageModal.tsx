import { CheckCircle2, Send, X } from "lucide-react";
import { useState } from "react";

type MessageModalProps = {
  onClose: () => void;
};

export function MessageModal({ onClose }: MessageModalProps) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (message.trim()) setSent(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="message-title">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">New message</p>
            <h2 id="message-title" className="mt-1 text-xl font-bold text-foreground">Message Harshit</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close message dialog" className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground">
            <X className="size-5" />
          </button>
        </div>
        {sent ? (
          <div className="mt-8 flex flex-col items-center gap-3 py-5 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent-secondary/15 text-accent-secondary"><CheckCircle2 className="size-7" /></span>
            <h3 className="font-bold text-foreground">Message sent</h3>
            <p className="text-sm text-muted-foreground">Harshit will get back to you soon.</p>
            <button type="button" onClick={onClose} className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">Your message</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Start a conversation..." rows={5} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" />
            <button type="submit" disabled={!message.trim()} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
              <Send className="size-4" />
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
