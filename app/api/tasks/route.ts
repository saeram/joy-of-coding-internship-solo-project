import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

const createTaskSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
  });
  
  export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createTaskSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });
    const newTask = await prisma.task.create({
      data: { title: body.title, description: body.description },
    });
  
    return NextResponse.json(newTask, { status: 201 });
  }