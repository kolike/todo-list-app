import { NextResponse } from 'next/server';
import * as fs from 'fs';

export async function POST(request, { params }) {
  let todos;
  try {
    const rawdata = fs.readFileSync('app/api/todos/todos.json');
    todos = JSON.parse(String(rawdata));
  } catch {
    return NextResponse.json({ message: 'Todo list is empty' }, { status: 500 });
  }

  const newTodos = [...todos];
  const index = todos.findIndex((item) => item.id == params.id);
  if (index < 0) {
    return NextResponse.json({ message: `Id ${params.id} doesn't exist` }, { status: 500 });
  }

  newTodos[index] = await request.json();
  fs.writeFileSync('app/api/todos/todos.json', JSON.stringify(newTodos, null, 2), 'utf8');

  return NextResponse.json(newTodos);
}

export async function DELETE(_, { params }) {
  let todos;
  try {
    const rawdata = fs.readFileSync('app/api/todos/todos.json');
    todos = JSON.parse(String(rawdata));
  } catch {
    return NextResponse.json({ message: 'Todo list is empty' }, { status: 500 });
  }

  const newTodos = todos.filter((item) => item.id != params.id);
  fs.writeFileSync('app/api/todos/todos.json', JSON.stringify(newTodos, null, 2), 'utf8');

  return NextResponse.json(newTodos);
}
