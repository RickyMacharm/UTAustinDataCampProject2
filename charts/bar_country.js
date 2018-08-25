var trace1 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [100, 100, 100, 100, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    name: 'Accessing institutions score',
    type: 'bar',
    text: [100, 100, 100, 100, 91, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };
  
  var trace2 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [100,100, 100, 100, 60, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    name: 'Building credit score',
    type: 'bar',
    text: [100,100, 100, 100, 60, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };
  

  var trace3 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [100, 100, 100, 100, 75, 75, 100, 75, 75, 100, 100, 75, 75, 75, 75, 75, 75, 75, 100, 75, 100, 100, 100, 50, 100, 75, 100, 100, 100, 75, 75, 75],
    name: 'Getting a job score',
    type: 'bar',
    text: [100, 100, 100, 100, 75, 75, 100, 75, 75, 100, 100, 75, 75, 75, 75, 75, 75, 75, 100, 75, 100, 100, 100, 50, 100, 75, 100, 100, 100, 75, 75, 75],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };

  var trace4 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [80, 80, 100, 100, 100, 100, 80, 80, 80, 100, 80, 80, 80, 80, 80, 60, 100, 60, 100, 100, 80, 100, 80, 80, 100, 80, 60, 100, 80, 80, 100, 100],
    name: 'Going to court score',
    type: 'bar',
    text: [80, 80, 100, 100, 100, 100, 80, 80, 80, 100, 80, 80, 80, 80, 80, 60, 100, 60, 100, 100, 80, 100, 80, 80, 100, 80, 60, 100, 80, 80, 100, 100],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };


  var trace5 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [100,100, 50, 100, 25, 25, 75, 75, 25, 50, 75, 25, 50, 75, 50, 25, 25, 25, 25, 25, 75, 100, 0, 50, 25, 50, 25, 75, 25, 25, 100, 100],
    name: 'Providing incentives to work score',
    type: 'bar',
    text: [100,100, 50, 100, 25, 25, 75, 75, 25, 50, 75, 25, 50, 75, 50, 25, 25, 25, 25, 25, 75, 100, 0, 50, 25, 50, 25, 75, 25, 25, 100, 100],
    textposition: 'auto',
    hoverinfo: 'auto',
    opacity: 'auto'
  };

  var trace6 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [100,100, 93, 92, 75, 93, 91, 93, 97, 88, 85, 93, 87, 100, 85, 72, 100, 87, 71, 93, 93, 93, 100, 82, 100, 100, 93, 93, 100, 85, 99, 62],
    name: 'Using property score',
    type: 'bar',
    text: [100,100, 93, 92, 75, 93, 91, 93, 97, 88, 85, 93, 87, 100, 85, 72, 100, 87, 71, 93, 93, 93, 100, 82, 100, 100, 93, 93, 100, 85, 99, 62],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };

  var trace7 = {
    x: ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'GBR', 'USA'],
    y: [80, 60, 50, 70, 40, 80, 80, 70, 100, 60, 60, 80, 60, 100, 100, 100, 60, 20, 100, 60, 80, 80, 80, 80, 60, 80, 100, 100, 80, 60, 100, 80],
    name: 'Protecting women from violence score',
    type: 'bar',
    text: [80, 60, 50, 70, 40, 80, 80, 70, 100, 60, 60, 80, 60, 100, 100, 100, 60, 20, 100, 60, 80, 80, 80, 80, 60, 80, 100, 100, 80, 60, 100, 80],
    textposition: 'auto',
    hoverinfo: 'none',
    opacity: 'auto'
  };

  var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
  
  var layout = {barmode: 'stack', title: 'HIGH-INCOME ECONOMIES PERFORM BEST ACROSS INDICATORS',
    paper_bgcolor: 'rgba(245,246,249,1)',
    plot_bgcolor: 'rgba(245,246,249,1)'};
  
  Plotly.newPlot('plot', data, layout);