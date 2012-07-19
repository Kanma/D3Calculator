Diablo3.views.baseStatistics = function(hero, id)
{
    var table = document.createElement('table');
    table.className = 'statistics';

    if (id !== undefined)
        table.setAttribute('id', id);

    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Strength';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.baseStrength;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Dexterity';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.baseDexterity;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Intelligence';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.baseIntelligence;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Vitality';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.baseVitality;
    row.appendChild(cell);

    table.appendChild(row);

    return table;
}


Diablo3.views.statistics = function(hero, id)
{
    var table = document.createElement('table');
    table.className = 'statistics';

    if (id !== undefined)
        table.setAttribute('id', id);

    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Strength';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.strength;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Dexterity';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.dexterity;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Intelligence';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.intelligence;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Vitality';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.vitality;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label separator';
    cell.innerHTML = 'Armor';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value separator';
    cell.innerHTML = hero.armor;
    row.appendChild(cell);

    table.appendChild(row);


    row = document.createElement('tr');

    cell = document.createElement('td');
    cell.className = 'label';
    cell.innerHTML = 'Life';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.className = 'value';
    cell.innerHTML = hero.life;
    row.appendChild(cell);

    table.appendChild(row);

    return table;
}
