import { Vector, Color, PhysicalSurface } from './basic';


export class ModelDetails {
	/**
	 * Position of the component relative to the object
	*/
	Offset: Vector;
	
	/**
	 * Rotation of the component relative to the object
	*/
	Rotation: Vector;
	
	/**
	 * Scale of the component relative to the object
	*/
	Scale: Vector;
	
	/**
	 * Source file name for geometry
	*/
	ModelName: string;
	
	/**
	 * Source file name of the texture name for this model.
	*/
	TextureName?: string;

	/**
	 * Source file name of the normal map name for this model.
	*/
	NormalMapName?: string;
	
	/**
	 * Source file name of the extra map name for this model.
	*/
	ExtraMapName?: string;

	/**
	 * Whether object level appearance overrides should be used on this component.
	 * If false, this component will ignore in-game appearance changes of the object.
	*/
	UseOverrides: boolean;
	
	/**
	 * Primary color for the component. Only used if UseOverrides is true.
	*/
	PrimaryColor?: Color;

	/**
	 * Secondary color for the component. Only used if UseOverrides is true.
	*/
	SecondaryColor?: Color;

	/**
	 * Metallic value for the component. Only used if UseOverrides is true.
	 * @minimum 0
	 * @maximum 1
	*/
	Metallic?: number = 0;

	/**
	 * Roughness value for the component. Only used if UseOverrides is true.
	 * @minimum 0
	 * @maximum 1
	*/
	Roughness: number = 1;
	
	/**
	* Whether the component is transparent
	*/
    IsTransparent?: boolean;
    
	/**
	 * Alpha value (opacity)
	 * @minimum 0
	 * @maximum 1
	*/
    Alpha?: number = 1;
    
	/*
	 * Custom physical surface for this model. Only valid for components of tables.
	*/
	SurfaceType?: PhysicalSurface;
	
	/**
     * Only used for the built-in tables.
    */
    UseCustomMaterial?: boolean;
}

export class MultistateModelDetails extends ModelDetails { 
    /**
     * Back texture name of this model when using a card model
    */
    BackTextureName?: string;

	/**
	 * Atlas index of the back texture.
	 * -1 when front index is used as back index. 
	 * -2 when when a whole separate file is the back texture. 
	 * -3 when the separate file has the same index as the front texture.
	 *
	 * @TJS-type integer
	*/
	BackIndex: number;
    
    /**
     * Number of horizontal items in the texture grid
	 *
	 * @TJS-type integer
    */
    NumHorizontal?: number = 1;
    
    /**
     * Number of vertical items in the texture grid
	 *
	 * @TJS-type integer
    */
    NumVertical?: number = 1;
    
    /**
     * List of atlas indices in for this component.
	 *
	 * @minItems 1
	 * @items.type integer
     * @items.minimum 0
    */
    Indices: number[]; 
}

/**
 * Type names of collision components
*/
enum CollisionDetailsType {
    Convex = "Convex",
    Sphere = "Sphere"
}

export abstract class CollisionDetails {
	/**
	 * Type of the collision component
	*/
	Type: CollisionDetailsType;
	
	/**
	 * Position of the component relative to the object
	*/
	Offset?: Vector;
}

class ModelCollisionDetails extends CollisionDetails {
	Type: CollisionDetailsType.Convex;
	
	/**
	 * Source file name for geometry
	*/
	ModelName: string;
	
	/**
	 * Rotation of the component relative to the object
	*/
	Rotation?: Vector;
	
	/**
	 * Scale of the component relative to the object
	*/
	Scale?: Vector;
}

class SphereCollisionDetails extends CollisionDetails {
	Type: CollisionDetailsType.Convex;
	
	/**
	 * Radius of the sphere relative to the object
	*/
	Radius?: number = 1;
}