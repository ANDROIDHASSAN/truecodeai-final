import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TrueCodeAI — AI & Software Development Studio India';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#060607',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background grid texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(255,106,26,0.12) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(255,106,26,0.08) 0%, transparent 40%)',
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            right: 80,
            color: 'white',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            display: 'flex',
          }}
        >
          TrueCodeAI®
        </div>

        {/* Kicker */}
        <div
          style={{
            color: '#ff6a1a',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 28,
            display: 'flex',
          }}
        >
          AI &amp; SOFTWARE DEVELOPMENT STUDIO · NASHIK, INDIA
        </div>

        {/* Headline */}
        <div
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 0.92,
            marginBottom: 36,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>WE CAN</span>
          <span style={{ color: '#ff6a1a' }}>BUILD</span>
          <span>ANYTHING.</span>
        </div>

        {/* Sub-line */}
        <div
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 22,
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          50 engineers · MVPs · AI Agents · Voice AI · Custom ML
        </div>
      </div>
    ),
    { ...size }
  );
}
