export const createPreview = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  
  export const handleDragOver = (event) => {
    event.preventDefault();
  };
  
  export const handleDrop = (event, setFile, setPreview) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    
    if (droppedFile) {
      createPreview(droppedFile).then(setPreview);
    }
  };