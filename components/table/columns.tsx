/** @format */

"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon } from "react-file-icon";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
export const columns: ColumnDef<FileType>[] = [
    {
        accessorKey: "type",
        header: "type",
        cell: ({ renderValue, ...props }) => {
            const type = renderValue() as string;
            const extension: string = type.split("/")[1];
            return (
                <div className="w-10">
                    <FileIcon
                        extension={extension}
                        labelColor={COLOR_EXTENSION_MAP[extension]}
                        // @ts-ignore
                        // {...defaultStyles[extension]}
                    />
                </div>
            );
        },
    },
    {
        accessorKey: "filename",
        header: "Filename",
    },
    {
        accessorKey: "timestamp",
        header: "Date Added",
    },
    {
        accessorKey: "size",
        header: "Size",
        cell: ({ renderValue, ...props }) => {
            return <span>{prettyBytes(renderValue() as number)}</span>;
        },
    },
    {
        accessorKey: "downloadURL",
        header: "Link",
        cell: ({ renderValue, ...props }) => (
            // if does not work change Link to a
            <Button
                variant={"outline"}
                className="hover:cursor-pointer hover:text-blue-500"
            >
                <Download className="" />
            </Button>
        ),
    },
];
