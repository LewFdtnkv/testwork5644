import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.AUTH_SECRET;

if (!SECRET_KEY) throw new Error('Missing AUTH_SECRET env variable');

export async function POST(request: NextRequest) {
  const { username } = await request.json();

  const token = jwt.sign({ username, sub: 'user123' }, SECRET_KEY as string, {
    expiresIn: '1h',
  });
  return NextResponse.json({ token });
}
