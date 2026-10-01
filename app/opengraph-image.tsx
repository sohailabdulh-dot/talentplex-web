import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TalentPlex Global — Recruitment, Staffing, Technology and Digital Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'radial-gradient(circle at 82% 18%, rgba(227,19,27,.28), transparent 28%), linear-gradient(145deg, #0D0E10 0%, #17181B 62%, #30090D 100%)',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#E3131B',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            TP
          </div>
          <div style={{ display: 'flex', fontSize: 42, fontWeight: 800, letterSpacing: '-1px' }}>
            TalentPlex Global
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 960 }}>
          <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 800, letterSpacing: '-2px' }}>
            Recruitment and staffing built around the roles your business needs.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.45, color: '#D7D9DE' }}>
            Direct Hire · Contract Staffing · Executive Search · Recruitment Support
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 22, color: '#FF6B73', fontWeight: 700 }}>
          Engineering · Manufacturing · Construction · Technology · Supply Chain · Finance
        </div>
      </div>
    ),
    size,
  );
}
