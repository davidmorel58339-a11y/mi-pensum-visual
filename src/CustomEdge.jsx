import React, { memo } from 'react';
import { getSmoothStepPath, BaseEdge } from 'reactflow';

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, markerEnd }) {
  const distX = Math.abs(targetX - sourceX);
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Limitador para evitar giros hacia atrás (picos)
  const maxSafeOffset = Math.max(5, (distX / 2) * 0.8);
  
  let trackOffset = (hash % 20) * 12 - 120; 
  trackOffset = Math.max(-maxSafeOffset, Math.min(maxSafeOffset, trackOffset));
  const verticalOffset = (hash % 7) * 4 - 12;

  const [edgePath] = getSmoothStepPath({
    sourceX, sourceY: sourceY + verticalOffset, sourcePosition,
    targetX, targetY: targetY + verticalOffset, targetPosition,
    borderRadius: 25, centerX: sourceX + (distX / 2) + trackOffset,
  });

  return (
    <>
      <path d={edgePath} style={{ stroke: 'transparent', strokeWidth: 15, fill: 'none' }} />
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
    </>
  );
}
export default memo(CustomEdge);