interface Env {
  ASSETS: Fetcher;
}

async function serve404(request: Request, env: Env): Promise<Response> {
  try {
    const page = await env.ASSETS.fetch(
      new Request(new URL('/404.html', request.url).toString())
    );
    return new Response(page.body, {
      status: 404,
      headers: page.headers,
    });
  } catch {
    return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } });
  }
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

    let response: Response;
    try {
      response = await env.ASSETS.fetch(request);
    } catch {
      return serve404(request, env);
    }

    if (response.status === 404) {
      return serve404(request, env);
    }

    return response;
  },
} satisfies ExportedHandler<Env>;
