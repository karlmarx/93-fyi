import { promises as fs } from 'fs';
import path from 'path';
import './styles.css';

export const metadata = {
  title: 'Workout GIFs · 93.fyi',
  description: 'Movement loops cut from my own training videos.',
};

type GifFile = {
  sha: string;
  file: string;
  duration: number;
  t_start: number;
  votes: Record<string, number>;
  size_kb: number;
};
type Exercise = {
  slug: string;
  count: number;
  gifs: GifFile[];
};
type Section = {
  label: string;
  exercises: Record<string, Exercise>;
};
type Metadata = {
  generated_at: string;
  source: string;
  sections: Record<string, Section>;
};

const SECTION_ORDER = ['push', 'pull', 'legs', 'core', 'arms', 'mobility', 'cardio'];

export default async function WorkoutGifsPage() {
  const metaPath = path.join(process.cwd(), 'public', 'workoutgifs', 'metadata.json');
  const meta: Metadata = JSON.parse(await fs.readFile(metaPath, 'utf-8'));

  const totalGifs = Object.values(meta.sections).flatMap(s =>
    Object.values(s.exercises).map(e => e.count)
  ).reduce((a, b) => a + b, 0);
  const totalExercises = Object.values(meta.sections).reduce(
    (acc, s) => acc + Object.keys(s.exercises).length, 0
  );

  return (
    <main className="wg-page">
      <header className="wg-hero">
        <div className="wg-tag">93·FYI</div>
        <h1 className="wg-title">
          WORKOUT<span className="wg-title-accent">GIFS</span>
        </h1>
        <p className="wg-tagline">
          Movement loops cut from my own training videos · {totalGifs} loops across {totalExercises} exercises
        </p>
        <div className="wg-stats">
          <span>local-vlm-analysis · gemma-4-26b · nwb pipeline</span>
        </div>
      </header>

      {SECTION_ORDER.map((key, sectionIdx) => {
        const section = meta.sections[key];
        if (!section || Object.keys(section.exercises).length === 0) return null;
        const exerciseCount = Object.keys(section.exercises).length;
        return (
          <section key={key} className="wg-section">
            <div className="wg-banner">
              <div className="wg-banner-left">
                <span className="wg-banner-num">{String(sectionIdx + 1).padStart(2, '0')}</span>
                <h2 className="wg-banner-title">{section.label}</h2>
              </div>
              <span className="wg-banner-meta">
                {exerciseCount} EXERCISE{exerciseCount !== 1 ? 'S' : ''}
              </span>
            </div>

            <div className="wg-exercises">
              {Object.entries(section.exercises).map(([name, ex], exIdx) => (
                <article key={ex.slug} className="wg-exercise">
                  <header className="wg-exercise-head">
                    <div className="wg-exercise-label">
                      <span className="wg-exercise-num">EXERCISE {exIdx + 1}</span>
                      <h3 className="wg-exercise-name">{name}</h3>
                    </div>
                    <span className="wg-exercise-count">
                      {ex.count} VARIANT{ex.count !== 1 ? 'S' : ''}
                    </span>
                  </header>

                  <div className="wg-variants">
                    {ex.gifs.map((g, vIdx) => (
                      <figure key={g.sha} className="wg-variant">
                        <div className="wg-variant-frame">
                          <img
                            src={`/workoutgifs/${ex.slug}/${g.file}`}
                            alt={`${name} variant ${vIdx + 1}`}
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="wg-variant-cap">
                          <span className="wg-variant-num">VARIANT {vIdx + 1}</span>
                          <span className="wg-variant-meta">
                            {g.duration.toFixed(1)}s · @{g.t_start.toFixed(0)}s
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <footer className="wg-foot">
        <p>
          Pipeline: phone camera → Nextcloud → Gemma 4 26B (frame triage + nwb match)
          → ffmpeg GIF cutter → this gallery
        </p>
        <p className="wg-foot-meta">manifest generated {meta.generated_at}</p>
      </footer>
    </main>
  );
}
