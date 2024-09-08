import React, { useRef } from 'react';
import { handleDragOver, handleDrop } from '../utils/fileUtils';

function FileUpload({ file, setFile, preview, setPreview }) {
  const fileInputRef = useRef(null);

  return (
    <div className="relative">
      <div 
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-300 ease-in-out"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, setFile, setPreview)}
        onClick={() => fileInputRef.current.click()}
      >
        {preview ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={preview} 
              alt="Selected" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center rounded-lg">
              <p className="text-white text-sm font-medium px-3 py-2 bg-blue-800 bg-opacity-75 rounded-full">
                {file.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="mt-1 text-sm text-blue-500">
              <span className="font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="mt-1 text-xs text-blue-400">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
      <input 
        ref={fileInputRef}
        type="file" 
        className="hidden" 
        onChange={(e) => {
          const selectedFile = e.target.files[0];
          setFile(selectedFile);
          if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(selectedFile);
          }
        }}
        accept="image/*"
      />
    </div>
  );
}

export default FileUpload;