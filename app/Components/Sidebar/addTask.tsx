import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const AddTask = () => {
  return (
    <Button asChild className="bg-blue-700 mb-10">
    <Link href="/tasks/new"><PlusIcon className="mr-2"/>Add Task</Link>
  </Button>
  )
}

export default AddTask
