import { NextResponse } from 'next/server';
import * as fs from 'fs';

export async function GET() {
  let todos;
  try {
    const rawdata = fs.readFileSync('app/api/todos/todos.json');
    todos = JSON.parse(String(rawdata));
  } catch {
    todos = [];
  }

  return NextResponse.json(todos);
}
