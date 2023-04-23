ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: { item: 'emendatusenigmatica:iron_ingot' },
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 10 },
            id: `${id_prefix}iron_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:osmium_dirty_dust', count: 1 },
            itemInput: { ingredient: { tag: 'mekanism:clumps/osmium' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 20 },
            id: `${id_prefix}osmium_dirty_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
