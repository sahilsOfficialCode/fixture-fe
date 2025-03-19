const FixtureComponent = ({ fixtures }) => {
    return (
      <div>
        {fixtures.map((match, index) => (
          <div key={index}>
            {match[0][0]} & {match[0][1]} vs {match[1][0]} & {match[1][1]}
          </div>
        ))}
      </div>
    );
  };
  
  export default FixtureComponent;
  