import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    alert("Yüklendi!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Dump Dosyası Yükle</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleUpload}>
        Yükle
      </button>
    </div>
  );
}
