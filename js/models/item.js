Diablo3.Item = function()
{
    this.__classname__ = 'Item';

    this.name                   = null;

    this.armor                  = 0;
    this.damage_min             = 0;
    this.damage_max             = 0;
    this.attack_speed           = 0;

    // Primary stats
    this.strength               = 0;
    this.dexterity              = 0;
    this.intelligence           = 0;
    this.vitality               = 0;

    // Offensive
    this.additional_damage_min  = 0;
    this.additional_damage_max  = 0;
    this.critical_chance        = 0;   // %
    this.critical_damages       = 0;   // %
    this.increased_attack_speed = 0;   // %

    // Defensive
    this.armor_bonus            = 0;
    this.thorns                 = 0;

    // Resistances
    this.resistance_all         = 0;
    this.resistance_physique    = 0;
    this.resistance_cold        = 0;
    this.resistance_fire        = 0;
    this.resistance_lightning   = 0;
    this.resistance_poison      = 0;
    this.resistance_arcane      = 0;

    // Life
    this.life_bonus             = 0;   // %
    this.life_per_second        = 0;
    this.life_steal             = 0;   // %
    this.life_per_kill          = 0;
    this.life_per_hit           = 0;

    // Adventure
    this.magic_find             = 0;   // %
    this.gold_find              = 0;   // %
    this.speed                  = 0;   // %

    if (arguments.length == 1)
    {
        for (var key in arguments[0])
        {
            if (this[key] !== undefined)
                this[key] = arguments[0][key];
        }
    }
}
