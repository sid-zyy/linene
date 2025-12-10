<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Linene — Readme</title>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; line-height:1.6; color:#0f172a; padding:28px; max-width:900px; margin:0 auto; }
    h1,h2,h3 { color:#0b1220; margin-top:1.2rem; }
    pre { background:#0b1220; color:#e6eef8; padding:12px; border-radius:6px; overflow:auto; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace; font-size:0.95em; background:#f3f4f6; padding:2px 6px; border-radius:4px; }
    .muted { color:#475569; }
    ul { padding-left:1.1rem; }
    .section { margin-bottom:1.1rem; }
    .kbd { display:inline-block; padding:2px 6px; border-radius:6px; background:#eef2ff; border:1px solid #e0e7ff; font-family:inherit; }
  </style>
</head>
<body>
  <h1><strong>Linene</strong> — Simple Note-Taking App</h1>

  <p class="muted">A minimal full-stack note app built with <strong>React (Vite)</strong>, <strong>Express</strong> and <strong>MongoDB</strong>. Intended to be easy to run and extend.</p>

  <hr />

  <div class="section">
    <h2><strong>Features</strong></h2>
    <ul>
      <li><strong>Create notes</strong> with a title and content.</li>
      <li><strong>View all notes</strong> in a single list.</li>
      <li><strong>Clean UI</strong> using TailwindCSS + DaisyUI.</li>
      <li><strong>REST API</strong> powered by Express + Mongoose.</li>
      <li><strong>Rate limiting</strong> via Upstash to prevent spammy requests.</li>
      <li><strong>Axios-based client</strong> for API calls and basic error handling.</li>
    </ul>
  </div>

  <div class="section">
    <h2><strong>Tech Stack</strong></h2>
    <ul>
      <li><strong>Frontend:</strong> React (Vite), React Router, Axios, TailwindCSS + DaisyUI, Lucide icons, react-hot-toast</li>
      <li><strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose, Upstash rate limiting</li>
    </ul>
  </div>
</body>
</html>
