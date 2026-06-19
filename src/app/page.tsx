import Link from "next/link";
import type { Metadata } from "next";
import {
  MessageSquare,
  Users,
  GitBranch,
  Radio,
  Zap,
  Workflow,
  Inbox,
  BarChart3,
  Shield,
  Smartphone,
  MessageCircle,
  Send,
  Bot,
  Globe,
  Settings,
  Download,
  CheckCircle2,
  DollarSign,
  Infinity,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Chatio — Free Forever CRM WhatsApp Cloud API Integrated | Best Customer Management Software",
  description:
    "The best customer management software with WhatsApp Cloud API. Free forever CRM with shared inbox, bulk WhatsApp sender, contact management, pipelines, automations, and no-code flows. Supports 20+ currencies.",
  keywords: [
    "crm relationship management",
    "crm customer management",
    "crm customer relationship",
    "whatsapp bulk message sender free",
    "best customer management software",
    "bulk whatsapp sender free",
    "whatsapp cloud api",
    "free crm",
    "whatsapp crm",
    "customer relationship management",
    "free whatsapp crm",
    "whatsapp business crm",
  ],
  openGraph: {
    title: "Chatio — Free Forever WhatsApp CRM",
    description:
      "The best customer management software for WhatsApp. Free forever CRM with shared inbox, bulk WhatsApp sender, contact management, pipelines, automations. Supports 20+ currencies.",
  },
};

const features = [
  {
    icon: Inbox,
    title: "Shared Inbox",
    description:
      "Team-wide WhatsApp inbox with real-time messaging, typing indicators, read receipts, and reactions. Never miss a customer message again.",
  },
  {
    icon: Users,
    title: "Contact Management",
    description:
      "Organise contacts with custom fields, tags, and CSV import. Track every interaction and keep customer data clean, searchable, and always up-to-date.",
  },
  {
    icon: GitBranch,
    title: "Sales Pipelines",
    description:
      "Kanban-style deal tracking with custom stages, multi-currency deal values, and pipeline analytics. Move deals from lead to won with full visibility in INR, USD, EUR, and more.",
  },
  {
    icon: Radio,
    title: "Bulk WhatsApp Sender",
    description:
      "Send broadcast messages to thousands of contacts in a few clicks. Use pre-approved Message Templates for instant, compliant delivery via the WhatsApp Cloud API.",
  },
  {
    icon: Zap,
    title: "No-Code Automations",
    description:
      "Trigger-based automations for follow-ups, welcome messages, and alerts. Set keywords, schedules, and conditions – no coding required.",
  },
  {
    icon: Workflow,
    title: "Flow Builder",
    description:
      "Drag-and-drop visual flow builder for conversational experiences. Create FAQ bots, lead capture flows, and interactive menus effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "Real-time metrics on conversations, response times, pipeline health, and team performance. Make data-driven decisions in seconds.",
  },
  {
    icon: Send,
    title: "WhatsApp Cloud API",
    description:
      "Fully integrated with Meta's official WhatsApp Cloud API. Reliable delivery, rich media messages, and complete compliance with WhatsApp Business policies.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Add teammates with role-based access (Admin, Agent, Viewer). Assign conversations, share contacts, and work together seamlessly.",
  },
  {
    icon: Settings,
    title: "Message Templates",
    description:
      "Create, manage, and submit WhatsApp Message Templates. Use them in broadcasts, automations, and flows for consistent brand communication.",
  },
  {
    icon: Bot,
    title: "Smart Automations",
    description:
      "Auto-reply to keywords, send scheduled messages, trigger workflows based on deal stage changes. Reduce manual work and respond faster.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Your data stays safe with end-to-end encryption, role-based access, and compliance with global privacy standards. Enterprise-grade protection without the complexity.",
  },
];

