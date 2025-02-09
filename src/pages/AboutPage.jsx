import Card from '../shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feddback for a product or service.</p>

        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
