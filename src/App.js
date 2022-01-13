import React, { useState } from "react";
import "./App.scss";
import UploadFiles from "./components/UploadFiles";
import CompareImages from "./components/CompareImages";

const App = () => {
  const [isCompare, setIsCompare] = useState(false);
  const [file1, setFile1] = useState({});
  const [file2, setFile2] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const onInsert = (file1, file2) => {
    setFile1(file1);
    setFile2(file2);
    setIsDisabled(false);
  };

  const handleCompareClick = () => {
    setIsCompare(true);
  };

  const handleResetClick = () => {
    setIsCompare(false);
    setFile1({});
    setFile2({});
    setIsDisabled(true);
  };

  return (
    <div>
      {!isCompare && (
        <div className="app-container">
          <p className="title">
            Compare two supposedly identical <br /> mobile screens to find
            differences
          </p>
          <UploadFiles
            file1={file1}
            file2={file2}
            onInsert={(f1, f2) => {
              onInsert(f1, f2);
            }}
          />
          <button
            className={
              isDisabled === true ? "compare-button-dis" : "compare-button-en"
            }
            onClick={handleCompareClick}
            disabled={isDisabled}
          >
            Compare versions
          </button>
        </div>
      )}
      {isCompare && <CompareImages file1={file1} file2={file2} />}
      {isCompare && (
        <button className="reset-button" onClick={handleResetClick}>
          Reset
        </button>
      )}
    </div>
  );
};

export default App;
