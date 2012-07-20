/************************************* HERO CLASSES *************************************/

Diablo3.Classes = new Object();

Diablo3.Classes.BARBARIAN    = "barbarian";
Diablo3.Classes.DEMON_HUNTER = "demon-hunter";
Diablo3.Classes.MONK         = "monk";
Diablo3.Classes.WITCH_DOCTOR = "witch-doctor";
Diablo3.Classes.WIZARD       = "wizard";


/***************************************** HERO *****************************************/

// Constants
Diablo3.HERO_BASE_STAT          = 7;    // All stats start at this value at (a theoretical) level 0
Diablo3.HERO_BASE_LIFE          = 36;
Diablo3.HERO_LIFE_PER_LEVEL     = 4;
Diablo3.HERO_BASE_CRIT_CHANCE   = 5;    // %
Diablo3.HERO_BASE_CRIT_BONUS    = 50;   // %

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

Diablo3.Hero.prototype.__defineGetter__('_base_primary_stat', function() {
    // Increases by 3 per character level
    return Diablo3.HERO_BASE_STAT + 3 * this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('_base_secondary_stat', function() {
    // Increases by 1 per character level
    return Diablo3.HERO_BASE_STAT + this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('base_strength', function() {
    return (this.class == Diablo3.Classes.BARBARIAN) ?
        this._base_primary_stat : this._base_secondary_stat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('base_dexterity', function() {
    return (this.class == Diablo3.Classes.DEMON_HUNTER) || (this.class == Diablo3.Classes.MONK) ?
        this._base_primary_stat : this._base_secondary_stat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('base_intelligence', function() {
    return (this.class == Diablo3.Classes.WITCH_DOCTOR) || (this.class == Diablo3.Classes.WIZARD) ?
        this._base_primary_stat : this._base_secondary_stat;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('base_vitality', function() {
    // Increases by 2 per character level
    return Diablo3.HERO_BASE_STAT + 2 * this.level;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('_primary_stat', function() {
    if (this.class == Diablo3.Classes.BARBARIAN)
        return this.strength;
    else if ((this.class == Diablo3.Classes.DEMON_HUNTER) || (this.class == Diablo3.Classes.MONK))
        return this.dexterity;
    else
        return this.intelligence;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('strength', function() {
    return this.base_strength + this._sumItemsAttribute('strength');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('dexterity', function() {
    return this.base_dexterity + this._sumItemsAttribute('dexterity');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('intelligence', function() {
    return this.base_intelligence + this._sumItemsAttribute('intelligence');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('vitality', function() {
    return this.base_vitality + this._sumItemsAttribute('vitality');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('armor', function() {
    return this.strength + this._sumItemsAttribute('armor');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('health', function() {
    if (this.level < 35)
        return (1.0 + this.life_bonus / 100) * (Diablo3.HERO_BASE_LIFE + Diablo3.HERO_LIFE_PER_LEVEL * this.level + 10 * this.vitality);
    else
        return (1.0 + this.life_bonus / 100) * (Diablo3.HERO_BASE_LIFE + Diablo3.HERO_LIFE_PER_LEVEL * this.level + (this.level - 25) * this.vitality);
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('dual_wielding', function() {
    return (this.items.mainHand !== null) && (this.items.offHand !== null) &&
           this.items.mainHand.isWeapon && this.items.offHand.isWeapon;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('damage_multiplier', function() {
    return this._sumItemsAttribute('damage_multiplier');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('damage_bonus', function() {
    return [this._sumItemsAttribute('damage_bonus_min'), this._sumItemsAttribute('damage_bonus_max')];
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('mean_damage_bonus', function() {
    var damage_bonus = this.damage_bonus;
    return (damage_bonus[0] + damage_bonus[1]) / 2;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('increased_attack_speed', function() {
    var bonus = 0;

    if (this.dual_wielding)
        bonus += 15;

    return bonus + this._sumItemsAttribute('increased_attack_speed');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('attack_speed', function() {
    var attack_speed = 0;

    if (this.dual_wielding)
    {
        var period1 = 1.0 / this.items.mainHand.attack_speed;
        var period2 = 1.0 / this.items.offHand.attack_speed;

        attack_speed = 2.0 / (period1 + period2);
    }
    else
    {
        attack_speed = this.items.mainHand.attack_speed;
    }

    return attack_speed * (1 + this.increased_attack_speed / 100);
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('critical_chance', function() {
    return Diablo3.HERO_BASE_CRIT_CHANCE + this._sumItemsAttribute('critical_chance');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('critical_damage', function() {
    return Diablo3.HERO_BASE_CRIT_BONUS + this._sumItemsAttribute('critical_damage');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('dps', function() {
    var weapon_damage = 0;
    var attack_speed = 1.0;
    var passive_skill_boosts = 0;   // TODO

    if (this.dual_wielding)
    {
        weapon_damage = (this.items.mainHand.meanDamage + this.items.offHand.meanDamage + 2 * this.mean_damage_bonus) /
                        (1.0 / this.items.mainHand.attack_speed + 1.0 / this.items.offHand.attack_speed);
    }
    else
    {
        weapon_damage = this.items.mainHand.meanDamage + this.mean_damage_bonus;
        attack_speed = this.items.mainHand.attack_speed;
    }

    return Diablo3.round(weapon_damage * attack_speed * (1 + this.increased_attack_speed / 100) * (1.0 + this.damage_multiplier / 100) *
                         (1.0 + this.critical_chance / 100 * this.critical_damage / 100) * (1.0 + this._primary_stat / 100) *
                         (1.0 + passive_skill_boosts / 100), 1);
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('spellDamageModifier', function() {
    var weapon_damage = 0;
    var passive_skill_boosts = 0;   // TODO

    if (this.dual_wielding)
        weapon_damage = this.items.mainHand.meanDamage + this.items.offHand.meanDamage + 2 * this.mean_damage_bonus;
    else
        weapon_damage = this.items.mainHand.meanDamage + this.mean_damage_bonus;

    return Diablo3.round(weapon_damage * (1.0 + this._primary_stat / 100), 1);
});


//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_all', function() {
    return this._sumItemsAttribute('resistance_all');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_physique', function() {
    return this._sumItemsAttribute('resistance_physique');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_cold', function() {
    return this._sumItemsAttribute('resistance_cold');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_fire', function() {
    return this._sumItemsAttribute('resistance_fire');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_lightning', function() {
    return this._sumItemsAttribute('resistance_lightning');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_poison', function() {
    return this._sumItemsAttribute('resistance_poison');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance_arcane', function() {
    return this._sumItemsAttribute('resistance_arcane');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('mean_resistance_elemental', function() {
    return (this.resistance_physique + this.resistance_cold + this.resistance_fire +
            this.resistance_lightning + this.resistance_poison + this.resistance_arcane) / 6;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('resistance', function() {
    return this.resistance_all + this.mean_resistance_elemental;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('physical_damage_reduction', function() {
    var result = new Array();

    for (var i = 0; i < 4; ++i)
        result[i] = Diablo3.round(this.armor / (50 * (this.level + i) + this.armor) * 100, 1);

    return result;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('elemental_damage_reduction', function() {
    var result = new Array();

    for (var i = 0; i < 4; ++i)
        result[i] = Diablo3.round(this.resistance / (5 * (this.level + i) + this.resistance) * 100, 1);

    return result;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('damage_reduction', function() {
    var result = new Array();

    var physical_damage_reduction = this.physical_damage_reduction;
    var elemental_damage_reduction = this.elemental_damage_reduction;

    for (var i = 0; i < 4; ++i)
        result[i] = Diablo3.round(1.0 - ((1.0 - physical_damage_reduction[i]) * (1.0 - elemental_damage_reduction[i])), 1);

    return result;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('effective_health', function() {
    var result = new Array();

    var damage_reduction = this.damage_reduction;

    for (var i = 0; i < 4; ++i)
        result[i] = Diablo3.round(this.health * damage_reduction[i], 0);

    return result;
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life_bonus', function() {
    return this._sumItemsAttribute('life_bonus');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life_per_second', function() {
    return this._sumItemsAttribute('life_per_second');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life_steal', function() {
    return this._sumItemsAttribute('life_steal');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life_per_kill', function() {
    return this._sumItemsAttribute('life_per_kill');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('life_per_hit', function() {
    return this._sumItemsAttribute('life_per_hit');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('magic_find', function() {
    return this._sumItemsAttribute('magic_find');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('gold_find', function() {
    return this._sumItemsAttribute('gold_find');
});

//----------------------------------------------------------

Diablo3.Hero.prototype.__defineGetter__('speed', function() {
    return this._sumItemsAttribute('speed');
});

//----------------------------------------------------------

Diablo3.Hero.prototype._sumItemsAttribute = function(name) {
    var sum = 0;

    for (var location in this.items)
    {
        if (this.items[location] !== null)
            sum += this.items[location][name];
    }

    return sum;
}
