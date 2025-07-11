/** @format */

"use client";
import { db, storage } from "@/firebase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import DropzoneComponent from "react-dropzone";
import toast from "react-hot-toast";

function Dropzone() {
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading is aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = async () => {
                await uploadPost(file);
            };
            reader.readAsArrayBuffer(file);
        });
    };

    const uploadPost = async (selectedFile: File) => {
        if (loading) return;
        if (!user) return;

        setLoading(true);
        const toastId = toast.loading("Uploading...");

        const docRef = await addDoc(collection(db, "users", user.id, "files"), {
            userId: user.id,
            filename: selectedFile.name,
            fullName: user.fullName,
            profileImg: user.imageUrl,
            timestamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size,
        });

        const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

        uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
                downloadURL: downloadURL,
            });
        });

        toast.success("Uploading Successful", {
            id: toastId,
        });

        setLoading(false);
    };

    const maxSize = 20971520;
    return (
        <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
            {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
                fileRejections,
            }) => {
                const isFileTooLarge =
                    fileRejections.length > 0 &&
                    fileRejections[0].file.size > maxSize;
                return (
                    <section className="m-4">
                        <div
                            {...getRootProps()}
                            className={cn(
                                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                                isDragActive
                                    ? "bg-[#035FFE] text-white animate-pulse"
                                    : "bg-slate-200/40 dark:bg-slate-800/80 text-slate-400"
                            )}
                        >
                            {!isDragActive && (
                                <div>
                                    <input {...getInputProps()} />
                                    <p>Click here or drop file to upload!</p>
                                </div>
                            )}
                            {isDragActive &&
                                !isDragReject &&
                                "Drop to upload this file!"}
                            {isDragReject && "File type not accepted, sorry!"}
                            {isFileTooLarge && (
                                <div className="text-destructive mt-2">
                                    File too Large
                                </div>
                            )}
                        </div>
                    </section>
                );
            }}
        </DropzoneComponent>
    );
}

export default Dropzone;
