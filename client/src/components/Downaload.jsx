import { useState } from "react";
import JSZip from "jszip";

// npm i jszip
export default function Download({stickerArr}) {

    // const [stickerArr ,setStickerArr] = useState([
    //     "cat.png"
    // ])

    const zip = new JSZip();

    async function handleZip() {
        for (var i = 0; i < stickerArr.length; i++) {
            const response = await fetch(stickerArr[i]);
            const blob = await response.blob();
            // console.log(blob);
            zip.file(stickerArr[i].split("/").pop(), blob);

            if (i == stickerArr.length - 1) {
                const zipData = await zip.generateAsync({
                    type: "blob",
                    streamFiles: true,
                });
                // console.log(zipData);
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(zipData);
                link.download = "snapcial-ai.zip";
                link.click();
            }
        }
    }

    return (
        <div>
             <button onClick={handleZip}>Download</button>
        </div>
      )
}