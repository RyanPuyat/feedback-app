import { createContext, useState, useEffect } from 'react';

// import { Feedback_Data } from '../constant/FeedBackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedBack] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await fetch('/api/feedback?_sort=id&_order=desc');
      const data = await res.json();
      setFeedBack(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Fetch error:', error);
      setIsLoading(false);
    }
  };

  const addNewFeedback = async (newFeedback) => {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    setFeedBack([data, ...feedback]);
  };

  const feedbackDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await fetch(`/api/feedback/${id}`, { method: 'DELETE' });

      setFeedBack(feedback.filter((data) => data.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/api/feedback/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updItem),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setFeedBack(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...data,
            }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
