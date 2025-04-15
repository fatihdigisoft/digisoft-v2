import { useEffect, useState } from 'react';

export default function FileList() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/uploads')
      .then((res) => res.json())
      .then((data) => setFiles(data.files));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-lg">Yüklenen Dosyalar</h2>
      <ul>
        {files.map((f) => (
          <li key={f}>
            <a href={`/uploads/${f}`} target="_blank" download>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
