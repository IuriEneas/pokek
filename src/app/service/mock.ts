export const mockTypes = {
  "count": 21,
  "next": null,
  "previous": null,
  "results": [{"name": "normal", "url": "https://pokeapi.co/api/v2/type/1/"}, {
    "name": "fighting",
    "url": "https://pokeapi.co/api/v2/type/2/"
  }, {"name": "flying", "url": "https://pokeapi.co/api/v2/type/3/"}, {
    "name": "poison",
    "url": "https://pokeapi.co/api/v2/type/4/"
  }, {"name": "ground", "url": "https://pokeapi.co/api/v2/type/5/"}, {
    "name": "rock",
    "url": "https://pokeapi.co/api/v2/type/6/"
  }, {"name": "bug", "url": "https://pokeapi.co/api/v2/type/7/"}, {
    "name": "ghost",
    "url": "https://pokeapi.co/api/v2/type/8/"
  }, {"name": "steel", "url": "https://pokeapi.co/api/v2/type/9/"}, {
    "name": "fire",
    "url": "https://pokeapi.co/api/v2/type/10/"
  }, {"name": "water", "url": "https://pokeapi.co/api/v2/type/11/"}, {
    "name": "grass",
    "url": "https://pokeapi.co/api/v2/type/12/"
  }, {"name": "electric", "url": "https://pokeapi.co/api/v2/type/13/"}, {
    "name": "psychic",
    "url": "https://pokeapi.co/api/v2/type/14/"
  }, {"name": "ice", "url": "https://pokeapi.co/api/v2/type/15/"}, {
    "name": "dragon",
    "url": "https://pokeapi.co/api/v2/type/16/"
  }, {"name": "dark", "url": "https://pokeapi.co/api/v2/type/17/"}, {
    "name": "fairy",
    "url": "https://pokeapi.co/api/v2/type/18/"
  }, {"name": "stellar", "url": "https://pokeapi.co/api/v2/type/19/"}, {
    "name": "unknown",
    "url": "https://pokeapi.co/api/v2/type/10001/"
  }, {"name": "shadow", "url": "https://pokeapi.co/api/v2/type/10002/"}]
};

