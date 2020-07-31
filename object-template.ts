import { Vector, Color, SnapPoint, PhysicalSurface } from './basic';
import { ModelDetails, CollisionDetails } from './components';

/**
 * Available object types
*/
export enum ObjectType {
	Generic = "Generic",
	Container = "Container",
	CardHolder = "Card Holder",
	Card = "Card",
	Dice = "Dice",
	Figure = "Cardboard Figure",
	Multistate = "Multistate Object"
}

/**
 * Possible collision behaviors
*/
enum CollisionBehavior {
	Regular  = "Regular",
    Ground = "Ground",
    Penetrable = "Penetrable",
    Static = "Static"
}

/**
 * Base class for all templates
*/
export abstract class ObjectTemplate {
	/**
	 * Type of this template.
	*/
	Type: ObjectType;
	
	/**
	 * Unique ID of the template. A UUID with 32 hexadecimal characters, for example "123E4567E89B12D3A456426614174000"
	*/
	TemplateId: string;

	/**
	 * Name of the template, shown in object explorer.
	*/
	TemplateName: string;

	/**
	 * Default primary color.
	*/
	PrimaryColor?: Color;

	/**
	 * Default secondary color
	*/
	SecondaryColor?: Color;

	/**
	 * Default metallic value
     * @minimum 0
     * @maximum 1
	*/
	Metallic?: number = 0;

	/**
     * Default roughness value
	 * @minimum 0
	 * @maximum 1
	*/
	Roughness?: number = 1;

	/**
	 * Default script for all objects with this template
	*/
	ScriptName?: string;

	/**
	 * Snap points of the object.
	*/
	SnapPoints?: SnapPoint[];
    
    /**
    * The collision type objects created from this template get by default.
    */
    CollisionType: CollisionBehavior;
	
	/**
	 * Friction value
	 * @minimum 0
	 * @maximum 1
	 */
    Friction?: number = 0.7;

	/**
	* Restitution (bounciness) value
     * @minimum 0
	 * @maximum 1
	*/
	Restitution?: number = 0.3;

	/**
	* Density value
	 * @minimum 0
	 * @maximum 1
	*/
	Density?: number = 1.0;

	/**
	 * Surface type, used for impact sounds.
	*/
	SurfaceType: PhysicalSurface;

	/**
	* Details for the models of the template. Minimum length 1 for most object types.
	*/
	Models: ModelDetails[];

	/**
	* Details for the collision bodies of the template.
	*/
	Collisions?: CollisionDetails[];
    
    /**
    * Flip the object when interacted with? Otherwise, it will be returned
    * to its default rotation
    */
    Flippable?: boolean;

	/**
	* Path to Blueprint for this template. The Blueprint is only relevant for some default options in the editor.
	*/
	Blueprint?: string;

	/**
	* Direction from which the camera should view the object when zoomed. Default perspective and automatic rotation is used if zero.
	*/
	ZoomViewDirection?: Vector;
}