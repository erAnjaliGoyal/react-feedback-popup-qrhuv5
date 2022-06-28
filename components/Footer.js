import React from 'react';

const defaultFooterStyles = {
  // height: '50px',
  boxSizing: 'border-box',
  // background: '#34495e',
  overflow: 'hidden',
};
const closeBtnStyle = {
  float: 'left',
  color: '#fff',
  backgroundColor: '#DC143C',
  lineHeight: '30px',
  borderRadius: '3px',
  border: '2px solid #ff4742',
  fontSize: '13px',
  fontWeight: 'bold',
};
const submitBtnStyle = {
  float: 'right',
  // color: '#fff',
  // backgroundColor: '#DC143C',
  lineHeight: '30px',
  borderRadius: '3px',
  // border: '2px solid #ff4742',
  fontSize: '13px',
  fontWeight: 'bold',
  // bottom: '43px',
  // right: '12px',
  // position: 'absolute',
  // color: 'var(--white)',
  // borderColor: 'var(--blue700)',
  // backgroundColor: 'var(--blue700)',
};

const Footer = ({ handleSubmit, footerStyles, handleClose }) => (
  <div style={footerStyles}>
    <div style={{ padding: '10px' }}>
      <button onClick={handleSubmit} style={submitBtnStyle} type="button">
        Sent
      </button>
      {/* <button onClick={handleClose} style={closeBtnStyle} type='button'>Close</button> */}
    </div>
  </div>
);

Footer.defaultProps = {
  footerStyles: defaultFooterStyles,
};

export default Footer;
