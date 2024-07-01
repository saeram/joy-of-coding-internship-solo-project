'use client';

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from 'axios';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Task } from "@prisma/client";


const formSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(50),
  description: z.string().min(1, 'Description is required.'),
});

const TaskForm = ({ task }: { task?: Task }) => {
   const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios.post('/api/tasks', values);
    router.push('/');
  }

  return (
    <div className="m-10 w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input defaultValue={task?.title} placeholder="title" {...field} />
                </FormControl>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Description</FormLabel>
                <FormControl>
                <Textarea defaultValue={task?.description} placeholder="description.." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="mt-5" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default TaskForm;
