import { z } from 'zod';

const schema = z.object({
  /** Base URL of corridor-finder-api, without a trailing slash. */
  NEXT_PUBLIC_API_URL: z
    .url({ error: 'NEXT_PUBLIC_API_URL must be a full URL such as http://localhost:3000' })
    .transform((url) => url.replace(/\/+$/, '')),
});

export type Env = z.infer<typeof schema>;

/** Validates raw values. Empty strings count as unset so the default applies. */
export function parseEnv(raw: Record<string, string | undefined>): Env {
  const cleaned = { NEXT_PUBLIC_API_URL: raw.NEXT_PUBLIC_API_URL || 'http://localhost:3000' };
  const result = schema.safeParse(cleaned);
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`);
    throw new Error(`Invalid environment configuration. See .env.example.\n${lines.join('\n')}`);
  }
  return result.data;
}

// NEXT_PUBLIC_ variables are inlined at build time only when referenced literally like this.
export const env = parseEnv({ NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL });
