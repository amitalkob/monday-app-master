import { Rnd } from "react-rnd";
import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";
import Resemble from "resemblejs";
import "./CompareImages.scss";

const CompareImages = (props) => {
  const [opacity, setOpacity] = useState(50);
  const [result, setResult] = useState({});
  const [url1, setUrl1] = useState();
  const [url2, setUrl2] = useState();

  useEffect(() => {
    (async () => {
      setUrl1(URL.createObjectURL(props.file1));
      setUrl2(URL.createObjectURL(props.file2));

      const b = (data) => {
        setResult(data);
      };

      return await Resemble(URL.createObjectURL(props.file1))
        .compareTo(URL.createObjectURL(props.file2))
        .ignoreColors()
        .onComplete(b);
    })();
  }, []);

  const handleOpacity = (e) => {
    setOpacity(e.target.value);
  };

  const opacityDiv = (
    <div className="opacity">
      <input
        type="range"
        id="opacity"
        name="opacity"
        min="0"
        max="100"
        onChange={handleOpacity}
      ></input>

      <label htmlFor="opacity">Opacity</label>
    </div>
  );

  const RatioImage = (props) => (
    <AspectRatio
      ratio="1"
      style={{
        maxWidth: "600px",
        border: "1px solid",
        opacity: props.isTop === true ? opacity / 100 : 1,
      }}
    >
      <img src={props.fileNum === 1 ? url1 : url2} alt="" />
    </AspectRatio>
  );

  return (
    <div className="compare-container">
      <p></p>
      <p className="identity-title">Identity Level</p>
      <p className="identity-num">{`${100.0 - result.misMatchPercentage}%`}</p>
      {opacityDiv}
      <Rnd
        default={{
          x: 0,
          y: 101,
        }}
        bounds="parent"
        dragAxis="none"
        enableResizing={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <RatioImage isTop={false} fileNum={1} />
        <Rnd
          default={{
            x: 0,
            y: 0,
          }}
          enableResizing={{
            bottom: true,
            right: true,
            bottomRight: true,
          }}
        >
          <RatioImage isTop={true} fileNum={2} />
        </Rnd>
      </Rnd>
    </div>
  );
};

export default CompareImages;
