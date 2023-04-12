export const Day = ({ date, time, temp, sunSet, sunRise }) => {
  return (
    <div>
      <nav>
        <h5>{date}</h5>
        <p>{time}</p>
      </nav>
      <div>
        <p>{temp}</p>
        <div>Icon</div>
        <ul>
          <li>
            <p>{sunSet}</p>
          </li>
          <li>
            <p>{sunRise}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
