import { useState } from 'react';
import './uploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');
  return (
    <main>
      <form onClick={() => document.querySelector('.input-field').click()}>
        <input
          type='file'
          accept='image/*'
          className='input-field'
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p className='text-center font-bold text-[#25334a]'>
              Upload Bank Transaction
            </p>
            <p className='text-center font-bold text-[#25334a]'>
              {' '}
              Supporting Documents
            </p>
            <p className='text-[#7B809A] text-sm mb-8 pb-10 text-center mx-auto'>
              Max 5mb
            </p>
          </>
        )}
      </form>

      <section className='uploaded-row'>
        <AiFillFileImage color='#1475cf' />
        <span className='upload-content'>
          {fileName} -
          <MdDelete
            onClick={() => {
              setFileName('No selected File');
              setImage(null);
            }}
          />
        </span>
      </section>
    </main>
  );
}

export default Uploader;