export const mockTypesDetail = [
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      ],
      "double_damage_to": [],
      "half_damage_from": [],
      "half_damage_to": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      ],
      "no_damage_from": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      ],
      "no_damage_to": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      ]
    },
    "id": 1,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "normal",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/1.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/1.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/1.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/1.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/1.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/1.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/1.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/1.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/1.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/1.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/1.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/1.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/1.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/1.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/1.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/1.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/1.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/1.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/1.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/1.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/1.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/1.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/1.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/1.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "double_damage_to": [
        {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_from": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      ]
    },
    "id": 2,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "fighting",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/2.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/2.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/2.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/2.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/2.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/2.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/2.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/2.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/2.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/2.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/2.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/2.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/2.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/2.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/2.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/2.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/2.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/2.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/2.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/2.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/2.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/2.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/2.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/2.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "double_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      ],
      "half_damage_to": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "no_damage_from": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      ],
      "no_damage_to": []
    },
    "id": 3,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "flying",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/3.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/3.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/3.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/3.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/3.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/3.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/3.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/3.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/3.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/3.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/3.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/3.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/3.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/3.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/3.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/3.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/3.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/3.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/3.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/3.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/3.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/3.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/3.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "double_damage_to": [
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "half_damage_to": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      ]
    },
    "id": 4,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "poison",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/4.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/4.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/4.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/4.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/4.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/4.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/4.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/4.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/4.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/4.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/4.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/4.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/4.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/4.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/4.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/4.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/4.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/4.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/4.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/4.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/4.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/4.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/4.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "double_damage_to": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "half_damage_from": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        }
      ],
      "half_damage_to": [
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "no_damage_from": [
        {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        }
      ],
      "no_damage_to": [
        {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      ]
    },
    "id": 8,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "ghost",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/8.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/8.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/8.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/8.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/8.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/8.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/8.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/8.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/8.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/8.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/8.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/8.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/8.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/8.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/8.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/8.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/8.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/8.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/8.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/8.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/8.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/8.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/8.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/8.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "double_damage_to": [
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      ],
      "half_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 7,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "bug",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/7.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/7.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/7.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/7.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/7.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/7.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/7.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/7.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/7.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/7.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/7.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/7.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/7.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/7.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/7.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/7.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/7.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/7.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/7.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/7.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/7.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/7.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/7.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/7.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      ],
      "double_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "half_damage_from": [
        {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "half_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 6,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "rock",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/6.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/6.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/6.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/6.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/6.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/6.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/6.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/6.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/6.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/6.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/6.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/6.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/6.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/6.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/6.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/6.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/6.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/6.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/6.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/6.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/6.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/6.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/6.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/6.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "double_damage_to": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "half_damage_from": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        }
      ],
      "half_damage_to": [
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      ],
      "no_damage_from": [
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "no_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        }
      ]
    },
    "id": 5,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "ground",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/5.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/5.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/5.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/5.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/5.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/5.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/5.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/5.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/5.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/5.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/5.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/5.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/5.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/5.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/5.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/5.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/5.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/5.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/5.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/5.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/5.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/5.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/5.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/5.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "double_damage_to": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "half_damage_from": [
        {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        },
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "half_damage_to": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "no_damage_from": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      ],
      "no_damage_to": []
    },
    "id": 9,
    "move_damage_class": {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "name": "steel",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/9.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/9.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/9.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/9.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/9.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/9.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/9.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/9.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/9.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/9.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/9.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/9.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/9.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/9.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/9.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/9.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/9.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/9.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/9.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/9.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/9.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/9.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/9.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/9.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      ],
      "double_damage_to": [
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "half_damage_from": [
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "half_damage_to": [
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 10,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "fire",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/10.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/10.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/10.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/10.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/10.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/10.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/10.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/10.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/10.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/10.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/10.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/10.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/10.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/10.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/10.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/10.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/10.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/10.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/10.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/10.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/10.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/10.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/10.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/10.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "double_damage_to": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "half_damage_from": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "half_damage_to": [
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 11,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "water",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/11.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/11.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/11.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/11.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/11.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/11.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/11.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/11.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/11.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/11.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/11.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/11.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/11.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/11.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/11.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/11.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/11.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/11.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/11.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/11.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/11.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/11.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/11.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/11.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "double_damage_to": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      ],
      "half_damage_from": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "half_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 12,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "grass",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/12.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/12.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/12.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/12.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/12.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/12.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/12.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/12.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/12.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/12.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/12.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/12.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/12.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/12.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/12.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/12.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/12.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/12.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/12.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/12.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/12.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/12.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/12.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "double_damage_to": [
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "half_damage_to": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": [
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ]
    },
    "id": 16,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "dragon",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/16.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/16.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/16.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/16.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/16.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/16.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/16.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/16.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/16.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/16.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/16.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/16.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/16.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/16.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/16.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/16.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/16.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/16.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/16.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/16.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/16.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/16.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/16.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/16.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "double_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "half_damage_to": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": [
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ]
    },
    "id": 14,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "psychic",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/14.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/14.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/14.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/14.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/14.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/14.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/14.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/14.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/14.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/14.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/14.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/14.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/14.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/14.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/14.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/14.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/14.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/14.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/14.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/14.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/14.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/14.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/14.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/14.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      ],
      "double_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        }
      ],
      "half_damage_from": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        }
      ],
      "half_damage_to": [
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "electric",
          "url": "https://pokeapi.co/api/v2/type/13/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": [
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        }
      ]
    },
    "id": 13,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "electric",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/13.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/13.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/13.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/13.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/13.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/13.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/13.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/13.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/13.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/13.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/13.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/13.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/13.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/13.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/13.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/13.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/13.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/13.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/13.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/13.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/13.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/13.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/13.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "double_damage_to": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "half_damage_from": [
        {
          "name": "ghost",
          "url": "https://pokeapi.co/api/v2/type/8/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        },
        {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      ],
      "no_damage_from": [
        {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/type/14/"
        }
      ],
      "no_damage_to": []
    },
    "id": 17,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "dark",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/17.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/17.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/17.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/17.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/17.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/17.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/17.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/17.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/17.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/17.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/17.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/17.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/17.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/17.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/17.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/17.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/17.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/17.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/17.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/17.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/17.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/17.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/17.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/17.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        }
      ],
      "double_damage_to": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "bug",
          "url": "https://pokeapi.co/api/v2/type/7/"
        },
        {
          "name": "dark",
          "url": "https://pokeapi.co/api/v2/type/17/"
        }
      ],
      "half_damage_to": [
        {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "no_damage_from": [
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "no_damage_to": []
    },
    "id": 18,
    "move_damage_class": null,
    "name": "fairy",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": null,
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": null,
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": null,
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": null,
          "symbol_icon": null
        },
        "xd": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": null,
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": null,
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/18.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/18.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": null,
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/18.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/18.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/18.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/18.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/18.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/18.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/18.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/18.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/18.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/18.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/18.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/18.png"
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [],
      "double_damage_to": [],
      "half_damage_from": [],
      "half_damage_to": [],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 19,
    "move_damage_class": null,
    "name": "stellar",
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": null,
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": null,
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": null,
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": null,
          "symbol_icon": null
        },
        "xd": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": null,
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": null,
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/19.png",
          "symbol_icon": null
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": null,
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": null,
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": null,
          "symbol_icon": null
        },
        "sun-moon": {
          "name_icon": null,
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": null,
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": null,
          "symbol_icon": null
        },
        "legends-arceus": {
          "name_icon": null,
          "symbol_icon": null
        },
        "sword-shield": {
          "name_icon": null,
          "symbol_icon": null
        }
      }
    }
  },
  {
    "damage_relations": {
      "double_damage_from": [
        {
          "name": "fighting",
          "url": "https://pokeapi.co/api/v2/type/2/"
        },
        {
          "name": "rock",
          "url": "https://pokeapi.co/api/v2/type/6/"
        },
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        }
      ],
      "double_damage_to": [
        {
          "name": "flying",
          "url": "https://pokeapi.co/api/v2/type/3/"
        },
        {
          "name": "ground",
          "url": "https://pokeapi.co/api/v2/type/5/"
        },
        {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        },
        {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/16/"
        }
      ],
      "half_damage_from": [
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "half_damage_to": [
        {
          "name": "steel",
          "url": "https://pokeapi.co/api/v2/type/9/"
        },
        {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
          "name": "water",
          "url": "https://pokeapi.co/api/v2/type/11/"
        },
        {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/15/"
        }
      ],
      "no_damage_from": [],
      "no_damage_to": []
    },
    "id": 15,
    "move_damage_class": {
      "name": "special",
      "url": "https://pokeapi.co/api/v2/move-damage-class/3/"
    },
    "name": "ice",
    "past_damage_relations": [
      {
        "damage_relations": {
          "double_damage_from": [
            {
              "name": "fighting",
              "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
              "name": "rock",
              "url": "https://pokeapi.co/api/v2/type/6/"
            },
            {
              "name": "fire",
              "url": "https://pokeapi.co/api/v2/type/10/"
            }
          ],
          "double_damage_to": [
            {
              "name": "flying",
              "url": "https://pokeapi.co/api/v2/type/3/"
            },
            {
              "name": "ground",
              "url": "https://pokeapi.co/api/v2/type/5/"
            },
            {
              "name": "grass",
              "url": "https://pokeapi.co/api/v2/type/12/"
            },
            {
              "name": "dragon",
              "url": "https://pokeapi.co/api/v2/type/16/"
            }
          ],
          "half_damage_from": [
            {
              "name": "ice",
              "url": "https://pokeapi.co/api/v2/type/15/"
            }
          ],
          "half_damage_to": [
            {
              "name": "water",
              "url": "https://pokeapi.co/api/v2/type/11/"
            },
            {
              "name": "ice",
              "url": "https://pokeapi.co/api/v2/type/15/"
            }
          ],
          "no_damage_from": [],
          "no_damage_to": []
        },
        "generation": {
          "name": "generation-i",
          "url": "https://pokeapi.co/api/v2/generation/1/"
        }
      }
    ],
    "sprites": {
      "generation-iii": {
        "colosseum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/15.png",
          "symbol_icon": null
        },
        "emerald": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/15.png",
          "symbol_icon": null
        },
        "firered-leafgreen": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/firered-leafgreen/15.png",
          "symbol_icon": null
        },
        "ruby-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/ruby-sapphire/15.png",
          "symbol_icon": null
        },
        "xd": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/15.png",
          "symbol_icon": null
        }
      },
      "generation-iv": {
        "diamond-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/diamond-pearl/15.png",
          "symbol_icon": null
        },
        "heartgold-soulsilver": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/15.png",
          "symbol_icon": null
        },
        "platinum": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/platinum/15.png",
          "symbol_icon": null
        }
      },
      "generation-ix": {
        "scarlet-violet": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/15.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/15.png"
        }
      },
      "generation-v": {
        "black-2-white-2": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/15.png",
          "symbol_icon": null
        },
        "black-white": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-white/15.png",
          "symbol_icon": null
        }
      },
      "generation-vi": {
        "omega-ruby-alpha-sapphire": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/15.png",
          "symbol_icon": null
        },
        "x-y": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/x-y/15.png",
          "symbol_icon": null
        }
      },
      "generation-vii": {
        "lets-go-pikachu-lets-go-eevee": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/15.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/small/15.png"
        },
        "sun-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/sun-moon/15.png",
          "symbol_icon": null
        },
        "ultra-sun-ultra-moon": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/ultra-sun-ultra-moon/15.png",
          "symbol_icon": null
        }
      },
      "generation-viii": {
        "brilliant-diamond-shining-pearl": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/15.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/brilliant-diamond-shining-pearl/small/15.png"
        },
        "legends-arceus": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/15.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/legends-arceus/small/15.png"
        },
        "sword-shield": {
          "name_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/15.png",
          "symbol_icon": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/small/15.png"
        }
      }
    }
  }
]
