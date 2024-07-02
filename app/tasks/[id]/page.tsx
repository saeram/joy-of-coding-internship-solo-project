import TaskStatusBadge from '@/app/Components/TaskStatusBadge';
import { Button } from '@/components/ui/button';
import prisma from '@/prisma/client'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import DeleteIssueButton from './DeleteIssueButton';

interface Props {
    params: { id: string }
}

const TaskDetailPage = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!task)
    notFound();
  
    return (
    <div className="grid grid-cols-2 mt-5">
      <div>
            <TaskStatusBadge status={task.status} />

      <h2 className="py-5 font-bold text-xl">{task.title}</h2>
      <p>{task.description}</p>
      <p className="mt-10">{task.createdAt.toDateString()}</p>
      </div>
      <div>
      <Button className="mr-10">
        <Pencil1Icon className="mr-2"/>
        <Link href={`/tasks/${task.id}/edit`}>
          Edit</Link>
          </Button>
        <DeleteIssueButton taskId={task.id} />
      

      </div>

    </div>
  )
}

export default TaskDetailPage
