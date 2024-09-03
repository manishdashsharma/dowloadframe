import React from 'react';
import FeedbackCard from './FeedbackCard';
import top from "./assets/VoC Try me.svg";
import side from "./assets/Voc Try Me (1).svg";
import bottom from "./assets/Voc Try Me (2).svg";
import mobileIcon from "./mobile.svg";
import vocImage from "./VOC.png";
import plate from "./assets/plate.png";

const FrameCard = ({ qrCodeSrc, workspaceId, userId, qrCodeId }) => {
  return (
    <div className="relative w-[105mm] h-[148mm] border border-dotted border-black">
      {/* Top SVG */}
      <img src={top} alt="Top" className="absolute top-0 left-0 w-full h-[13mm] object-cover" />

      {/* Inner container for the FeedbackCard and Side SVG */}
      <div className="absolute top-[13mm] right-[21mm] bottom-[16mm] left-0 flex items-center">
        {/* Feedback Card */}
        <div className="flex-1">
          <div className="w-[84mm] h-[119mm] bg-white border border-dotted border-black p-2 flex flex-col items-center justify-between">
            <div className="flex items-center">
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
        {/* Side SVG */}
        <img src={side} alt="Side" className="w-[21mm] h-auto" />
      </div>

      {/* Bottom SVG */}
      <img src={bottom} alt="Bottom" className="absolute bottom-0 left-0 w-full h-[16mm] object-cover" />
    </div>
  );
};

export default FrameCard;
