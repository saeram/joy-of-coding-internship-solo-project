'use client';
import { Button } from '@/components/ui/button';
import { TrashIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
const DeleteIssueButton = ({ taskId}: { taskId: number}) => {
  
    const router = useRouter();

    return (
        <AlertDialog>
            <AlertDialogTrigger>
            <Button> <TrashIcon className="mr-2"/>Delete</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
        <AlertDialogHeader>
        <AlertDialogTitle> Delete confirmation</AlertDialogTitle>
        <AlertDialogDescription>
            Are you sure you want to delete the task?
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>
            Cancel
        </AlertDialogCancel>
        <AlertDialogAction onClick={async () => {
        await axios.delete('/api/tasks/' + taskId);
        router.push('/tasks');
        router.refresh();
      }}>Delete</AlertDialogAction>
        </AlertDialogFooter>
    </AlertDialogContent>
        </AlertDialog>
   
  )
}

export default DeleteIssueButton
