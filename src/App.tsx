import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Cursive Writing Practice');
  const [text, setText] = useState('Patrick patrick\nCayden cayden\nBrooks brooks');
  const [fontSize, setFontSize] = useState(80);
  const [fontFamily, setFontFamily] = useState('SchoolScriptDashed');
  const [nudge, setNudge] = useState(0);
  const [extraLines, setExtraLines] = useState(4);

  const lines = text.split('\n');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* NAVBAR */}
      <nav className="no-print bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-black">C</div>
          <h1 className="text-lg font-bold text-slate-900">CursiveStudio Pro</h1>
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold hover:bg-blue-700 shadow-lg active:scale-95 transition-all"
        >
          Print Worksheet
        </button>
      </nav>

      <div className="flex-1 max-w-450 mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* SIDEBAR CONTROLS */}
        <aside className="lg:col-span-3 no-print bg-white border-r border-slate-200 p-8 space-y-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          <section className="space-y-4">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Content</h2>
            <input 
              className="w-full p-3 bg-slate-50 border rounded-xl font-semibold outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
              className="w-full p-4 bg-slate-50 border rounded-xl min-h-37.5 outline-none focus:ring-2 focus:ring-blue-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </section>

          <section className="space-y-6 pt-6 border-t">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Typography</h2>
            <select 
              value={fontFamily} 
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full p-3 bg-slate-50 border rounded-xl font-medium"
            >
              <option value="SchoolScriptDashed">School Script (Dashed)</option>
              <option value="LearningCurveDashed">Learning Curve (Dashed)</option>
              <option value="LearningCurve">Learning Curve (Solid)</option>
            </select>
            
            <div>
              <label className="flex justify-between text-xs font-bold text-slate-600 mb-2">SIZE: {fontSize}px</label>
              <input type="range" min="40" max="110" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full accent-blue-600" />
            </div>

            <div>
              <label className="flex justify-between text-xs font-bold text-slate-600 mb-2">ALIGNMENT: {nudge}px</label>
              <input type="range" min="-60" max="60" value={nudge} onChange={(e) => setNudge(parseInt(e.target.value))} className="w-full accent-slate-400" />
            </div>

            <div>
              <label className="flex justify-between text-xs font-bold text-slate-600 mb-2">EXTRA ROWS: {extraLines}</label>
              <input type="range" min="0" max="12" value={extraLines} onChange={(e) => setExtraLines(parseInt(e.target.value))} className="w-full accent-slate-300" />
            </div>
          </section>
        </aside>

        {/* PRINTABLE PREVIEW */}
        <main className="lg:col-span-9 p-8 bg-slate-100 flex justify-center overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="print-area bg-white shadow-2xl w-full max-w-204 min-h-264 p-16 flex flex-col border">
            <div className="flex justify-between items-end border-b-2 border-slate-900 pb-3 mb-12">
              <h3 className="text-2xl font-black text-slate-900 uppercase">{title}</h3>
              <div className="text-xs font-bold text-slate-400">NAME: __________________________</div>
            </div>

            <div className="flex flex-col flex-1">
              {lines.map((line, index) => (
                <div key={index} className="worksheet-line-container">
                  <div style={{ 
                    fontFamily: fontFamily, 
                    fontSize: `${fontSize}px`, 
                    transform: `translateY(${nudge}px)`,
                    paddingLeft: '12px',
                    color: '#334155',
                    whiteSpace: 'nowrap',
                    lineHeight: '1'
                  }}>
                    {line}
                  </div>
                </div>
              ))}
              {[...Array(extraLines)].map((_, i) => (
                <div key={`extra-${i}`} className="worksheet-line-container" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;