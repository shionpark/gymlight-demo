import { useState } from 'react';

import * as Styled from './ImageUploadInput.styles';

interface IImageUploadInputProps {
  setImageState?: (image: string) => void;
  imageState?: string;
}

const ImageUploadInput = ({ setImageState, imageState }: IImageUploadInputProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>(imageState || '');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validExtensions = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
      if (!validExtensions.includes(file.type)) {
        alert('적절한 이미지 형식이 아닙니다. png,jpg, jpeg, gif중 한가지 형식을 사용해주세요.');
        return;
      }
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      if (setImageState) {
        setImageState(objectUrl);
      }
    }
  };

  return (
    <Styled.Wrapper>
      {previewUrl ? (
        <Styled.PreviewImage src={previewUrl} alt="Uploaded preview" />
      ) : (
        <Styled.MockupBox />
      )}
      <Styled.ImageInput type="file" onChange={handleFileChange} accept=".png,.jpg,.jpeg,.gif" />
    </Styled.Wrapper>
  );
};

export default ImageUploadInput;
