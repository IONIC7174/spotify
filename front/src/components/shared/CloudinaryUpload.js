import { openUploadWidget } from "../../utils/cloudinaryService";

const CloudinaryUpload = ({seturl,setName}) => {
  const uploadImageWidget = () => {
    
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dscmnjv6v",
        uploadPreset: "SpotifySongsupload",
        
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            seturl(result.info.secure_url);
            setName(result.info.original_filename);
          //props.onImageUpload(result.info.public_id);
        }else if(error){
          
          console.log(error);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className=" bg-white text-black rounded-full p-3 font-semibold" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
