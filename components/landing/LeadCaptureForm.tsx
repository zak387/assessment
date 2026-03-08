"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";

export default function LeadCaptureForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!firstName.trim() || !email.trim()) { setError("Please fill in both fields."); return; }
    setLoading(true);
    try {
      const { data, error: dbError } = await supabase
        .from("leads")
        .insert({ first_name: firstName.trim(), email: email.trim().toLowerCase() })
        .select("id")
        .single();
      if (dbError) throw dbError;
      sessionStorage.setItem("leadId", data.id);
    } catch (err) {
      console.warn("Supabase lead save failed, continuing anyway:", err);
      sessionStorage.setItem("leadId", "preview-lead");
    }
    sessionStorage.setItem("firstName", firstName.trim());
    router.push("/assessment");
  }

  return (
    <section id="get-started" className="py-10 sm:py-14">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-border rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage text-center mb-2">Get Your Free Score</p>
        <h3 className="text-lg font-bold text-center text-brown mb-6">
          Where should we send your results?
        </h3>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-brown mb-1.5">First Name</label>
            <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name" required
              className="w-full px-4 py-3 border border-gray-border rounded-xl text-base text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brown mb-1.5">Email Address</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" required
              className="w-full px-4 py-3 border border-gray-border rounded-xl text-base text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors" />
          </div>
        </div>
        {error && <p className="text-risk-high text-sm text-center mb-4">{error}</p>}
        <Button type="submit" size="lg" disabled={loading} className="w-full">
          {loading ? "Starting..." : "Get My Free Score →"}
        </Button>
        <p className="text-xs text-brown-light text-center mt-4">Your information is secure and will never be shared.</p>
      </form>
    </section>
  );
}
