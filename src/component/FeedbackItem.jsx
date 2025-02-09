import { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from '../shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { feedbackDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => feedbackDelete(item.id)} />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="num-text">{item.text}</div>
    </Card>
  );
};
export default FeedbackItem;
