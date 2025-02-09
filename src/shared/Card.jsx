const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  //   inline style
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //         color: reverse ? '#fff' : 'black',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
};

export default Card;
