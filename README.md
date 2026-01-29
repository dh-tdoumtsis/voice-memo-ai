# VoiceMemo AI

A modern voice memo app that records audio, transcribes it using AI, and generates structured summaries with key takeaways and action items.

## ✨ Features

- **Voice Recording** - Browser-based audio capture
- **AI Transcription** - Gemini AI or OpenAI Whisper
- **Smart Summaries** - AI-generated key takeaways with streaming
- **Multi-Provider** - Switch between Gemini, OpenAI, or Mock (dev)
- **UI** - Built with shadcn/ui and Tailwind CSS

## 🛠️ Tech Stack

**Framework:** Next.js 16 (App Router) • TypeScript  
**UI:** React • Tailwind CSS • shadcn/ui  
**AI:** Vercel AI SDK • Google Gemini • OpenAI  

## 🏗️ Architecture

- **State Machine Pattern** - Type-safe workflow (idle → recording → transcribing → thinking → complete)
- **Map-based Providers** - Provider switching

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your API keys to .env

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

```bash
# AI Provider (optional, defaults to mock in dev)
AI_PROVIDER=mock  # or "gemini" | "openai"

# API Keys (required for respective providers)
GOOGLE_GENERATIVE_AI_KEY=your_gemini_key
OPENAI_API_KEY=your_openai_key
```

**Note:** Use `AI_PROVIDER=mock` for development without API keys.

## 🗺️ Roadmap

**v1.0 (Current)**
- ✅ Voice recording & transcription
- ✅ AI-powered summaries with streaming
- ✅ Multi-provider support
- ✅ State machine architecture

**v2.0 (Coming Soon)**
- 🔜 User authentication (login/signup)
- 🔜 Database persistence (Prisma + PostgreSQL)
- 🔜 Memo history & search
- 🔜 User-specific memos
