import { useState } from "react";
import deepai from "deepai";

const useImageGen = (inputText) => {
  const [url, setUrl] = useState("");
  const [imageWait, setImageWait] = useState("no image yet");

  const handleImgGen = async () => {
    setImageWait("plz wait");
    deepai.setApiKey("2ee562fb-63b0-4268-9b3f-a64792ddb865"); /// set this in .env

    const resp = await deepai.callStandardApi("text2img", {
      text: inputText,
    });
    setUrl(resp.output_url);
    setImageWait("ta da");
  };
  return { url, imageWait, handleImgGen };
};

export default useImageGen;

{
  /* <p>{imageWait}</p>
          <img src={url} />
          <button onClick={handleImgGen}>click to get an image from ai</button> */
}
