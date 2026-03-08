import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const required = (name: string) => ({
  type: 'string' as const,
  required: true,
  description: name
});

export const Technique = defineDocumentType(() => ({
  name: 'Technique',
  filePathPattern: `techniques/**/*.mdx`,
  fields: {
    title: required('Title'),
    layer: required('Layer'),
    tags: { type: 'list', of: { type: 'string' }, required: true },
    cves: { type: 'list', of: { type: 'string' }, required: true },
    tools: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: { type: 'string' }, required: true },
    severity: required('Severity'),
    last_updated: required('Last update date'),
    contributors: { type: 'list', of: { type: 'string' }, required: true }
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace('techniques/', '') }
  }
}));

export const CVEEntry = defineDocumentType(() => ({
  name: 'CVEEntry',
  filePathPattern: `cves/**/*.mdx`,
  fields: {
    cve_id: required('CVE ID'),
    title: required('Title'),
    layer: required('Layer'),
    cvss: { type: 'number', required: true },
    affected: required('Affected tech'),
    year: { type: 'number', required: true },
    summary: required('Summary'),
    exploitation_notes: required('Notes'),
    tags: { type: 'list', of: { type: 'string' }, required: true },
    tools: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: { type: 'string' }, required: true },
    severity: required('Severity'),
    last_updated: required('Last update date'),
    contributors: { type: 'list', of: { type: 'string' }, required: true }
  }
}));

export const Resource = defineDocumentType(() => ({
  name: 'Resource',
  filePathPattern: `resources/**/*.mdx`,
  fields: {
    name: required('Name'),
    layer: required('Layer'),
    category: { type: 'enum', options: ['tool', 'paper', 'talk', 'repo'], required: true },
    url: required('URL'),
    description: required('Description'),
    tags: { type: 'list', of: { type: 'string' }, required: true },
    cves: { type: 'list', of: { type: 'string' }, required: true },
    tools: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: { type: 'string' }, required: true },
    severity: required('Severity'),
    last_updated: required('Last update date'),
    contributors: { type: 'list', of: { type: 'string' }, required: true },
    title: required('Title')
  }
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Technique, CVEEntry, Resource] });
