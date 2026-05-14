# ReviveX AI

AI-powered business recovery platform that helps struggling entrepreneurs diagnose problems, get strategic guidance, and build recovery action plans through an intelligent chat assistant and analytics tools.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/revivex-ai run dev` — run the frontend (port 23383)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + Framer Motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Charts: Recharts
- Routing: Wouter
- Icons: Lucide React

## Where things live

- DB schema: `lib/db/src/schema/chat.ts`
- API contract: `lib/api-spec/openapi.yaml`
- Generated hooks: `lib/api-client-react/src/generated/api.ts`
- Generated Zod schemas: `lib/api-zod/src/generated/api.ts`
- API routes: `artifacts/api-server/src/routes/` (chat.ts, business.ts, dashboard.ts)
- AI mock responses: `artifacts/api-server/src/lib/ai-responses.ts`
- Frontend pages: `artifacts/revivex-ai/src/pages/`
- Theme CSS: `artifacts/revivex-ai/src/index.css`

## Architecture decisions

- AI responses are mock/rule-based (no external LLM API required) — responses are keyed by topic keywords from the user's message
- 5 visual themes (Neon Blue Cyber, Warm Golden Executive, Dark AMOLED Focus, Emerald Growth, Sunset Motivation) stored in localStorage and applied via CSS custom properties
- Single Express API server shared across all artifacts, mounted at `/api`
- Chat sessions and messages persisted to PostgreSQL; all other data (health scores, metrics) is generated dynamically per request
- Business health scores and recovery metrics are seeded with realistic improving trajectories

## Product

- **Landing Page** (`/`): Cinematic multi-section homepage with animated hero, stats, features, AI demo, pricing, FAQ, and footer
- **AI Chat** (`/chat`): Core experience — chat with an AI strategist about business recovery, with session history, crisis mode, and quick prompts
- **Business Diagnosis** (`/diagnosis`): Multi-step wizard → AI generates urgency score, issues list, and recommendations
- **SWOT Analysis** (`/swot`): Input business info → get AI-generated SWOT with strengths, weaknesses, opportunities, threats
- **Action Plan** (`/action-plan`): Set goals and timeframe → get a week-by-week recovery roadmap
- **Dashboard** (`/dashboard`): Health score gauge, recovery charts, motivational quote, quick actions
- **Auth** (`/login`, `/register`): Premium futuristic auth screens

## User preferences

- Premium, cinematic UI with glassmorphism and neon glows
- Framer Motion animations throughout
- 5-theme system with animated transitions

## Gotchas

- AI responses are mock — to add real LLM integration, update `artifacts/api-server/src/lib/ai-responses.ts`
- Theme is stored in `data-theme` attribute on `<html>` via CSS custom properties
- Run codegen after any OpenAPI spec changes: `pnpm --filter @workspace/api-spec run codegen`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
