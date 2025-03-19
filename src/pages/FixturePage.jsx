import { useEffect, useState } from 'react';
import { createFixture, getFixtures } from '../services/fixtureService';

const FixturePage = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const loadFixtures = async () => {
      const response = await getFixtures();
      setFixtures(response);
    };

    loadFixtures();
  }, []);

  return (
    <div>
      <h2>Fixtures</h2>
      {fixtures.map((match, index) => (
        <div key={index}>
          {match[0][0]} & {match[0][1]} vs {match[1][0]} & {match[1][1]}
        </div>
      ))}
    </div>
  );
};

export default FixturePage;
