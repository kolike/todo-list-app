import { NextResponse } from 'next/server';

export async function GET() {
  const todos = require('app/todos/todos.json');
  return NextResponse.json(todos);
}
