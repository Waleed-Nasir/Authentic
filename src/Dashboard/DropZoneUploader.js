import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";


const style = {

    dropContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: ' 0',
        border: ' 1px dashed #d8cdcd',
        padding: 25,
        height:120,
        cursor:'pointer'
    }
}


export default function DropZoneUploader() {
    const onDrop = useCallback(async (acceptedFiles) => {
        const formData = new FormData();
        const [file] = acceptedFiles;
        formData.append("file", file);
        await fetch("https://httpbin.org/post", {
            method: "POST",
            body: formData
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={style.dropContainer}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <div>
                <p  className="p-0 m-0 ">Drag 'n' drop your image here</p>
                <p className="p-0 m-0 f-w-900 ">Upload From Computer</p>
                </div>
            )}
        </div>
    );
}