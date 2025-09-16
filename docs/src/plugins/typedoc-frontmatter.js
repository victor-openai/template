import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

/** @param {import('typedoc-plugin-markdown').MarkdownApplication} app */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.frontmatter = {
      ...page.frontmatter,
      title:
        page.frontmatter?.title ||
        page.title ||
        page.url?.split('/').pop() ||
        undefined,
    };
  });
}
