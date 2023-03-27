import React from 'react';

function SortedList(props) {
  const { scores } = props;

  // Сортируем массив по убыванию score
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <div>
      <h2>ScoreList</h2>
      <ul>
        {sortedScores.map((score, index) => (
          <li key={index}>
            {score.name} - {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedList;