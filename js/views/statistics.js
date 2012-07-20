Diablo3.views._appendStatisticsRow = function(table, label, value, additional_class)
{
    var row = document.createElement('tr');

    var cell = document.createElement('td');

    cell.className = 'label';
    if (additional_class !== undefined)
        cell.className += ' ' + additional_class;

    cell.innerHTML = label;
    row.appendChild(cell);

    cell = document.createElement('td');

    cell.className = 'value';
    if (additional_class !== undefined)
        cell.className += ' ' + additional_class;

    cell.innerHTML = value;
    row.appendChild(cell);

    table.appendChild(row);
}


Diablo3.views.baseStatistics = function(hero, id)
{
    var table = document.createElement('table');
    table.className = 'statistics';

    if (id !== undefined)
        table.setAttribute('id', id);

    Diablo3.views._appendStatisticsRow(table, 'Strength', hero.base_strength);
    Diablo3.views._appendStatisticsRow(table, 'Dexterity', hero.base_dexterity);
    Diablo3.views._appendStatisticsRow(table, 'Intelligence', hero.base_intelligence);
    Diablo3.views._appendStatisticsRow(table, 'Vitality', hero.base_vitality);

    return table;
}


Diablo3.views.statistics = function(hero, id)
{
    var table = document.createElement('table');
    table.className = 'statistics';

    if (id !== undefined)
        table.setAttribute('id', id);

    Diablo3.views._appendStatisticsRow(table, 'Strength', hero.strength);
    Diablo3.views._appendStatisticsRow(table, 'Dexterity', hero.dexterity);
    Diablo3.views._appendStatisticsRow(table, 'Intelligence', hero.intelligence);
    Diablo3.views._appendStatisticsRow(table, 'Vitality', hero.vitality);

    Diablo3.views._appendStatisticsRow(table, 'Armor', hero.armor, 'separator');
    Diablo3.views._appendStatisticsRow(table, 'Health', hero.health);
    Diablo3.views._appendStatisticsRow(table, 'DPS', hero.dps);
    Diablo3.views._appendStatisticsRow(table, 'Spell damage modifier', hero.spellDamageModifier);

    var values = hero.damage_bonus;
    Diablo3.views._appendStatisticsRow(table, 'Damage bonus', '' + values[0] + ' - ' + values[1], 'separator');
    Diablo3.views._appendStatisticsRow(table, 'Damage multiplier', '+' + hero.damage_multiplier + '%');
    Diablo3.views._appendStatisticsRow(table, 'Attack speed', hero.attack_speed);
    Diablo3.views._appendStatisticsRow(table, 'Increased attack speed', '+' + hero.increased_attack_speed + '%');
    Diablo3.views._appendStatisticsRow(table, 'Crit chance', '' + hero.critical_chance + '%');
    Diablo3.views._appendStatisticsRow(table, 'Crit damages', '+' + hero.critical_damage + '%');

    Diablo3.views._appendStatisticsRow(table, 'Resistance all', hero.resistance_all, 'separator');
    Diablo3.views._appendStatisticsRow(table, 'Resistance physique', hero.resistance_physique);
    Diablo3.views._appendStatisticsRow(table, 'Resistance cold', hero.resistance_cold);
    Diablo3.views._appendStatisticsRow(table, 'Resistance fire', hero.resistance_fire);
    Diablo3.views._appendStatisticsRow(table, 'Resistance lightning', hero.resistance_lightning);
    Diablo3.views._appendStatisticsRow(table, 'Resistance poison', hero.resistance_poison);
    Diablo3.views._appendStatisticsRow(table, 'Resistance arcane', hero.resistance_arcane);
    Diablo3.views._appendStatisticsRow(table, 'Resistance (mean)', hero.resistance);

    values = hero.physical_damage_reduction;
    Diablo3.views._appendStatisticsRow(table, 'Physical damage reduction', '' + values[0] + '% / ' + values[1] + '% / ' + values[2] + '% / ' + values[3] + '%');

    values = hero.elemental_damage_reduction;
    Diablo3.views._appendStatisticsRow(table, 'Elemental damage reduction', '' + values[0] + '% / ' + values[1] + '% / ' + values[2] + '% / ' + values[3] + '%');

    values = hero.damage_reduction;
    Diablo3.views._appendStatisticsRow(table, 'Damage reduction', '' + values[0] + '% / ' + values[1] + '% / ' + values[2] + '% / ' + values[3] + '%');

    values = hero.effective_health;
    Diablo3.views._appendStatisticsRow(table, 'Effective health', '' + values[0] + ' / ' + values[1] + ' / ' + values[2] + ' / ' + values[3]);

    Diablo3.views._appendStatisticsRow(table, 'Life bonus', '+' + hero.life_bonus + '%', 'separator');
    Diablo3.views._appendStatisticsRow(table, 'Life per second', hero.life_per_second);
    Diablo3.views._appendStatisticsRow(table, 'Life steal', '' + hero.life_steal + '%');
    Diablo3.views._appendStatisticsRow(table, 'Life per kill', hero.life_per_kill);
    Diablo3.views._appendStatisticsRow(table, 'Life per hit', hero.life_per_hit);

    Diablo3.views._appendStatisticsRow(table, 'Magic find', '' + hero.magic_find + '%', 'separator');
    Diablo3.views._appendStatisticsRow(table, 'Gold find', '' + hero.gold_find + '%');
    Diablo3.views._appendStatisticsRow(table, 'Speed', '+' + hero.speed + '%');

    return table;
}
