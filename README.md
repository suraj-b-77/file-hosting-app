:root {
  --bg: #0d1117;
  --bg-soft: #161b22;
  --panel: #0f172a;
  --panel-alt: #111827;
  --card: rgba(17, 24, 39, 0.9);
  --card-strong: #111827;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --primary: #7c3aed;
  --primary-strong: #8b5cf6;
  --danger: #ef4444;
  --border: rgba(148, 163, 184, 0.18);
  --shadow: rgba(2, 6, 23, 0.6);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #111827 0%, var(--bg) 45%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input {
  font: inherit;
}

.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.auth-shell {
  width: min(100%, 460px);
}

.auth-card {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 32px 28px;
  box-shadow: 0 25px 60px var(--shadow);
}

.brand-block {
  text-align: center;
  margin-bottom: 22px;
}

.logo {
  width: 58px;
  height: 58px;
  margin: 0 auto 14px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.7rem;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4);
}

.brand-block h1 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 3vw, 2.4rem);
}

.brand-block p {
  margin: 0;
  color: var(--muted);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.auth-form h2 {
  margin: 8px 0 4px;
  font-size: 1.6rem;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-group label {
  color: var(--text);
  font-weight: 600;
}

.field-group input {
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-group input:focus {
  border-color: rgba(124, 58, 237, 0.8);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.18);
}

.primary-btn,
.link-btn,
.danger-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  padding: 14px 18px;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(124, 58, 237, 0.3);
}

.primary-btn:hover,
.link-btn:hover,
.danger-btn:hover {
  transform: translateY(-1px);
}

.switch-link {
  margin-top: 18px;
  text-align: center;
  color: var(--muted);
}

.switch-link a {
  color: #c4b5fd;
  font-weight: 600;
}

.alert {
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 0.95rem;
}

.alert.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fecaca;
}

.dashboard-page {
  min-height: 100vh;
  padding: 24px;
}

.dashboard-shell {
  max-width: 1280px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border);
  border-radius: 22px;
  display: grid;
  grid-template-columns: 240px 1fr;
  overflow: hidden;
  box-shadow: 0 25px 70px var(--shadow);
}

.sidebar {
  background: rgba(11, 18, 32, 0.9);
  border-right: 1px solid var(--border);
  padding: 20px 18px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 18px;
}

.sidebar-brand h3 {
  margin: 0;
  font-size: 1.3rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
}

.nav-link {
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
  transition: 0.2s ease;
}

.nav-link.active {
  background: rgba(124, 58, 237, 0.14);
  border-color: rgba(124, 58, 237, 0.45);
}

.nav-link.danger {
  color: #fca5a5;
}

.main-panel {
  padding: 26px;
}

.topbar {
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #a78bfa;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.6rem);
}

.upload-card,
.file-section {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  margin-bottom: 22px;
}

.upload-card h2,
.file-section h2 {
  margin: 0 0 18px;
  font-size: 1.35rem;
}

.upload-form {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.upload-box {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  min-height: 58px;
  border: 1px dashed rgba(168, 85, 247, 0.7);
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.08);
  color: var(--text);
  cursor: pointer;
  overflow: hidden;
}

.upload-box input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.section-head span {
  color: var(--muted);
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px 18px;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 0;
}

.file-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.12);
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.file-info h3 {
  margin: 0 0 6px;
  font-size: 1.06rem;
  word-break: break-word;
}

.file-info p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.file-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  color: var(--muted);
  font-size: 0.85rem;
}

.file-actions {
  display: flex;
  gap: 10px;
}

.link-btn,
.danger-btn {
  padding: 10px 14px;
  font-weight: 600;
}

.link-btn {
  background: rgba(124, 58, 237, 0.12);
  color: #ddd6fe;
  border: 1px solid rgba(124, 58, 237, 0.5);
}

.danger-btn {
  background: rgba(239, 68, 68, 0.08);
  color: #fecaca;
  border: 1px solid rgba(239, 68, 68, 0.45);
}

.empty-state {
  padding: 35px 18px;
  text-align: center;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.5);
}

@media (max-width: 820px) {
  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .file-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .file-meta {
    align-items: flex-start;
  }
}
