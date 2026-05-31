import React, { memo } from 'react';

function TrimesterNode({ data }) {
  const { isDarkMode } = data;
  return (
    <div style={{
      width: '100%', height: '100%', backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.5)',
      border: `2px solid ${isDarkMode ? '#334155' : '#cbd5e1'}`, borderRadius: '16px',
      display: 'flex', flexDirection: 'column', overflow: 'hidden'
    }}>
      <div style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#e2e8f0', padding: '12px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${isDarkMode ? '#334155' : '#cbd5e1'}`
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '900', color: isDarkMode ? '#f8fafc' : '#475569', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '15px' }}>{data.label}</span>
          <span style={{ fontSize: '12px', color: isDarkMode ? '#94a3b8' : '#64748b', fontWeight: '700', marginTop: '2px' }}>
            {data.stats ? `${data.stats.passed} / ${data.stats.total} CR Aprobados` : '0 / 0 CR'}
          </span>
        </div>
        <input 
          type="checkbox" 
          checked={data.stats && data.stats.total > 0 && data.stats.passed === data.stats.total}
          onChange={(e) => data.onToggleAll(e.target.checked)}
          title="Marcar todo el trimestre" style={{ cursor: 'pointer', transform: 'scale(1.4)' }}
        />
      </div>
    </div>
  );
}
export default memo(TrimesterNode);