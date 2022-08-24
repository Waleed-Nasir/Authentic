import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


const style = {

    dropContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: ' 0',
        border: ' 1px dashed #d8cdcd',
        padding: 25,
        height: 120,
        cursor: 'pointer'
    }
}


export default function DropZoneUploader({ getFile = () => { } }) {
    const [Upload, setUpload] = useState(null)
    const onDrop = useCallback(async (acceptedFiles, a, event) => {
        var reader = new FileReader();
        const [file] = acceptedFiles;
        getFile(file)
        setUpload(file)
    }, []);
    const { getRootProps, getInputProps, inputRef, isDragActive } = useDropzone({
        onDrop, maxFiles: 1, accept: {
            'image/*': ['.jpeg', '.png'],
        }
    });
    return (
        <div {...getRootProps()} style={style.dropContainer}>
            <input  {...getInputProps()} accept="image/*" />
            {Upload ? <div onClick={() => setUpload(null)}>
                <p className="p-0 m-0 f-w-900 ">{Upload.name} Image Uploaded <i className='feather icon-trash' /></p>
            </div> : <>
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <div>
                        <p className="p-0 m-0 ">Drag 'n' drop your image here</p>
                        <p className="p-0 m-0 f-w-900 ">Upload From Computer</p>
                    </div>
                )}
            </>}
        </div>
    );
}