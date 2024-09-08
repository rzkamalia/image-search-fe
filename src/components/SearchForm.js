import React from 'react';
import FileUpload from './FileUpload';

function SearchForm({ file, setFile, preview, setPreview, loading, handleSubmit }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FileUpload file={file} setFile={setFile} preview={preview} setPreview={setPreview} />
        <div className="text-center">
          <button 
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1"
            disabled={!file || loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : 'Search'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;