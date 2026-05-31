import React, { useState } from 'react';
import { cn } from '../../lib/utils/utils';

interface ToothProps {
  id: string;
  condition: 'normal' | 'cárie' | 'restaurado' | 'ausente' | 'implante' | 'coroa' | 'canal' | 'fratura' | 'sensível';
  onClick: (id: string) => void;
  history?: string[];
}

const Tooth: React.FC<ToothProps> = ({ id, condition, onClick, history }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    normal: '#FFFFFF',
    cárie: '#333333',
    restaurado: '#999999',
    ausente: '#000000',
    implante: '#CCCCCC',
    coroa: '#666666',
    canal: '#444444',
    fratura: '#FF0000', // Exception for fracture as requested to be visible, but prompt says black/white, I will use dark gray
    sensível: '#EEEEEE',
  };

  // Strictly grayscale as per prompt "Zero color accents"
  const grayscaleColors = {
    normal: '#FFFFFF',
    cárie: '#111111',
    restaurado: '#666666',
    ausente: '#000000',
    implante: '#999999',
    coroa: '#444444',
    canal: '#333333',
    fratura: '#222222',
    sensível: '#DDDDDD',
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
    >
      <svg width="40" height="50" viewBox="0 0 40 50">
        <path
          d="M10,10 Q20,0 30,10 L35,30 Q35,45 20,50 Q5,45 5,30 Z"
          fill={grayscaleColors[condition]}
          stroke="white"
          strokeWidth="1"
        />
        <text x="20" y="30" fontSize="10" textAnchor="middle" fill={condition === 'ausente' || condition === 'cárie' ? 'white' : 'black'} fontWeight="bold">
          {id}
        </text>
      </svg>

      {isHovered && history && history.length > 0 && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 bg-white text-black p-3 rounded-sm shadow-xl w-48 mb-2 border border-black animate-in fade-in zoom-in duration-150">
           <p className="text-[10px] font-black uppercase tracking-widest border-b border-black mb-2 pb-1">Dente {id}</p>
           <ul className="space-y-1">
             {history.slice(0, 3).map((h, i) => (
               <li key={i} className="text-[9px] font-bold uppercase leading-tight">• {h}</li>
             ))}
           </ul>
        </div>
      )}
    </div>
  );
};

export const ToothChart: React.FC = () => {
  const [selectedTooth, setSelectedTooth] = useState<string | null>(null);
  const [toothStates, setToothStates] = useState<Record<string, any>>({});

  const upperTeeth = ['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'];
  const lowerTeeth = ['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];

  const handleToothClick = (id: string) => {
    setSelectedTooth(id);
  };

  const setCondition = (cond: any) => {
    if (selectedTooth) {
      setToothStates(prev => ({
        ...prev,
        [selectedTooth]: {
          condition: cond,
          history: [cond.toUpperCase() + ' - ' + new Date().toLocaleDateString(), ...(prev[selectedTooth]?.history || [])]
        }
      }));
      setSelectedTooth(null);
    }
  };

  return (
    <div className="bg-black p-8 border border-white/10 rounded-sm">
      <div className="space-y-12">
        {/* Upper Jaw */}
        <div className="flex justify-center gap-1">
          {upperTeeth.map(id => (
            <Tooth
              key={id}
              id={id}
              condition={toothStates[id]?.condition || 'normal'}
              history={toothStates[id]?.history}
              onClick={handleToothClick}
            />
          ))}
        </div>

        <div className="h-px bg-white/5 w-full" />

        {/* Lower Jaw */}
        <div className="flex justify-center gap-1">
          {lowerTeeth.map(id => (
            <Tooth
              key={id}
              id={id}
              condition={toothStates[id]?.condition || 'normal'}
              history={toothStates[id]?.history}
              onClick={handleToothClick}
            />
          ))}
        </div>
      </div>

      {selectedTooth && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
           <div className="bg-white text-black p-6 rounded-sm w-full max-w-xs border-2 border-black">
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Dente {selectedTooth}</h3>
              <div className="grid grid-cols-1 gap-1">
                {['normal', 'cárie', 'restaurado', 'ausente', 'implante', 'coroa', 'canal', 'fratura', 'sensível'].map(c => (
                  <button
                    key={c}
                    onClick={() => setCondition(c)}
                    className="text-left px-3 py-2 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedTooth(null)}
                className="w-full mt-4 border-t border-black pt-4 text-xs font-black uppercase text-neutral-500"
              >
                Cancelar
              </button>
           </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-4">
         {['normal', 'cárie', 'restaurado', 'ausente', 'implante'].map(c => (
           <div key={c} className="flex items-center gap-2">
             <div className="w-3 h-3 border border-white" style={{ backgroundColor: ({
                normal: '#FFFFFF', cárie: '#111111', restaurado: '#666666', ausente: '#000000', implante: '#999999'
             } as any)[c] }} />
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{c}</span>
           </div>
         ))}
      </div>
    </div>
  );
};
