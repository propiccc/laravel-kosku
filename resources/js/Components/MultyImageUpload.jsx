import React from 'react'
import { useState, useEffect } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileEncode)

function MultyImageUpload({ name = 'Image', files, setFiles }) {
       
      
    return (<div className='w-full'>
      <label className='font-semibold'>{name} : <span className='text-red-600 font-semibold'>*</span></label>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <button onClick={() => HandleClick()}>Clicl</button>
    </div>
    
    )
    }

    export default MultyImageUpload