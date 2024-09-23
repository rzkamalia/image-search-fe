import React from 'react';

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden relative" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-2 left-2 text-white bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          ×
        </button>
        <img src={`http://34.50.83.82:5000/image/${image}`} alt="Result" className="w-full h-auto max-h-[90vh] object-contain" />
      </div>
    </div>
  );
}

export default ImageModal;