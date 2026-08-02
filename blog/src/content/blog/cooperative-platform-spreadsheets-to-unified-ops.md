---
title: "From Spreadsheets to a Unified Platform: Building for a Workers' Cooperative"
description: "How we built an offline-first PWA that unified stock, POS, CRM, and production tracking for a cooperative that runs their entire business from mobile phones at outdoor fairs."
pubDate: 2026-08-02
tag: "Case study"
draft: true
---

A workers' cooperative reached out with a problem that's more common than it sounds: their entire operation ran on phones, WhatsApp, and spreadsheets — and they needed it to actually work at outdoor street fairs, where mobile signal is unreliable at best.

No desktop. No office. No tolerance for apps that freeze when connectivity drops.

## The situation

The cooperative manages perishable inventory — products with lot-level expiry dates that determine which items get sold first. Before the platform, they tracked stock in shared spreadsheets, managed client relationships in notebooks, processed sales by memory and calculator, and had no way to see what was planted in production or when it would be ready.

At every fair, the team would piece together what was available, manually calculate payments, and share bank transfer details via WhatsApp messages typed out one by one.

It worked. Until it didn't.

## What we built

An offline-first PWA — installable on any phone, no app store required — that unifies five operational areas in a single shared data layer:

**Stock** tracks inventory at the lot level, with expiry dates, lot-specific pricing, and FEFO-based lot selection at the point of sale. Stock health is visible at a glance: which lots are expiring, how many units remain, what needs to move.

**POS** is touch-optimized for fair conditions — large tap targets, no keyboard required for standard flows. After each sale, it generates a payment modal with the exact amount, a QR code for instant transfers, and a WhatsApp share button for sending payment details in one tap.

**CRM** tracks clients from first contact through follow-ups and sales history. The cooperative operates on relationships — knowing who buys what, who's overdue for a follow-up, and who's a first-time prospect from last week's fair.

**Production** tracks each batch from planting through harvest — estimated yield, actual harvest, loss tracking, and automatic graduation into stock lots when a crop is ready. Upcoming harvests feed into the team's shared agenda.

**AI assistant** has full context of all four modules — stock levels, expiring lots, pending follow-ups, active crops — and answers operational questions in natural language. "What needs to move this week?" is a valid question.

## Key decisions

**Vanilla TypeScript, no framework.** The cooperative's team uses mid-range phones on mobile data. A vanilla TS app with lazy-loaded modules keeps the initial bundle under 130KB gzipped — faster to load than any framework-based alternative on a 3G connection.

**Firebase for the backend.** Zero server management, built-in auth, real-time Firestore listeners that keep every team member's screen in sync, and offline persistence out of the box. For a cooperative of this size, the free tier covers everything.

**PWA instead of native.** No app store friction, instant updates on deploy, works on any phone with a browser. The service worker caches the app shell for offline use; Firestore queues writes when offline and syncs automatically when connectivity returns.

**Lot-level pricing.** Each harvest batch can have different costs — and more importantly, lot-level pricing enables liquidation: marking down lots close to expiry to rotate stock before it's lost. Critical for perishable goods.

## What changed

The cooperative now has a live view of their business at any point during a fair — not a reconciliation they do Monday morning. Lots that need to move are visible before the fair starts. Client follow-ups don't fall through the gaps. Every transaction is recorded, every crop is tracked.

The team adopted it fast because it was built for the way they already work: standing at a stall, on a phone, with a line of customers.

---

*This case was built under a previous brand. Musubi continues this kind of work — lean, purpose-built platforms for teams that need software to fit their reality, not the other way around.*
