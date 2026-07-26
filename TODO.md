# Kavach (कवच) - Password Security Suite - TODO

## Progress Tracker — ✅ COMPLETED

### Project Setup
- [x] Create project folder structure
- [x] Create TODO.md
- [x] Create index.html with all feature tabs
- [x] Create scripts.js with all functionality

### Features Implemented

- [x] **Feature 1: Password Strength Checker**
  - Real-time password criteria checking (length, upper, lower, number, symbol, common)
  - Visual strength bar with 5 levels (Weak → Very Strong)
  - Detailed score display with improvement suggestions

- [x] **Feature 2: Entropy Calculator**
  - Shannon entropy calculation (information-theoretic bits)
  - Guessing entropy based on character set size
  - Character set size detection
  - Grade (Very Weak → Very Strong)
  - Time to crack estimation at 1B/s
  - Visual entropy bar

- [x] **Feature 3: Brute-force Time Estimation**
  - 5 attack speeds: Human (100/s), CPU (10M/s), GPU (1B/s), Cluster (100B/s), ASIC (1T/s)
  - Character set selection with auto-detect
  - Detailed feasibility coloring (Instant → Infeasible)
  - Security verdict with recommendations

- [x] **Feature 4: Dictionary Attack Simulation**
  - 10,000+ common passwords database
  - Exact match detection with rank
  - Similar variant detection (partial matches)
  - Severity-graded results

- [x] **Feature 5: Password Mutation Generator**
  - 14+ mutation types: leetspeak, case changes, reversed, doubled, appended/prepended, etc.
  - Click-to-copy on any variant
  - Duplicate detection

- [x] **Feature 6: Password History Comparison**
  - Multi-password comparison (one per line)
  - Levenshtein distance calculation
  - Similarity percentage with visual meter
  - Average similarity across all old passwords
  - Security warning for similar passwords

- [x] **Feature 7: Rainbow Table Demonstration**
  - MD5 hash generation for any input
  - Sample rainbow table with 12+ common passwords
  - Password lookup in simulated rainbow table
  - Visual highlighting of found passwords

- [x] **Feature 8: Breach Simulation**
  - 10,000+ breached passwords database
  - Simulated breach count (based on real-world scale)
  - Risk level assessment (None → HIGH)
  - Clear recommendations (Safe → DO NOT USE)
  - Found variation display

- [x] **Feature 9: Password Generator (Enhanced)**
  - Character type toggles (upper, lower, number, symbol)
  - Ambiguous character exclusion (il1o0O)
  - Length slider (4-64)
  - Real-time entropy/strength display
  - Auto-copy to clipboard

- [x] **Feature 10: Leetspeak Converter**
  - 3 levels: Basic (4,3,1,0), Advanced (@,8,9,$), Extreme (multi-char)
  - Bi-directional conversion (to and from leetspeak)
  - Random substitution variety

- [x] **Feature 11: Keyboard Pattern Detection**
  - QWERTY row pattern detection (top/middle/bottom/number rows)
  - Alphabetical sequence detection (abc, xyz, reverse)
  - Repeated character detection
  - Keyboard walk detection (adjacent keys)
  - Year pattern detection
  - Overall pattern strength score (0-100%)

### Design
- [x] Neon cyberpunk theme (matching Cyber Yantra)
- [x] Tab-based navigation for all 11 features
- [x] Responsive layout (mobile/tablet/desktop)
- [x] Animations & glow effects
- [x] Toast notifications
- [x] Orbiton & monospace fonts
- [x] Scrollbar styling

