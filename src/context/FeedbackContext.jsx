import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Feedback_Data } from '../constant/FeedBackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState(Feedback_Data);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };

  const feedbackDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedBack(feedback.filter((data) => data.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedBack(
      feedback.map((data) =>
        data.id === id
          ? {
              ...data,
              ...updItem,
            }
          : data
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        feedbackDelete,
        addNewFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
