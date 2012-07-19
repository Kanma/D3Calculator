/************************************* HERO CLASSES *************************************/

Diablo3.Classes = new Object();

Diablo3.Classes.BARBARIAN    = "barbarian";
Diablo3.Classes.DEMON_HUNTER = "demon-hunter";
Diablo3.Classes.MONK         = "monk";
Diablo3.Classes.WITCH_DOCTOR = "witch-doctor";
Diablo3.Classes.WIZARD       = "wizard";


/***************************************** HERO *****************************************/

// Constants
Diablo3.HERO_BASE_STAT = 7;     // All stats start at this value at (a theoretical) level 0

//----------------------------------------------------------

Diablo3.Hero = function()
{
    this.__classname__ = 'Hero';

    if (arguments.length == 1)
    {
        this.name  = arguments[0].name;
        this.class = arguments[0].class;
        this.level = arguments[0].level;
        this.items = arguments[0].items;
    }
    else
    {
        this.name  = null;
        this.class = null;
        this.level = 1;

        this.items             = new Object();
        this.items.head        = null;
        this.items.torso       = null;
        this.items.feet        = null;
        this.items.hands       = null;
        this.items.shoulders   = null;
        this.items.legs        = null;
        this.items.bracers     = null;
        this.items.mainHand    = null;
        this.items.offHand     = null;
        this.items.waist       = null;
        this.items.rightFinger = null;
        this.items.leftFinger  = null;
        this.items.neck        = null;
    }
}

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('_basePrimaryStat', function() {
    // Increases by 3 per character level
    return Diablo3.HERO_BASE_STAT + 3 * this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('_baseSecondaryStat', function() {
    // Increases by 1 per character level
    return Diablo3.HERO_BASE_STAT + this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('baseStrength', function() {
    return (this.class == Diablo3.Classes.BARBARIAN) ?
        this._basePrimaryStat : this._baseSecondaryStat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('baseDexterity', function() {
    return (this.class == Diablo3.Classes.DEMON_HUNTER) || (this.class == Diablo3.Classes.MONK) ?
        this._basePrimaryStat : this._baseSecondaryStat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('baseIntelligence', function() {
    return (this.class == Diablo3.Classes.WITCH_DOCTOR) || (this.class == Diablo3.Classes.WIZARD) ?
        this._basePrimaryStat : this._baseSecondaryStat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('baseVitality', function() {
    // Increases by 2 per character level
    return Diablo3.HERO_BASE_STAT + 2 * this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('_primaryStat', function() {
    if (this.class == Diablo3.Classes.BARBARIAN)
        return this.strength;
    // else if (this.class == Diablo3.Classes.DEMON_HUNTER) || (this.class == Diablo3.Classes.MONK)
    //     return this.dexterity;
    // else
    //     return this.intelligence;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('strength', function() {
    var strength = this.baseStrength;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
        {
            // strength += this.items[location].strength;
        }
    }

    return strength;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('dexterity', function() {
    var dexterity = this.baseDexterity;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
        {
            // dexterity += this.items[location].dexterity;
        }
    }

    return dexterity;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('intelligence', function() {
    var intelligence = this.baseIntelligence;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
        {
            // intelligence += this.items[location].intelligence;
        }
    }

    return intelligence;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('vitality', function() {
    var vitality = this.baseVitality;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
        {
            // vitality += this.items[location].vitality;
        }
    }

    return vitality;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('armor', function() {
    var armor = this.strength;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
        {
            // armor += this.items[location].armor;
        }
    }

    return armor;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life', function() {
    if (this.level < 35)
        return 36 + 4 * this.level + 10 * this.vitality;
    else
        return 36 + 4 * this.level + (this.level - 25) * this.vitality;
});
