var K = K || {};

K.spriteConfig = {

	SceneOne: [
		{ // Light blur background
			x: 0,
			y: 0,
			texture: '1px',
			tint: K.config.Colours.LIGHT_BLUE,
			w: 540,
  			h: 88
		},
		{ // black line
			x: 0,
			y: 88,
			texture: '1px',
			tint: K.config.Colours.BLACK,
			w: 540,
  			h: 2
		},
		{ // oven top
			x: 200,
			y: 23,
			texture: '1px',
			tint: K.config.Colours.PEACH,
			w: 170,
  			h: 3
		},
		{ // oven part 1
			x: 200,
			y: 26,
			texture: '1px',
			tint: K.config.Colours.DARK_RED,
			w: 170,
  			h: 3
		},
		{ // oven part 2
			x: 200,
			y: 29,
			texture: '1px',
			tint: K.config.Colours.DARK_RED,
			w: 115,
  			h: 20
		},
		{ // conveyor corner
			x: 100,
			y: 74,
			texture: 'conveyorCorner',
			w: 42,
  			h: 22
		},
		{ // conveyor
			x: 100,
			y: 88,
			texture: '1px',
			tint: K.config.Colours.DARK_GREY,
			w: 30,
  			h: 172
		},
		{ // upper conveyor 1
			x: 142,
			y: 74,
			texture: '1px',
			tint: K.config.Colours.DARK_GREY,
			w: 230,
  			h: 4
		},
		{ // upper conveyor 2
			x: 142,
			y: 82,
			texture: '1px',
			tint: K.config.Colours.DARK_GREY,
			w: 230,
  			h: 4
		},
		{ // lower conveyor 1
			x: 215,
			y: 55,
			texture: '1px',
			tint: K.config.Colours.DARK_GREY,
			w: 85,
  			h: 4
		},
		{ // lower conveyor 2
			x: 215,
			y: 63,
			texture: '1px',
			tint: K.config.Colours.DARK_GREY,
			w: 85,
  			h: 4
		}
	]

};