import { parseEnv } from './env';

describe('parseEnv', () => {
  it('defaults the API URL for local development', () => {
    expect(parseEnv({}).NEXT_PUBLIC_API_URL).toBe('http://localhost:3000');
  });

  it('treats an empty value as unset', () => {
    expect(parseEnv({ NEXT_PUBLIC_API_URL: '' }).NEXT_PUBLIC_API_URL).toBe('http://localhost:3000');
  });

  it('strips trailing slashes', () => {
    expect(parseEnv({ NEXT_PUBLIC_API_URL: 'https://api.example.com//' }).NEXT_PUBLIC_API_URL).toBe(
      'https://api.example.com',
    );
  });

  it('rejects values that are not URLs, naming the variable', () => {
    expect(() => parseEnv({ NEXT_PUBLIC_API_URL: 'not a url' })).toThrow(/NEXT_PUBLIC_API_URL/);
  });
});
