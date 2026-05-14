import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('Cursive Writing Practice');
  const [text, setText] = useState('Apple\nBanana\nCherry');
  const [fontSize, setFontSize] = useState(80);
  const [fontFamily, setFontFamily] = useState('SchoolScriptDashed');
  const [nudge, setNudge] = useState(0);
  const [extraLines, setExtraLines] = useState(5);

  const lines = text.split('\n');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* NAVIGATION BAR */}
      <nav className="no-print bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">C</div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-none">CursiveStudio Pro</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Classroom Edition</p>
          </div>
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-200 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print Worksheet
        </button>
      </nav>

      <div className="flex-1 max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12">
        
        {/* TEACHER TOOLBOX (SIDEBAR) */}
        <aside className="lg:col-span-3 no-print bg-white border-r border-slate-200 p-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="space-y-8">
            <section>
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Lesson Content</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Worksheet Title</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">Practice Words (One per line)</label>
                  <textarea 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none min-h-[180px] resize-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Visual Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-3">Font Style</label>
                  <select 
                    value={fontFamily} 
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <option value="SchoolScriptDashed">School Script (Dashed)</option>
                    <option value="LearningCurveDashed">Learning Curve (Dashed)</option>
                    <option value="LearningCurve">Learning Curve (Solid)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-3">
                    FONT SIZE <span>{fontSize}px</span>
                  </div>
                  <input type="range" min="40" max="110" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full accent-blue-600 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-3">
                    BASELINE ALIGNMENT <span>{nudge}px</span>
                  </div>
                  <input type="range" min="-60" max="60" value={nudge} onChange={(e) => setNudge(parseInt(e.target.value))} className="w-full accent-slate-400 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-3">
                    EXTRA PRACTICE ROWS <span>{extraLines}</span>
                  </div>
                  <input type="range" min="0" max="15" value={extraLines} onChange={(e) => setExtraLines(parseInt(e.target.value))} className="w-full accent-slate-300 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* THE FINAL WORKSHEET */}
        <main className="lg:col-span-9 p-8 md:p-12 bg-slate-100 flex justify-center overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="print-area bg-white shadow-2xl w-full max-w-[850px] min-h-[1056px] p-16 flex flex-col border border-slate-200">
            
            {/* TOP HEADER */}
            <div className="flex justify-between items-end border-b-2 border-slate-900 pb-3 mb-12">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{title}</h3>
              <div className="text-sm font-bold text-slate-400 tracking-wide">NAME: __________________________</div>
            </div>

            {/* GENERATED ROWS */}
            <div className="flex flex-col flex-1">
              {/* User Content Lines */}
              {lines.map((line, index) => (
                <div key={index} className="worksheet-line-container">
                  <div 
                    style={{ 
                      fontFamily: fontFamily,
                      fontSize: `${fontSize}px`,
                      transform: `translateY(${nudge}px)`,
                      color: '#334155',
                      width: '100%',
                      paddingLeft: '12px',
                      lineHeight: '1',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {line}
                  </div>
                </div>
              ))}
              
              {/* Empty Practice Lines */}
              {[...Array(extraLines)].map((_, i) => (
                <div key={`extra-${i}`} className="worksheet-line-container">
                  <div className="h-full w-full"></div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-12 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
              <span>CursiveStudio Pro Edition</span>
              <span>Classroom Handout</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;