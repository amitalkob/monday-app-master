import { StyledDropZone } from "react-drop-zone";
import "react-drop-zone/dist/styles.css";
import { useState } from "react";

const UploadFiles = (props) => {
  const [insertedFile1, setInsertedFile1] = useState(false);
  const [insertedFile2, setInsertedFile2] = useState(false);
  const [file1, setFile1] = useState({});
  const [file2, setFile2] = useState({});

  if (insertedFile1 && insertedFile2) {
    props.onInsert(file1, file2);
  }

  return (
    <div className="drop-zones">
      <StyledDropZone
        onDrop={(file) => {
          setFile1(file);
          setInsertedFile1(true);
        }}
        accept="image/jpeg, image/png"
      >
        {insertedFile1 ? (
          <p>{`Uploaded ${file1.name}`}</p>
        ) : (
          <p className="upload-text">Upload the designer's version</p>
        )}
      </StyledDropZone>
      <StyledDropZone
        onDrop={(file) => {
          setFile2(file);
          setInsertedFile2(true);
        }}
        accept="image/jpeg, image/png"
      >
        {insertedFile2 ? (
          <p>{`Uploaded ${file2.name}`}</p>
        ) : (
          <p className="upload-text">Upload the developed version</p>
        )}
      </StyledDropZone>
    </div>
  );
};

export default UploadFiles;
