interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // 301 redirect for paths missing a trailing slash (skip files with extensions)
    const lastSegment = path.split('/').pop() ?? '';
    if (!path.endsWith('/') && !lastSegment.includes('.')) {
      const target = new URL(request.url);
      target.pathname = path + '/';
      return Response.redirect(target.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
