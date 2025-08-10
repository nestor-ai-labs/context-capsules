export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Context Capsules — MVP Mockups</h1>
          <span className="text-sm text-neutral-500">Onboarding → Session → Switch</span>
        </header>

        {/* Tabs */}
        <div className="flex gap-2">
          <a href="#onboarding" className="px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">1) Onboarding</a>
          <a href="#session" className="px-3 py-1.5 rounded-full bg-neutral-200 text-sm">2) Session</a>
          <a href="#switch" className="px-3 py-1.5 rounded-full bg-neutral-200 text-sm">3) Switch Modes</a>
        </div>

        {/* 1) Onboarding */}
        <section id="onboarding" className="space-y-4">
          <h2 className="text-xl font-semibold">1) Onboarding</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* 1.1 Command setup */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">1.1 Command Setup (Claude/ChatGPT)</h3>
                <span className="text-xs bg-neutral-900 text-white px-2 py-0.5 rounded-full">Paste in chat</span>
              </div>
              <pre className="text-xs bg-neutral-900 text-white p-3 rounded-xl overflow-auto">
{`Create and activate a Context Capsule for this project.

capsule_id: space-invaders
project_name: Space Invaders
mode: mentor  // explain + challenge; ask before structural edits
stack: Python 3.11, formatter: Black
constraints:
  - Never rename variables
  - Do not modify files outside current path
  - No bulk reformatting
  - No unsolicited suggestions
guardrails:
  allowed: [propose_tests, flag_bugs, reference_lines, micro_examples]
  forbidden: [rename_symbols, refactor, create_or_delete_files]
tone: dry_minimal

Acknowledge with: ACTIVE: space-invaders (mentor)
`}
              </pre>
            </div>

            {/* 1.2 Minimal UI form */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">1.2 Minimal UI (+) Form</h3>
                <button className="px-2.5 py-1 rounded-lg bg-neutral-900 text-white text-xs">+ New Capsule</button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs uppercase tracking-wide text-neutral-500">Title</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" defaultValue="Space Invaders" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-neutral-500">Strings (chips)</label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {['mentor mode','python 3.11','formatter: black','never rename variables','dry tone'].map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-neutral-200 text-xs">{tag}</span>
                    ))}
                    <button className="px-2 py-1 rounded-full bg-neutral-900 text-white text-xs">+ Add</button>
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-neutral-500">Repo Binding</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 text-sm" placeholder="~/projects/space_invaders" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm">Save Capsule</button>
                  <span className="text-xs text-neutral-500">Auto‑inject on open</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Session View */}
        <section id="session" className="space-y-4">
          <h2 className="text-xl font-semibold">2) Session — Active Capsule in Chat</h2>
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-neutral-900 text-white text-xs">Capsule: space-invaders</span>
              <span className="px-2 py-1 rounded-full bg-neutral-200 text-xs">Mode: mentor</span>
              <button className="ml-auto text-xs underline">View guardrails</button>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border p-3 bg-neutral-50">
                <p className="text-sm text-neutral-700">User: Recap next steps, pending decisions, and dependencies. Keep it in capsule rules. Do not rename symbols. Dry tone.</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-sm"><span className="text-neutral-500">AI (contract‑aware):</span> Next steps → 1) Add friction calc to <code>physics_loop.py</code>. 2) Write Pytest cases for collision edge cases. Pending decisions → batching to Rust (yes/no). Dependencies → sprite index map; Rust FFI boundary. No code edits performed.</p>
              </div>
              <div className="flex gap-2">
                <input className="flex-1 rounded-xl border px-3 py-2 text-sm" placeholder="Type message… (capsule rules auto‑applied)" />
                <button className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm">Send</button>
              </div>
            </div>
          </div>
        </section>

        {/* 3) Switch Modes / Projects */}
        <section id="switch" className="space-y-4">
          <h2 className="text-xl font-semibold">3) Switch Modes / Projects</h2>
          <div className="rounded-2xl border bg-white p-4 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full bg-neutral-200 text-xs">Active: invoice-audit (Auditor)</span>
              <span className="px-2 py-1 rounded-full bg-neutral-200 text-xs">Available: space-invaders</span>
              <button className="ml-auto text-xs underline">Manage Capsules</button>
            </div>
            <div className="rounded-xl border p-3 bg-neutral-50">
              <p className="text-sm text-neutral-700">User: <span className="font-mono">@space_invaders</span> — switch here. Then: "List boundary tests for collision; no code edits."</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-sm"><span className="text-neutral-500">AI:</span> Switched to capsule <strong>space-invaders</strong> (mode: mentor). Contract loaded. No structural edits will be made without confirmation.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded-xl border p-3">
                <h4 className="font-medium mb-2 text-sm">Capsule Rules (space-invaders)</h4>
                <ul className="text-sm list-disc list-inside text-neutral-700 space-y-1">
                  <li>Never rename variables</li>
                  <li>No edits outside current path</li>
                  <li>No bulk reformat</li>
                  <li>Mentor: explain + challenge; ask before edits</li>
                </ul>
              </div>
              <div className="rounded-xl border p-3">
                <h4 className="font-medium mb-2 text-sm">Quick Mode Switch</h4>
                <div className="flex gap-2">
                  {['Agent','Auditor','QA','Mentor'].map(m => (
                    <button key={m} className={`px-2.5 py-1 rounded-full text-xs ${m==='Mentor' ? 'bg-neutral-900 text-white' : 'bg-neutral-200'}`}>{m}</button>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-2">For MVP: Mentor is a display toggle layered on Code Agent/Auditor.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
