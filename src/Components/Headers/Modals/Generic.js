import './Generic.css';

const Generic = (props) => {
  return (
    <div className='generic-container' onClick={props.displayModal}>
      <div className='generic-modal'>
        <p className='generic-text'>
          <span>Dear Visitor,</span> Thank you for exploring our website. We would like to inform
          you that the link you have come across is purely a placeholder and does not serve any
          functional purpose at the moment. They have been included solely for design and
          presentation purposes.
        </p>
      </div>
    </div>
  );
};

export default Generic;
