import { useState } from "react";
import uploadIcon from "../assets/upload.png";
import photoIcon from "../assets/photo.png";
import xIcon from "../assets/x.png";
import DropZone from "react-drop-zone";
import "./UploadFiles.scss";

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
      <DropZone
        onDrop={(file) => {
          setFile1(file);
          setInsertedFile1(true);
        }}
        accept="image/jpeg, image/png"
      >
        {() => (
          <div className={insertedFile1 ? "drop-zone-in" : "drop-zone"}>
            {insertedFile1 ? (
              <div className="drop-zone-inside">
                <img src={photoIcon} alt="upload" className="icon" />
                <p className="down-text">{`Uploaded ${file1.name}`}</p>
              </div>
            ) : (
              <div className="drop-zone-inside">
                <img src={uploadIcon} alt="upload" className="icon" />
                <p className="up-text">Upload the designer's version</p>
              </div>
            )}
          </div>
        )}
      </DropZone>
      <DropZone
        onDrop={(file) => {
          setFile2(file);
          setInsertedFile2(true);
        }}
        accept="image/jpeg, image/png"
      >
        {() => (
          <div className={insertedFile2 ? "drop-zone-in" : "drop-zone"}>
            {insertedFile2 ? (
              <div className="drop-zone-inside">
                <img src={photoIcon} alt="upload" className="icon" />
                <p className="down-text">{`Uploaded ${file2.name}`}</p>
              </div>
            ) : (
              <div className="drop-zone-inside">
                <img src={uploadIcon} alt="upload" className="icon" />
                <p className="up-text">Upload the designer's version</p>
              </div>
            )}
          </div>
        )}
      </DropZone>
    </div>
  );
};

export default UploadFiles;
