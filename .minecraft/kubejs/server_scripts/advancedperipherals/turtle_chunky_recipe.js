// file: server_scripts/advancedperipherals/turtle_chunky_recipe.js

ServerEvents.recipes(event => {
    event.shapeless(
        {
            item: 'computercraft:turtle_advanced',
            nbt: { RightUpgrade: 'advancedperipherals:chunky_turtle' }
        },
        [
            'computercraft:turtle_advanced',
            'advancedperipherals:chunk_controller'
        ]
    );
	
    event.shapeless(
        {
            item: 'computercraft:turtle_normal',
            nbt: { RightUpgrade: 'advancedperipherals:chunky_turtle' }
        },
        [
            'computercraft:turtle_normal',
            'advancedperipherals:chunk_controller'
        ]
    );
	
});
