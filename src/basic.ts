/**
 * A Vector indicating a position, Euler rotation, or scale in 3D space
 */
export interface Vector {
    X: number;
	Y: number;
	Z: number;
}

/**
 * A color using a red, green, and blue component
 */
export interface Color {
	/**
	 * Red component
	 * @minimum 0
	 * @maximum 1
	*/
    R: number;
	
	/**
	 * Red component
	 * @minimum 0
	 * @maximum 1
	*/
	G: number;
	
	/**
	 * Red component
	 * @minimum 0
	 * @maximum 1
	*/
	B: number;
}

/**
 * A single snap point
*/
export class SnapPoint {
	/**
	 * Position of the snap point relative to the position of its actor.
	*/
	Position: Vector;
	
	/**
	 * Maximum range for snapping to this point.
	 * @minimum 0.1
	*/
	Range: number = 1;
	
	/**
     * Snap rotation relative to snapped-to object?
	*/
	SnapRotation: boolean;
	
	/**
	 * Rotation offset when using rotation snapping
	*/
	RotationOffset: number;
}

/**
 * Surface type. Affects impact sounds.
*/
export enum PhysicalSurface {
	Plastic = "Plastic",
	Wood = "Wood",
	Metal = "Metal",
	Cardboard = "Cardboard",
	Cloth = "Cloth",
	Glass = "Glass",
	Silent = "Silent"
}