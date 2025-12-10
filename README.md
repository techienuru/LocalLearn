## LocalLearn — Free Microlearning for Students & Teachers

Simple, local-first video courses for quick skills
A friendly web app that lets teachers publish short, free lessons and students learn on the go. Built for a 5-day hackathon: fast to use, easy to test, and focused on real learning — no payments, no quizzes.

This README tells you what LocalLearn is, how it works, and how to run and show the project. It’s written in plain English so anyone on the team can follow.

## What is LocalLearn?

LocalLearn is a small video learning app where:

Teachers can create free courses and upload short lesson videos.

Students can enroll, watch lessons, ask questions, and track progress.

Everything uses Firebase for signing in, storing videos, saving course info, and quick chat messages.

It’s built to be fast and simple — ideal for markets, students, and local trainers.

## Key features (what you can demo)

Free course creation (teacher): title, description, multiple lessons (video uploads).

Student enrollment and a simple progress tracker.

Lesson player with resume (we remember where the student left off).

Course chat: student can ask questions; teacher can reply in real time.

Teacher dashboard: simple stats (enrolled students, lesson views, recent messages).

Profile pages: show completed courses and badges.

Basic safety notes and admin moderation option (optional).

Note: The app is fully free — there is no paid or premium content.

## Who is this for?

Teachers and market trainers who want to share short how-to videos.

Students (secondary / university) who want quick, practical lessons to earn small jobs or improve skills.

Hackathon judges, partners, or anyone who wants a clean demo of a small learning product.

## Tech stack (short)

Frontend: React (Vite) + Tailwind CSS (UI only)

Backend & storage: Firebase (Authentication, Cloud Firestore, Storage, Realtime updates)

Hosting (suggested): Vercel for frontend (or any static host) and Firebase Console for storage rules / functions if needed.

No custom server required — Firebase handles user accounts and data.

## Project pages (what we built)

Public / Landing

Home / Landing — featured courses, CTA to Browse

Auth

Sign Up (email/phone)

# LocalLearn

A fast, friendly microlearning app — teachers publish short video lessons; students learn on the go.

One-line pitch: Create, publish, and consume short, practical video courses with zero friction (Firebase-powered, no backend required).

## Why LocalLearn

- Low-friction learning for local trainers, teachers, and students who need practical skills fast.
- Built for demos and hackathons: fast to set up, easy to extend, and ideal for showcasing the teacher → student loop.

## Highlights (demo-ready)

- Create courses and upload short lesson videos in seconds.
- Student enrollment, progress tracking, and resume playback.
- Real-time course chat so students can ask questions and instructors can reply.
- Simple instructor dashboard: course stats, messages, and quick management.

## Quick demo script

1. Open the Home page and highlight a featured course.
2. Sign up as a Student, enroll, and play a lesson (show resume/progress).
3. Sign up as a Teacher, create a course and upload a short MP4 (under 50 MB).
4. Show the Instructor Dashboard, view new enrollment and reply via Course Chat.

## Tech snapshot

- Frontend: React + Vite
- Styling: Tailwind CSS (optional in this repo)
- Backend & data: Firebase (Auth, Firestore, Storage, Realtime updates)
- Hosting recommendation: Vercel for frontend; Firebase for storage and rules

## Get started (fast)

Prerequisites:

- Node.js and npm
- A Firebase account (free tier is fine)

Install and run locally:

```bash
git clone <your-repo-url>
cd LocalLearn
npm install
npm run dev
```

Open the address shown by Vite (usually `http://localhost:5173`).

## Firebase quick setup

1. Create a Firebase project at `https://console.firebase.google.com`.
2. Enable Authentication → Email/Password (optional: Phone).
3. Create a Firestore database (test mode for demo).
4. Enable Storage (default bucket OK).
5. Register a Web App and copy the config values.

Create a `.env` file in the project root with these values:

```
VITE_FIREBASE_API_KEY=your_apiKey
VITE_FIREBASE_AUTH_DOMAIN=your_authDomain
VITE_FIREBASE_PROJECT_ID=your_projectId
VITE_FIREBASE_STORAGE_BUCKET=your_storageBucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messagingSenderId
VITE_FIREBASE_APP_ID=your_appId
```

Restart the dev server after editing `.env`.

## Demo tips

- Use small video files (<50 MB) to speed up uploads.
- Pre-create one Teacher and one Student account for a smooth demo.
- Keep the Firebase project in test mode during hackathon setup, but update rules before any public release.

## Troubleshooting quick checks

- App won’t start: verify `.env` values and restart the dev server.
- Upload errors: check Firebase Storage rules and file size limits.
- Auth problems: ensure Email/Password sign-in is enabled.

## Contributing & team workflow

- Keep pull requests small and focused.
- Add a `TEAM.md` or use Issues to assign tasks during a hackathon.

## Roadmap (ideas)

- Add low-bandwidth streaming / video quality toggles.
- Course discovery and personalized recommendations.
- Certificates, badges, and shareable credentials.
- Stronger moderation tools and production-ready Firebase rules.

## License

This repo is a hackathon/demo project for learning. Add a `LICENSE` if you plan to publish it publicly.

---
