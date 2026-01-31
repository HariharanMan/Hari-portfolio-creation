import { motion } from 'framer-motion';

const SkillChart = () => {
  const skills = [
    { name: 'Python', value: 70 },
    { name: 'JavaScript', value: 60 },
    { name: 'Nodejs', value: 80 },
    { name: 'Reactjs', value: 60 },
    { name: 'MongoDB', value: 70 },
    { name: 'Git', value: 60 },
  ];

  const maxValue = 100;
  const centerX = 150;
  const centerY = 150;
  const radius = 100;

  const generatePolygonPoints = (values: number[]) => {
    return values.map((value, index) => {
      const angle = (index * 2 * Math.PI) / values.length - Math.PI / 2;
      const x = centerX + (radius * value / maxValue) * Math.cos(angle);
      const y = centerY + (radius * value / maxValue) * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="bg-charcoal rounded-xl p-6">
      <h4 className="text-xl font-semibold text-gold mb-6 text-center">Skill Radar</h4>
      <div className="flex justify-center">
        <svg width="300" height="300" className="overflow-visible">
          {/* Grid lines */}
          {[20, 40, 60, 80, 100].map((value) => (
            <polygon
              key={value}
              points={generatePolygonPoints(Array(skills.length).fill(value))}
              fill="none"
              stroke="#8892B0"
              strokeWidth="1"
              opacity="0.3"
            />
          ))}
          
          {/* Axis lines */}
          {skills.map((_, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#8892B0"
                strokeWidth="1"
                opacity="0.5"
              />
            );
          })}
          
          {/* Data polygon */}
          <motion.polygon
            points={generatePolygonPoints(skills.map(s => s.value))}
            fill="#D4AF37"
            fillOpacity="0.3"
            stroke="#D4AF37"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Data points */}
          {skills.map((skill, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const x = centerX + (radius * skill.value / maxValue) * Math.cos(angle);
            const y = centerY + (radius * skill.value / maxValue) * Math.sin(angle);
            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#D4AF37"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              />
            );
          })}
          
          {/* Labels */}
          {skills.map((skill, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const labelRadius = radius + 30;
            const x = centerX + labelRadius * Math.cos(angle);
            const y = centerY + labelRadius * Math.sin(angle);
            return (
              <text
                key={index}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#F5F5F5"
                fontSize="12"
                fontWeight="500"
              >
                {skill.name}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default SkillChart;