import React from 'react';

function RegionList({ regions }) {
  // Создаем объект, где ключи - это названия регионов, а значения - это массивы объектов, относящихся к соответствующим регионам
  const regionsData = regions.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = [];
    }
    acc[cur.name].push(cur);
    return acc;
  }, {});

  return (
    <div>
      {/* Для каждого региона создаем заголовок и список */}
      {Object.entries(regionsData).map(([regionName, regionData]) => (
        <div key={regionName}>
          <h2>{regionName}</h2>
          <ul>
            {regionData.map(({ name, area, population }) => (
              <li key={name}>
                {name} - Area: {area}, Population: {population}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RegionList;
