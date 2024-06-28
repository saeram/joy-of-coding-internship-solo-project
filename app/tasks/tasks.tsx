
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import Link from "next/link"
import prisma from "@/prisma/client"
import TaskStatusBadge from "../Components/TaskStatusBadge"

const Tasks = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <div className="flex">
      {tasks.map((task) => (
        <Card key={task.id} className="m-5">
          <CardHeader>
            <TaskStatusBadge status={task.status}/>
            <CardTitle className="pt-8">
              <Link href={`/tasks/${task.id}`}>
              {task.title}
              </Link>
              </CardTitle>
          </CardHeader>
          <CardContent>{task.description}</CardContent>
          <CardFooter>{task.createdAt.toDateString()}</CardFooter>
        </Card>
      ))}
      </div>
  );
}

export default Tasks

