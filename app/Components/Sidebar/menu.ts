import { CheckIcon, FileTextIcon, HomeIcon } from "@radix-ui/react-icons";

const menu = [
  { id: 1, label: "All Tasks", icon: HomeIcon, href: "/tasks" },
  { id: 2, label: "In Progress", icon: FileTextIcon, href: "/inprogress" },
  { id: 3, label: "Completed", icon: CheckIcon, href: "/completed" },
];

export default menu;
