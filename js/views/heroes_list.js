Diablo3.views.heroesList = function(heroes, callback, id)
{
    var list = document.createElement('ul');
    list.className = 'heroes_list';

    if (id !== undefined)
        list.setAttribute('id', id);

    for (var i = 0; i < heroes.length; ++i)
    {
        var entry = document.createElement('li');

        var name = document.createElement('a');
        name.setAttribute('href', '#');
        name.innerHTML = heroes[i].name;
        name.onclick = function() { return callback(this.innerHTML); };
        entry.appendChild(name);

        list.appendChild(entry);
    }

    return list;
}

