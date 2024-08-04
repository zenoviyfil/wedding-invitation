"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserTypes } from "@/types/users";
import Image from "next/image";
import { UserRole } from "@prisma/client";
import { ActionsUserMenu } from "@/app/(admin)/_components/user/actions-user-menu";

// import { EditableTextCell } from "@/app/(admin)/_components/editable-text-cell";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<UserTypes>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={value => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ getValue }) => {
      const id = getValue<string>();
      return (
        <div title={id} className="text-sm truncate font-mono w-[80px]">
          {id}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    // cell: EditableTextCell,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ getValue }) => {
      const image = getValue<string>();
      if (!image) {
        return "";
      } else {
        return (
          <Image
            width={32}
            height={32}
            src={image}
            alt="user image"
            className="rounded-full"
          />
        );
      }
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "emailVerified",
    header: "Verified",
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      if (!date) {
        return "no";
      }
      return (
        <span className="text-sm font-mono">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => {
      const role = getValue<UserTypes["role"]>();
      if (role === UserRole.ADMIN) {
        return <span className="text-sm text-green-800 font-bold">{role}</span>;
      } else {
        return <span className="text-sm text-blue-500">{role}</span>;
      }
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return (
        <span className="text-sm font-mono">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return (
        <span className="text-sm font-mono">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return <ActionsUserMenu user={user} />;
    },
  },
];
