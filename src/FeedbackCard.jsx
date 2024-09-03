import mobileIcon from "./mobile.svg";
import vocImage from "./VOC.png";
import plate from "./assets/plate.png";

const FeedbackCard = ({ userId, workspaceId, qrCodeSrc, qrCodeId }) => {
  return (
    <div className="flex flex-col">
      <div className="w-[84mm] h-[119mm] bg-white border border-zinc-300 p-2 flex flex-col items-center justify-between">
        <div className="flex items-center ">
          <img src={plate} alt="" className="w-56" />
        </div>
        <img src={qrCodeSrc} alt="QR Code" className="w-48 h-48" />
        <div className="flex items-center justify-center">
          <img src={vocImage} alt="VOC Image" className="w-16 h-16 mr-2" />
          <p className="text-gray-700 text-xs text-center font-bold font-poppins">
            Scan QR code to give your feedback
          </p>
          <img src={mobileIcon} alt="Mobile Icon" className="w-16 h-16 ml-2" />
        </div>
        <a
          href="https://www.dowellresearch.sg"
          className="text-red-500 text-xs hover:underline mt-1 font-poppins font-medium"
        >
          www.dowellresearch.sg
        </a>
        <div className="flex items-center space-x-2 text-xs mt-2">
          <p className="text-gray-700 text-center font-poppins font-bold text-[12px]">
            {workspaceId}
          </p>
          <p className="text-gray-700 text-center text-sm font-poppins text-[12px]">
            {userId}
          </p>
          <p className="text-gray-700 text-center text-sm font-poppins text-[12px]">
            {qrCodeId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
