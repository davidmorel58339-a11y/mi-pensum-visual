import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function SubjectNode({ data }) {
  const { 
    isDimmed, isHighlighted, isPassed, credits, isSearched, 
    isLocked, isSelectedForGpa, isSelectedForGoal, isDarkMode, 
    onDoubleClick, isCompact, isSimulatorEligible, isInSimulatorCart 
  } = data;

  const colors = {
    '1': { accent: isDarkMode ? '#818cf8' : '#4f46e5', bg: isDarkMode ? '#1e293b' : '#ffffff', text: isDarkMode ? '#cbd5e1' : '#1e293b' }, 
    '2': { accent: isDarkMode ? '#34d399' : '#059669', bg: isDarkMode ? '#1e293b' : '#ffffff', text: isDarkMode ? '#cbd5e1' : '#1e293b' }, 
    '3': { accent: isDarkMode ? '#fb7185' : '#e11d48', bg: isDarkMode ? '#1e293b' : '#ffffff', text: isDarkMode ? '#cbd5e1' : '#1e293b' }, 
  };

  const levelMatch = data.code.match(/\d/);
  const level = levelMatch ? levelMatch[0] : '1'; 
  const theme = colors[level] || colors['1'];

  let bg = isPassed ? (isDarkMode ? '#854d0e' : '#fef08a') : (isLocked ? (isDarkMode ? '#0f172a' : '#f1f5f9') : theme.bg);
  let borderLeft = isPassed ? '#ca8a04' : (isLocked ? (isDarkMode ? '#334155' : '#cbd5e1') : theme.accent);
  let boxShadow = isHighlighted ? `0 0 20px ${theme.accent}80` : '0 4px 6px -1px rgba(0, 0, 0, 0.2)';
  let opacity = isDimmed ? 0.10 : (isPassed ? 0.85 : (isLocked ? 0.6 : 1));

  // Prioridad de colores según la pestaña activa
  if (isSelectedForGpa) {
    bg = isDarkMode ? '#1e3a8a' : '#eff6ff'; borderLeft = '#3b82f6'; boxShadow = '0 0 15px #3b82f680'; opacity = 1;
  } else if (isSelectedForGoal) {
    bg = isDarkMode ? '#4c1d95' : '#f3e8ff'; borderLeft = '#9333ea'; boxShadow = '0 0 15px #9333ea80'; opacity = 1; // Púrpura para Predictor
  } else if (isInSimulatorCart) {
    bg = isDarkMode ? '#064e3b' : '#dcfce7'; borderLeft = '#10b981'; boxShadow = '0 0 20px #10b98190'; opacity = 1;
  } else if (isSimulatorEligible) {
    borderLeft = '#f59e0b'; boxShadow = '0 0 15px #f59e0b60'; opacity = 1;
  }

  const textColor = isPassed ? (isDarkMode ? '#fef08a' : '#713f12') : (isLocked ? (isDarkMode ? '#475569' : '#94a3b8') : theme.accent);
  const nodeHeight = isCompact ? '45px' : '80px'; 

  return (
    <div 
      onDoubleClick={() => onDoubleClick && onDoubleClick(data.code)}
      style={{ 
        background: bg, border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`, borderLeft: `6px solid ${borderLeft}`,
        borderRadius: '8px', padding: '8px 14px', width: '230px', height: nodeHeight,
        opacity: opacity, transform: isHighlighted || isSelectedForGpa || isSelectedForGoal || isInSimulatorCart ? 'scale(1.05)' : 'scale(1)',
        boxShadow: boxShadow, outline: isSearched ? '3px solid #eab308' : 'none', outlineOffset: '2px',
        transition: 'all 0.2s ease-in-out', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', fontFamily: 'system-ui, sans-serif', position: 'relative', cursor: 'pointer'
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: isDarkMode ? '#475569' : '#94a3b8', width: '8px', height: '8px', opacity: isDimmed ? 0 : 1 }} />
      
      <div style={{ position: 'absolute', top: isCompact ? '12px' : '8px', right: '10px', zIndex: 20 }}>
        {isLocked && !isPassed ? (
          <span style={{ fontSize: '12px', cursor: 'not-allowed' }} title="Faltan Prerrequisitos">🔒</span>
        ) : (
          <input 
            type="checkbox" checked={isPassed || false}
            onChange={(e) => data.onToggle(data.code, e.target.checked)}
            onClick={(e) => e.stopPropagation()} 
            style={{ cursor: 'pointer', transform: 'scale(1.2)' }}
          />
        )}
      </div>

      <div style={{ fontSize: '14px', fontWeight: '900', color: textColor, letterSpacing: '0.5px', marginBottom: isCompact ? '0' : '4px', textDecoration: isPassed ? 'line-through' : 'none' }}>
        {data.code} <span style={{ fontSize: '11px', fontWeight: 'normal', color: isDarkMode ? '#94a3b8' : '#64748b' }}>({credits} CR)</span>
      </div>
      
      {!isCompact && (
        <div style={{ fontSize: '11px', color: theme.text, fontWeight: '600', lineHeight: '1.2', textOverflow: 'ellipsis', overflow: 'hidden', paddingRight: '20px' }}>{data.name}</div>
      )}

      <Handle type="source" position={Position.Right} style={{ background: isDarkMode ? '#475569' : '#94a3b8', width: '8px', height: '8px', opacity: isDimmed ? 0 : 1 }} />
    </div>
  );
}
export default memo(SubjectNode);