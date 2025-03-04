import { useState, useEffect, useContext } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import StatsRating from '../shared/StatsRating';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false), setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const newText = e.target.value;

    if (newText === '') {
      setIsDisabled(true);
      setMessage(null);
    } else if (newText.trim().length <= 10) {
      setMessage('Message require atleast 10 characters');
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addNewFeedback(newFeedback);
      }
    }
    setText('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with Us?</h2>
        <StatsRating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" version="primary" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