const faqs = [
  {
    q: "Is Chatio really free forever?",
    a: "Yes! Chatio is completely free forever. There are no hidden charges, no paid plans, and no credit card required. You get all features without any restrictions.",
  },
  {
    q: "Do I need my own WhatsApp Business API?",
    a: "Yes, Chatio uses Meta's official WhatsApp Cloud API. You need a WhatsApp Business Account (free to set up) and a phone number. We guide you through the entire setup process in minutes.",
  },
  {
    q: "Can I send bulk WhatsApp messages for free?",
    a: "Absolutely. Chatio includes a free bulk WhatsApp sender. You only pay Meta's standard messaging fees (which are minimal). There's no markup or premium from Chatio.",
  },
  {
    q: "Is it a CRM or just a WhatsApp tool?",
    a: "It's a full CRM with WhatsApp at its core. You get contact management, sales pipelines, team inbox, analytics, automations, and more – all built around WhatsApp messaging.",
  },
  {
    q: "Can I use Chatio with my team?",
    a: "Yes! Invite unlimited team members and assign role-based access. Share contacts, assign conversations, and collaborate in real time.",
  },
  {
    q: "What currencies are supported?",
    a: "Chatio supports 20+ currencies including INR, USD, EUR, GBP, and many more for deal values and pipeline tracking. Perfect for global businesses, startups, and agencies.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. Chatio runs on secure cloud infrastructure with enterprise-grade encryption and regular backups. Your data is fully protected, never shared, and always compliant with international security standards.",
  },
  {
    q: "How do I get started?",
    a: "Sign up for free, connect your WhatsApp Business Account, and you're ready to go. The entire setup takes less than 10 minutes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageSquare className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold text-foreground">Chatio</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Infinity className="h-4 w-4" />
              Completely Free Forever
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              The Best{" "}
              <span className="text-primary">Customer Management</span>{" "}
              Software Whatsapp Cloud API Integrated
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Free forever WhatsApp CRM with shared inbox, bulk messaging,
              contact management, sales pipelines, and no‑code automations. The
              ultimate{" "}
              <strong className="text-foreground">
                CRM relationship management
              </strong>{" "}
              platform built for WhatsApp Business – now supporting 20+
              currencies.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Start Free Forever
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 text-base font-medium text-foreground transition-all hover:bg-muted sm:w-auto"
              >
                See All Features
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                WhatsApp Cloud API
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Bulk WhatsApp Sender Free
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Supports 20+ Currencies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Enterprise Security
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The complete WhatsApp CRM solution for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground">
            <span className="flex items-center gap-2 text-sm font-medium">
              <Smartphone className="h-5 w-5 text-primary" /> Small Businesses
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Users className="h-5 w-5 text-primary" /> Startup Teams
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Globe className="h-5 w-5 text-primary" /> Global Freelancers
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Bot className="h-5 w-5 text-primary" /> E‑commerce Stores
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Building2 className="h-5 w-5 text-primary" /> Enterprises
            </span>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section id="features" className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need for{" "}
              <span className="text-primary">CRM Customer Management</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From bulk WhatsApp messaging to multi‑currency sales pipelines –
              Chatio is the best customer management software for WhatsApp. Free
              forever, now with 20+ currency support.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Bulk Sender Highlight */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Send className="h-4 w-4" />
                Bulk WhatsApp Sender Free
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Free Bulk WhatsApp Message Sender
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Reach thousands of customers instantly with our free bulk
                WhatsApp sender. Powered by WhatsApp Cloud API — reliable, fast,
                and fully compliant.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Send broadcast messages to unlimited contacts",
                  "Use pre-approved Message Templates for instant delivery",
                  "Personalise each message with contact variables",
                  "Schedule broadcasts for optimal send times",
                  "Track delivery, read, and reply rates",
                  "No per‑message platform fees – pay only Meta's charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      New Campaign
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reach 2,847 contacts
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full rounded-full bg-muted">
                    <div className="h-3 w-3/4 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Delivered: 2,134
                    </span>
                    <span className="text-emerald-500">75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Read: 1,456</span>
                    <span className="text-primary">52%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Replies: 342</span>
                    <span className="text-amber-500">12%</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6 text-center">
                  <div>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-xs text-muted-foreground">
                      Platform Fee
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">∞</p>
                    <p className="text-xs text-muted-foreground">No Limits</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">99%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "Free", label: "Forever", icon: Infinity },
              { value: "0", label: "Setup Cost", icon: DollarSign },
              {
                value: "20+",
                label: "Currencies Supported",
                icon: Globe,
              },
              { value: "10 min", label: "Setup Time", icon: Download },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <StatIcon className="mx-auto mb-3 h-6 w-6 text-primary" />
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Forever CTA */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 px-6 py-16 sm:px-12 sm:py-24">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Infinity className="h-4 w-4" />
                Completely Free Forever
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Best CRM Customer Management Software —{" "}
                <span className="text-primary">100% Free</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No hidden fees. No paid plans. Get the
                best customer management software for WhatsApp completely free.
                Start managing your CRM customer relationships better today,
                with support for 20+ currencies and zero platform cost.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Started Free Forever
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Join thousands of businesses using Chatio for{" "}
                <strong className="text-foreground">
                  CRM relationship management
                </strong>{" "}
                on WhatsApp
              </p>
            </div>
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Chatio WhatsApp CRM
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-card transition-all open:border-primary/30"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-foreground">
                  {faq.q}
                  <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-foreground">Chatio</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link
                href="/login"
                className="transition-colors hover:text-foreground"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="transition-colors hover:text-foreground"
              >
                Sign Up
              </Link>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} Chatio. Free forever. Built with
              WhatsApp Cloud API.
              <br />
              An initiative by{" "}
              <span className="font-semibold text-foreground">Satinova</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
