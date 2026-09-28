import { readFile } from 'node:fs/promises';
import { Pool } from 'pg';

const url = process.env.TALENTPLEX_DATABASE_URL;
if (!url) { console.error('TALENTPLEX_DATABASE_URL is required.'); process.exit(1); }
const sql = await readFile(new URL('../db/001_contact_submissions.sql', import.meta.url), 'utf8');
const pool = new Pool({ connectionString: url, max: 1 });
try { await pool.query(sql); console.log('TalentPlex contact migration applied.'); } catch (error) { console.error('Migration failed:', error instanceof Error ? error.message : 'unknown error'); process.exitCode = 1; } finally { await pool.end(); }
