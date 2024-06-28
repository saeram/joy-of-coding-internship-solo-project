import { Badge } from '@/components/ui/badge'
import { Status } from '@prisma/client'
import { BadgeIcon } from '@radix-ui/react-icons'
import React from 'react'


const TaskStatusBadge = ({ status }: { status: Status} ) => {
  if (status === 'IN_PROGRESS')
    return <Badge>In Progress</Badge>
    if (status === 'CLOSED')
        return <Badge variant="secondary">Completed</Badge>
}

export default TaskStatusBadge
