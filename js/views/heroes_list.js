Diablo3.views.heroesList = function(heroes, callback, id)
{
    var list = document.createElement('ul');
    list.className = 'heroes_list';

    if (id !== undefined)
        list.setAttribute('id', id);

    for (var i = 0; i < heroes.length; ++i)
    {
        var entry = document.createElement('li');
        entry.setAttribute('id', 'hero_' + heroes[i].name);
        entry.onclick = function() { return callback(this.id.substr(5)); };

        var image = document.createElement('img');
        image.setAttribute('src', 'images/' + Diablo3.Classes.image(heroes[i]));
        entry.appendChild(image);

        var name = document.createElement('span');
        name.innerHTML = heroes[i].name;
        entry.appendChild(name);

        var level = document.createElement('span');
        level.innerHTML = heroes[i].level;
        level.className = 'level';
        entry.appendChild(level);

        list.appendChild(entry);
    }

    return list;
}

