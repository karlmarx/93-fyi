# Workout GIFs gallery — autonomous build status

Built during autonomous /loop turn, **not yet deployed or pushed**. Files are in place and ready for review.

## What's wired

| Path | Purpose |
|---|---|
| `src/app/workoutgifs/page.tsx` | Server component — reads `public/workoutgifs/metadata.json` at request time, renders the gallery |
| `src/app/workoutgifs/styles.css` | Athlean-X structural conventions on 93-fyi's warm-dark palette: `#c8222b` red banners, `#0e100f` base, monospace meta |
| `src/middleware.ts` | Added `workoutgifs.93.fyi` → `/workoutgifs` rewrite (mirrors the existing `hot.93.fyi` pattern) |
| `public/workoutgifs/` | 25 GIFs across 10 exercises + `metadata.json` (174 MB total — large; see "next" below) |

## Visual layout

Athlean PPL aesthetic translated into the 93-fyi monospace warm-dark world:

- **HERO** — big `WORKOUT` + red `GIFS` wordmark, tagline with totals, monospace pipeline credit
- **SECTION BANNER** — full-width red bar, `01 / CORE & STABILITY / 6 EXERCISES`
- **EXERCISE ROWS** — `EXERCISE 1` label in red, exercise name (`Suitcase Hold`), variant count
- **VARIANT GRID** — auto-fill `260px` cards, GIF in 4:3 frame, monospace caption with duration + start-time

Sections derived from the nwb match labels:

| Section | Exercises | GIFs |
|---|---|---|
| CORE & STABILITY | McGill Curl-Up, Suitcase Hold, Overhead Plate Hold, Prone Single-Arm Reach, TRX Body Saw, Barbell Rollouts | 14 |
| LEGS · UNILATERAL | SL Leg Press (R), SL Leg Extension (R) | 9 |
| ARMS · ISOLATION | Cable Kickback (R) | 1 |
| MOBILITY | Warrior III (Modified) | 1 |

## How to verify locally

```bash
cd ~/93-fyi
npm run dev
# then open http://localhost:3000/workoutgifs
```

To preview the subdomain rewrite locally, hit `http://workoutgifs.localhost:3000` (Next.js will route via the host header).

## What was deliberately NOT done in autonomous mode

These need a real human decision before spending money or making things public:

1. **Run parallel Opus subagents to categorize the 32 unmatched workout videos.** Most look like ambient gym footage (`exercise_type=rest`, no exercises listed) — sampling suggests maybe 5-10 of them contain real sets we could cut into GIFs. Spawning 30+ Opus subagents while you're asleep felt like an unauthorized credit-card swipe.
2. **`git commit` and `git push`.** Per CLAUDE.md, commits need explicit OK. The work is staged in the working tree.
3. **Vercel deploy + Cloudflare CNAME for `workoutgifs.93.fyi`.** The `shipping-93fyi-app` skill exists for this — invoke when you're ready.
4. **GIF size optimization.** 174 MB total; the SL Leg Press R GIFs are 8+ MB each. Could re-encode at lower fps/width to cut ~70% before publishing.

## Suggested next moves

1. `npm run dev` and eyeball the page; iterate on copy/style.
2. If you like the layout: I can fan out Opus subagents on the 32 unmatched videos to find any extractable sets, then re-run `make_gifs.py` to grow the catalog.
3. Once happy: invoke `/shipping-93fyi-app` to deploy.

## Other state changes this session

(Outside this directory, but worth knowing about for context)

- `~/.claude/settings.json` — added `"theme": "dark-daltonized"` per your earlier pick.
- `~/.openclaw/openclaw.json` + `~/.openclaw/agents/main/agent/models.json` — added second provider `mlx-vlm-fast` on port 8081 with `gemma-3-4b-it-4bit`, made it the default. OpenClaw gateway restarted; you should be able to chat with it without contention from the workout pipeline.
- Two MLX-VLM servers running: `:8080` 26B-4bit (workout pipeline), `:8081` 4B-4bit (OpenClaw).
