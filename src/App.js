import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ImageModal from './components/ImageModal';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/search', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error searching image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <SearchForm 
          file={file} 
          setFile={setFile} 
          preview={preview} 
          setPreview={setPreview} 
          loading={loading} 
          handleSubmit={handleSubmit} 
        />
        <SearchResults results={results} setSelectedImage={setSelectedImage} />
      </div>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

export default App;