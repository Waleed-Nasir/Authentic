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
        minHeight: 120,
        cursor: 'pointer',
        flexDirection: 'column'
    }
}


export default function DropZoneUploader({ getFile = () => { } }) {
    const [Upload, setUpload] = useState([])
    const onDrop = useCallback(async (acceptedFiles, a, event) => {
        var reader = new FileReader();
        const [file] = acceptedFiles;
        if (acceptedFiles.length > 1) {
            getFile(acceptedFiles)
            setUpload(acceptedFiles)
        } else {
            getFile(file)
            setUpload([file])
        }

    }, []);
    const { getRootProps, getInputProps, inputRef, isDragActive } = useDropzone({
        onDrop, maxFiles: 10, accept: {
            'image/*': ['.jpeg', '.png'],
        }
    });


    const handleImages = (No_Image_need) => {
        let NewArray = Upload.filter((i, index) => index !== No_Image_need)
        getFile(NewArray)
        setUpload(NewArray)
    }



    return (
        <div {...getRootProps()} style={style.dropContainer}>
            <input  {...getInputProps()} accept="image/*" />
            {Upload.length > 0 ? Upload.map((item, index) => <div onClick={() => handleImages(index)}>
                <p className="p-0 m-0 f-w-900 ">{item?.name} Image Uploaded <i className='feather icon-trash' /></p>
            </div>) : <>
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