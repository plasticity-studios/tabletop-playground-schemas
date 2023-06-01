/**
 * A Vector indicating a position, Euler rotation, or scale in 3D space.
 * +Z is the "up" direction, +X is forward, and the rotation axis is left-handed.
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

export enum SnapPointShape {
  Sphere = 0,
  Cylinder = 1,
  Box = 2,
}

export enum SnapPointRotation {
  NoChange = 0,
  NoFlip = 1,
  RotateNoFlip = 2,
  RotateUpright = 3,
  RotateUpsideDown = 4,
}

export enum SnapPointFlipValidity {
  Always = 0,
  Upright = 1,
  UpsideDown = 2,
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
   * Maximum range in secondary axis for snapping to this point. Only used for box shape
   */
  SecondaryRange?: number = 1;

  /**
   * How to rotate snapped objects. false means SnapPointRotation.Keep, true is SnapPointRotation.RotateNoFlip.
   */
  SnapRotation: boolean | SnapPointRotation;

  /**
   * Rotation offset when using rotation snapping
   */
  RotationOffset: number;

  /**
   * Shape of the area where objects will snap to this snap point
   */
  Shape: SnapPointShape;

  /**
   * When is the snap point valid with respect to flip state of the object
   */
  FlipValidity: SnapPointFlipValidity;

  /**
   * Tags that can snap to this point. All objects can snap if empty
   */
  Tags?: string[];
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
  Silent = "Silent",
}

/**
 *
 */
export class LightDetails {
  /**
   * Relative location of the light
   */
  Offset: Vector;

  /**
   * Light color
   */
  Color: Color;

  /**
   * Light intensity
   */
  Intensity: number;

  /*
   * Direction of the light. If direction is zero or missing, the light is a point light instead of a spotlight
   */
  Direction?: Vector;

  /*
   * Inner angle for the spotlight. Determines the angle where the light has full intensity
   */
  InnerAngle?: number;

  /*
   * Direction of the light. If direction is zero, the light is a point light instead of a spotlight
   */
  OuterAngle?: number;
}
