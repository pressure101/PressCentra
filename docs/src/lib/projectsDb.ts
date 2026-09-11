import initSqlJs from 'sql.js';
import type { Project } from '../types/projects.ts';

const seedProjects: Project[] = [
  {
    number: '01',
    name: 'Deal Finder',
    type: 'Full-stack product',
    description: 'A deal discovery platform with a web frontend, API, admin tools, and an ETL pipeline for turning source data into useful offers.',
    stack: ['React', 'TypeScript', 'Python', 'ETL'],
    detailPath: '/projects/deal-finder',
    githubUrl: 'https://github.com/pressure101/PressCentra/tree/main/deal-finder',
    accent: 'from-emerald-400/25 via-teal-500/10 to-transparent',
  },
  {
    number: '02',
    name: 'Resume Tweak',
    type: 'Productivity utility',
    description: 'A small Streamlit tool that helps tailor resumes to a specific opportunity with a simple, focused workflow.',
    stack: ['Python', 'Streamlit', 'AI tooling'],
    detailPath: '/projects/resume-tweak',
    githubUrl: 'https://github.com/pressure101/PressCentra/tree/main/resume-tweak',
    accent: 'from-orange-400/25 via-rose-500/10 to-transparent',
  },
  {
    number: '03',
    name: 'Loudmouth',
    type: 'Creative project',
    description: 'A project built to give ideas, opinions, and experiments a louder place to live on the web.',
    stack: ['React', 'JavaScript', 'Web'],
    detailPath: '/loudmouth',
    githubUrl: 'https://github.com/pressure101/loudmouth',
    accent: 'from-cyan-400/25 via-blue-500/10 to-transparent',
  },
  {
    number: '04',
    name: 'RAG Pipeline',
    type: 'Productivity utility',
    description: 'Local utility to search and validate queries to pointed documents.',
    stack: ['Cohere', 'Python', 'Docling', 'LanceDB'],
    detailPath: '/rag-pipeline',
    githubUrl: 'https://github.com/pressure101/PressCentra/tree/main/rag-pipeline',
    accent: 'from-emerald-400/25 via-teal-500/10 to-transparent',
  },
];

function mapProjectRow(row: (string | number | null)[]): Project {
  const [number, name, type, description, stackJson, detailPath, githubUrl, accent] = row;

  return {
    number: String(number ?? ''),
    name: String(name ?? ''),
    type: String(type ?? ''),
    description: String(description ?? ''),
    stack: (() => {
      if (typeof stackJson === 'string') {
        try {
          const parsed = JSON.parse(stackJson);
          return Array.isArray(parsed) ? parsed.map(String) : [];
        } catch {
          return [];
        }
      }

      return [];
    })(),
    detailPath: String(detailPath ?? ''),
    githubUrl: String(githubUrl ?? ''),
    accent: String(accent ?? ''),
  };
}

export async function loadProjects(): Promise<Project[]> {
  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`,
  });

  const db = new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number TEXT NOT NULL,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      stack TEXT NOT NULL,
      detail_path TEXT NOT NULL,
      github_url TEXT NOT NULL,
      accent TEXT NOT NULL,
      sort_order INTEGER NOT NULL
    );
  `);

  const existingCount = db.exec('SELECT COUNT(*) AS count FROM projects;')[0]?.values[0][0] as number | undefined;

  if (!existingCount || Number(existingCount) === 0) {
    const insertStatement = db.prepare(`
      INSERT INTO projects (number, name, type, description, stack, detail_path, github_url, accent, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `);

    seedProjects.forEach((project, index) => {
      insertStatement.run([
        project.number,
        project.name,
        project.type,
        project.description,
        JSON.stringify(project.stack),
        project.detailPath,
        project.githubUrl,
        project.accent,
        index + 1,
      ]);
    });

    insertStatement.free();
  }

  const result = db.exec(`
    SELECT number, name, type, description, stack, detail_path, github_url, accent
    FROM projects
    ORDER BY sort_order ASC;
  `);

  const rows = result[0]?.values ?? [];
  return rows.map(mapProjectRow);
}
