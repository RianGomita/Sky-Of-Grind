ServerEvents.recipes(event => {

    event.shaped('gtceu:large_dehydration_unit', [
            'ABA', 
            'CDC',
            'AEA'  
          ], {
            A: '#gtceu:circuits/iv', 
            B: 'gtceu:ev_electric_pump',  
            C: 'gtceu:rtm_alloy_coil_block',
			D: 'gtceu:clean_machine_casing',
			E: 'gtceu:ev_fluid_regulator'
          }
		  )
})