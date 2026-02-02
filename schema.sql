DROP TABLE IF EXISTS batches;
CREATE TABLE batches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active', -- active, harvested, closed
  chicks_ordered INTEGER,
  start_date TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS daily_logs;
CREATE TABLE daily_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  batch_id INTEGER,
  log_date TEXT,
  feed_lbs REAL,
  mortality_count INTEGER,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS feedback;
CREATE TABLE feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
