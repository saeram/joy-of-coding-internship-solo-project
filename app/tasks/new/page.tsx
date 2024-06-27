import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'


const NewTaskPage = () => {
  return (
    <div className="m-10">
   <Input placeholder='title' className="mb-5" />
   <Textarea placeholder="description.."/>
   <Button className="bg-blue-700 mt-5">Submit</Button>
   </div>
  )
}

export default NewTaskPage