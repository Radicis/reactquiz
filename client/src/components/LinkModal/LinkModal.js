import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton/CustomButton';

function LinkModal({ hide, url }) {
  const [copied, setCopied] = useState(false);
  const urlRef = useRef(null);

  const copyToClip = () => {
    urlRef.current.select();
    document.execCommand('copy');
    setCopied(true);
  };

  return (
    <div className="z-30 flex flex-col justify-center items-center content-center bg-white rounded-lg border shadow-2xl p-6">
      <div
        className="text-center mb-6 cursor-pointer"
        onClick={document.queryCommandSupported('copy') && copyToClip}
      >
        Click To Copy
      </div>
      <input
        onClick={document.queryCommandSupported('copy') && copyToClip}
        ref={urlRef}
        onChange={() => {}}
        className="text-2xl flex font-semibold flex-grow cursor-pointer mb-6 text-center"
        value={!copied ? url : 'Copied!'}
      />
      <CustomButton clickAction={() => hide()} label="OK" />
    </div>
  );
}

LinkModal.propTypes = {
  hide: PropTypes.func,
  url: PropTypes.string
};

export default LinkModal;
