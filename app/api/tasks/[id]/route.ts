import { taskSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!task)
    return NextResponse.json({ error: "Invalid task" }, { status: 404 });
  const updatedTask = await prisma.task.update({
    where: { id: task.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedTask);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
      const task = await prisma.task.findUnique({
            where: { id: parseInt(params.id) }
        });

        if (!task)
            return NextResponse.json({ error: 'Invalid issue' }, { status: 404})
        await prisma.task.delete({
            where: { id: task.id }
        });

        return NextResponse.json({})
        }