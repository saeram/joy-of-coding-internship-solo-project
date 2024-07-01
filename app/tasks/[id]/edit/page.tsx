import prisma from '@/prisma/client';
import React from 'react'
import TaskForm from '../../_components/TaskForm';
import { notFound } from 'next/navigation';

interface Props {
    params: { id: string }
}

const EditTaskpage = async ({ params }: Props) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) }
    });
    if (!task)
        notFound();

  return (
   <TaskForm task= {task} />
  )
}

export default EditTaskpage
