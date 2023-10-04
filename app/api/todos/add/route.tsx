import { NextResponse } from 'next/server';
import * as fs from 'fs';

export async function POST(request) {
  let todos;
  try {
    const rawdata = fs.readFileSync('app/api/todos/todos.json');
    todos = JSON.parse(String(rawdata));
  } catch {
    todos = [];
  }

  const newTodos = [...todos, await request.json()];
  fs.writeFileSync('app/api/todos/todos.json', JSON.stringify(newTodos, null, 2), 'utf8');
  return NextResponse.json(newTodos);
}
