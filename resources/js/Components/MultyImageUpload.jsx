import React from 'react'
import { useState, useEffect } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,)

function MultyImageUpload({ name = 'Image', files, setFiles }) {
    const [Images, setImages] = useState([]);

    useEffect(() => {
      var debounce = setTimeout(() => {
          if(Images.length != 0){
            setFiles([]);
            setFiles(Images)
          }
      }, 500);
        
    },[Images])

    return (<div className='w-full'>
      <label className='font-semibold'>{name} : <span className='text-red-600 font-semibold'>*</span></label>
      <FilePond
        files={Images}
        onupdatefiles={setImages}
        allowMultiple={true}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
    
    )
    }

    export default MultyImageUpload