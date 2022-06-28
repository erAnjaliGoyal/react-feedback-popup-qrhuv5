import React from 'react';
import StarRatings from 'react-star-ratings';

const defaultBodyStyles = {
  padding: '10px',
  fontSize: '14px',
  display: 'block !important',
};

const submitBtnStyle = {
  float: 'right',
  color: '#fff',
  backgroundColor: '#DC143C',
  lineHeight: '30px',
  borderRadius: '3px',
  border: '2px solid #ff4742',
  fontSize: '13px',
  fontWeight: 'bold',
  // bottom: '43px',
  // right: '12px',
  // position: 'absolute',
  color: 'var(--white)',
  borderColor: 'var(--blue700)',
  backgroundColor: 'var(--blue700)',
};

const defaultMessageStyles = {
  // boxSizing: 'border-box',
  // // padding: '10px 10px 0 10px',
  // overflow: 'hidden',
  width: '300px',
  // fontFamily: 'arial',
  // border: 'none',
  padding: '3px',
  // width: "100%",
  fontSize: '14px',
  lineHeight: 1.43,
  resize: 'none',
  // padding: '0',
  overflow: 'hidden',
  border: 'none',
};
let ratingGiven = false;

function auto_grow(textbox) {
  console.log(textbox.target.rows, textbox.target.value);
  // var maxrows = 5;
  var txt = textbox.target.value;
  var cols = textbox.cols;
  console.log('dsadasdasds', txt?.split('\n'));
  var arraytxt = txt.split('\n');
  var rows = arraytxt.length;

  for (let i = 0; i < arraytxt.length; i++) {
    rows += parseInt(arraytxt[i].length / cols);
  }
  // if (rows > maxrows) textbox.rows = maxrows;
  // else
  textbox.target.rows = rows;
}

// const auto_grow = (element) => {
//   console.log(element.target.style.height, element.target?.style);
//   // element.target.style.height = '5px';
//   element.target.style.height = element.scrollHeight + 'px';
// };

const Body = ({
  bodyText,
  bodyStyles,
  nameInput,
  messageInput,
  emailInput,
  ratingInput,
  handleMessageInput,
  showNameInput,
  showMessageInput,
  showRatingInput,
  showEmailInput,
  numberOfStars,
  handleSubmit,
}) => (
  <div style={bodyStyles}>
    <div style={defaultMessageStyles}>
      <p>{bodyText}</p>
    </div>
    {/* {showNameInput &&
			<div>
				<input type='text' rows="5" value={nameInput} placeholder="Enter Your Name" required onChange={e => handleMessageInput('name', e.target.value)} style={defaultMessageStyles} />
			</div>
		}

		{showEmailInput &&
			<div>
				<input type='email' rows="5" value={emailInput} placeholder="Enter Your Email" required onChange={e => handleMessageInput('email', e.target.value)} style={defaultMessageStyles} />
			</div>
		} */}
    {showRatingInput && (
      <div style={defaultMessageStyles}>
        <StarRatings
          rating={ratingInput}
          starRatedColor="blue"
          changeRating={(newRating) => {
            ratingGiven = true;
            handleMessageInput('rating', newRating);
          }}
          numberOfStars={numberOfStars}
          name="rating"
          starDimension="35px"
          starSpacing="10px"
        />
      </div>
    )}
    {/* 😂 */}
    <FontAwesomeIcon icon="fa-duotone fa-face-laugh-squint" />
    {showMessageInput && ratingInput && ratingGiven && (
      <div>
        <textarea
          rows="5"
          // onInput={(event) => {
          //   auto_grow(event);
          // }}
          // minRows="4"
          // onkeyup="new do_resize(this);"
          value={messageInput}
          placeholder="Tell us more!"
          onChange={(e) => handleMessageInput('message', e.target.value)}
          style={defaultMessageStyles}
        />
      </div>
    )}
    {showMessageInput && ratingInput && ratingGiven && (
      <button onClick={handleSubmit} style={submitBtnStyle} type="button">
        Sent
      </button>
    )}
  </div>
);

Body.defaultProps = {
  bodyText:
    "Need help? Have feedback? I'm a human so please be nice and I'll fix it!",
  bodyStyles: defaultBodyStyles,
  showEmailInput: true,
  showRatingInput: true,
  showMessageInput: true,
  showNameInput: true,
  numberOfStars: 5,
};

export default Body;
