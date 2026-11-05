import test from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const configPath = path.resolve('next-sitemap.config.js');
const originalCwd = process.cwd();

const OLD_DATE = '2026-05-29T08:39:01+02:00';
const NEW_DATE = '2026-11-03T09:45:17+01:00';

function git(cwd, command, date = OLD_DATE) {
  execSync(`git ${command}`, {
    cwd,
    stdio: 'ignore',
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'Test',
      GIT_AUTHOR_EMAIL: 'test@example.com',
      GIT_COMMITTER_NAME: 'Test',
      GIT_COMMITTER_EMAIL: 'test@example.com',
      GIT_AUTHOR_DATE: date,
      GIT_COMMITTER_DATE: date,
    },
  });
}

function write(root, file, content) {
  const absolute = path.join(root, file);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, content);
}

// A repository with one old German post, one old English post in `posts/en/`,
// a newer English post, and the content-collections output that points to them.
function createRepository() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-lastmod-'));
  git(root, 'init -q');
  write(root, 'posts/old-de.mdx', 'old');
  write(root, 'posts/en/old-en.mdx', 'old');
  git(root, 'add .');
  git(root, 'commit -q -m old');
  write(root, 'posts/en/new-en.mdx', 'new');
  git(root, 'add .', NEW_DATE);
  git(root, 'commit -q -m new', NEW_DATE);
  return root;
}

function writeGeneratedPosts(root) {
  const entry = (url, sourceFilePath, date) => ({
    url,
    date,
    _raw: { sourceFilePath, sourceFileName: path.basename(sourceFilePath) },
  });
  write(root, '.content-collections/generated/allPosts.js', `export default ${JSON.stringify([
    entry('/blog/old-de', 'old-de.mdx', '2026-05-01T00:00:00.000Z'),
    entry('/en/blog/old-en', 'en/old-en.mdx', '2026-05-02T00:00:00.000Z'),
    entry('/en/blog/new-en', 'en/new-en.mdx', '2026-11-02T00:00:00.000Z'),
  ])};`);
}

async function lastmodFrom(root, urlPath) {
  process.chdir(root);
  delete require.cache[configPath];
  try {
    const config = require(configPath);
    const entry = await config.transform({ changefreq: 'daily', priority: 0.7 }, urlPath);
    return entry.lastmod;
  } finally {
    process.chdir(originalCwd);
  }
}

test('uses the git date of an English post stored in posts/en/', async () => {
  const root = createRepository();
  writeGeneratedPosts(root);
  assert.equal(await lastmodFrom(root, '/en/blog/old-en'), OLD_DATE);
  assert.equal(await lastmodFrom(root, '/en/blog/new-en'), NEW_DATE);
  assert.equal(await lastmodFrom(root, '/blog/old-de'), OLD_DATE);
});

test('does not report the shallow clone boundary as a modification date', async () => {
  const source = createRepository();
  const clone = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-lastmod-clone-'));
  execSync(`git clone -q --depth 1 file://${source} ${clone}`, { stdio: 'ignore' });
  writeGeneratedPosts(clone);

  // The boundary commit is the only commit in this clone, so git reports its
  // date for every file. That date says nothing about when the file changed.
  assert.equal(await lastmodFrom(clone, '/en/blog/old-en'), '2026-05-02T00:00:00.000Z');
  assert.equal(await lastmodFrom(clone, '/blog/old-de'), '2026-05-01T00:00:00.000Z');
});

test('keeps a real date for a file changed after the shallow clone boundary', async () => {
  const source = createRepository();
  const clone = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-lastmod-clone-'));
  execSync(`git clone -q --depth 1 file://${source} ${clone}`, { stdio: 'ignore' });
  writeGeneratedPosts(clone);
  write(clone, 'posts/en/old-en.mdx', 'edited');
  git(clone, 'add .', NEW_DATE);
  git(clone, 'commit -q -m edit', NEW_DATE);

  assert.equal(await lastmodFrom(clone, '/en/blog/old-en'), NEW_DATE);
});

test('omits lastmod for a non-post page when only the clone boundary dates it', async () => {
  const source = createRepository();
  write(source, 'app/(de)/kontakt/page.tsx', 'page');
  git(source, 'add .', NEW_DATE);
  git(source, 'commit -q -m page', NEW_DATE);
  const clone = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-lastmod-clone-'));
  execSync(`git clone -q --depth 1 file://${source} ${clone}`, { stdio: 'ignore' });
  writeGeneratedPosts(clone);

  assert.equal(await lastmodFrom(clone, '/kontakt'), undefined);
});
