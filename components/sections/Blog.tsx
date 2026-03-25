'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

// TODO: Replace with real blog posts. Consider creating a /blog/[slug] route when you have content.
const PLACEHOLDER_POSTS = [
  {
    date: 'Coming soon',
    category: 'Research',
    title: 'What is Fuzzy Dark Matter?',
    excerpt:
      'An introduction to ultra-light axion dark matter and how quantum pressure shapes the large-scale structure of the universe.',
    readTime: '~5 min read',
  },
  {
    date: 'Coming soon',
    category: 'Methods',
    title: 'Forward Modeling in Astrophysics',
    excerpt:
      'How we simulate the universe to constrain dark matter models — a look at the forward modeling pipeline behind the Roman Space Telescope project.',
    readTime: '~7 min read',
  },
  {
    date: 'Coming soon',
    category: 'Career',
    title: 'Navigating a PhD in Astrophysics',
    excerpt:
      'Thoughts on research, failure, and finding meaning in a field that asks big questions with uncertain answers.',
    readTime: '~4 min read',
  },
  {
    date: 'Coming soon',
    category: 'Outreach',
    title: 'Dark Matter: What We Know and Don\'t Know',
    excerpt:
      'A lay-accessible overview of the dark matter problem and why it remains one of the most compelling mysteries in modern physics.',
    readTime: '~6 min read',
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ScrollReveal>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            06 · Blog
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}
          >
            Writing
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '52px',
            }}
          >
            {/* TODO: Fill in blog description */}
            Occasional writing on research, methods, and life in astrophysics.
            Posts coming soon.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {PLACEHOLDER_POSTS.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  padding: 'clamp(16px, 4vw, 28px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  opacity: 0.7,
                  transition: 'opacity 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.opacity = '0.9'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border-accent)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.opacity = '0.7'
                  ;(e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--border)'
                }}
              >
                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span className="tag-muted">{post.category}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '1px',
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.35,
                    flex: 1,
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read time */}
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains), monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    opacity: 0.7,
                  }}
                >
                  {post.readTime}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
