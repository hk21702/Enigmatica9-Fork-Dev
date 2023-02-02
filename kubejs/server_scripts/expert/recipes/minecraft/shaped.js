ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:cauldron',
            pattern: ['A A', 'A A', 'AAA'],
            key: {
                A: '#forge:ingots/copper'
            },
            id: `minecraft:cauldron`
        },
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'BBB'],
            key: {
                A: 'minecraft:andesite',
                B: 'minecraft:polished_andesite'
            },
            id: `${id_prefix}furnace`
        },
        {
            output: 'minecraft:blast_furnace',
            pattern: ['AAA', 'ACA', 'BDB'],
            key: {
                A: 'minecraft:andesite',
                B: 'minecraft:smooth_stone',
                C: 'minecraft:furnace',
                D: 'minecraft:bricks'
            },
            id: `${id_prefix}blast_furnace`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
