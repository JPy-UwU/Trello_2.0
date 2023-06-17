import { useBoardStore } from "@/store/BoardStore"

const types = [
  {
    id: "todo",
    name: "ToDo",
    description: "A new task to be completed",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "A new task that is currently being worked on",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "A new task that has been completed",
    color: "bg-green-500",
  },
]

const TaskTypeRadioGroup = () => {
  const [newTaskType, setNewTaskType] = useBoardStore((state) => {
    state.newTaskType,
    state.setNewTaskType,
  });
  
  return (
    <div>TaskTypeRadioGroup</div>
  )
}

export default TaskTypeRadioGroup