import { useState } from 'react';

function App() {
  const [text, setText] = useState('How was your day?');
  const [fontSize, setFontSize] = useState(64);
  const [offset, setOffset] = useState(48); // Manual nudge to seat text on baseline

  // MATH: Define the row and the lines
  // totalRowHeight includes the gap between rows
  const totalRowHeight = fontSize * 2.5; 
  
  // Create the specific 3-line pattern as a single CSS string
  // Dark Blue (#1e3a8a) and Light Blue (#60a5fa)
  const primaryRuleGradient = `
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 0px,
      #1e3a8a 0px,
      #1e3a8a 2px,
      transparent 2px,
      transparent ${fontSize * 0.6}px,
      #60a5fa ${fontSize * 0.6}px,
      #60a5fa ${fontSize * 0.6 + 1}px,
      transparent ${fontSize * 0.6 + 1}px,
      transparent ${fontSize * 1.2}px,
      #1e3a8a ${fontSize * 1.2}px,
      #1e3a8a ${fontSize * 1.2 + 2}px,
      transparent ${fontSize * 1.2 + 2}px,
      transparent ${totalRowHeight}px
    )
  `;

  return (
    <div className="min-h-screen bg-slate-200 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-6 flex justify-between items-center no-print">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Cursive Trace Studio</h1>
        <button onClick={() => window.print()} className="bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition">
          Print PDF
        </button>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SETTINGS PANEL */}
        <section className="lg:col-span-4 no-print space-y-4">
          <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase mb-2">Practice Text</label>
              <textarea 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                rows={6}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            
            <div className="space-y-4">
              <label className="block text-xs font-black text-slate-400 uppercase">Size & Alignment</label>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500">Font Size: {fontSize}px</span>
                <input type="range" min="40" max="120" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full accent-blue-600" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500">Seat Text on Baseline: {offset}px</span>
                <input type="range" min="0" max="200" value={offset} onChange={(e) => setOffset(parseInt(e.target.value))} className="w-full accent-slate-400" />
              </div>
            </div>
          </div>
        </section>

        {/* THE PAPER */}
        <section className="lg:col-span-8 bg-white shadow-2xl rounded-sm overflow-hidden">
          <div 
            className="worksheet-paper min-h-[1100px] w-full"
            style={{ 
              backgroundImage: primaryRuleGradient,
              backgroundSize: `100% ${totalRowHeight}px`
            }}
          >
            <div 
              className="trace-text whitespace-pre-wrap break-words px-16"
              style={{ 
                fontSize: `${fontSize}px`,
                lineHeight: `${totalRowHeight}px`,
                paddingTop: `${offset}px` 
              }}
            >
              {text}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;