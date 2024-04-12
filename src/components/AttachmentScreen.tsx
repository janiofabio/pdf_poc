import React, { useState } from 'react';
import '../css/styles.css';


const AttachmentScreen: React.FC = () => {
  // Estado para armazenar os arquivos PDF anexados
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);

  // Função para lidar com a seleção de arquivos
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setPdfFiles(selectedFiles);
    }
  };

  // Função para enviar os arquivos anexados
  const handleSubmit = () => {
    // Implemente a lógica para enviar os arquivos
    console.log('Arquivos PDF anexados:', pdfFiles);
  };

  return (
    <div>
      <h2>Anexar Lote de PDFs</h2>
      <input type="file" accept=".pdf" multiple onChange={handleFileSelect} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default AttachmentScreen;
