import { Vector, Color } from "./basic";
import { MultistateModelDetails } from "./components";
import { ObjectTemplate, ObjectType } from "./object-template";

/**
 * Template for generic objects
 */
abstract class GenericTemplate extends ObjectTemplate {
  Type = ObjectType.Generic;
}

/**
 * Template for container objects
 */
abstract class ContainerTemplate extends ObjectTemplate {
  Type = ObjectType.Container;
}

/**
 * Template for card holder objects
 */
abstract class CardHolderTemplate extends ObjectTemplate {
  Type = ObjectType.CardHolder;

  /**
   * Number of cards the the front texture has horizontally
   */
  CardsCenter?: Vector;

  /**
   * Number of cards the the front texture has horizontally
   *
   * @minimum 0.1
   */
  CardsWidth?: number = 20;

  /**
   * Maximum number of cards that can be stored in the holder
   *
   * @minimum 1
   * @TJS-type integer
   */
  MaxCards?: number = 10;

  /**
   * Maximum height of cards that the holder accepts
   *
   * @minimum 0.1
   */
  MaxCardHeight?: number = 10;
}

enum CardModel {
  Rounded = "Rounded",
  Square = "Square",
  Round = "Round",
  Hexagonal = "Hexagonal",
}

/**
 * Template for card objects
 */
abstract class CardTemplate extends ObjectTemplate {
  Type = ObjectType.Card;

  /**
   * Name of the front texture.
   */
  FrontTexture: string;

  /**
   * Name of the back texture.
   */
  BackTexture?: string;

  /**
   * Name of the hidden texture.
   */
  HiddenTexture?: string;

  /**
   * Atlas index of the back texture.
   * -1 when front index is used as back index.
   * -2 when when a whole separate file is the back texture.
   * -3 when the separate file has the same index as the front texture.
   *
   * @minimum -3
   * @TJS-type integer
   */
  BackIndex: number;

  /**
   * Atlas index of the hidden texture.
   * -1 when the standard grey blur is used to indicate hidden cards
   * -2 when when a whole separate file is the hidden texture.
   *
   * @minimum -2
   * @TJS-type integer
   */
  HiddenIndex: number;

  /**
   * Number of cards the the front texture has horizontally
   *
   * @minimum 1
   * @maximum 128
   * @TJS-type integer
   */
  NumHorizontal?: number = 1;

  /**
   * Number of cards the the front texture has vertically
   *
   * @minimum 1
   * @maximum 128
   * @TJS-type integer
   */
  NumVertical?: number = 1;

  /**
   * Width of card
   *
   * @minimum 0.1
   */
  Width?: number = 6;

  /**
   * Height of card
   *
   * @minimum 0.1
   */
  Height?: number = 9;

  /**
   * List of atlas indices in this stack
   *
   * @minItems 1
   * @items.type integer
   * @items.minimum 0
   */
  Indices: number[];

  /**
   * Card names for indices. Keys are strings representing integers, values are the names for the respective index.
   */
  CardNames: { [index: string]: string };

  /**
   * Are cards in this stack hidden from other players when in hand?
   */
  HiddenInHand?: boolean = true;

  /**
     * Thickness of cards in this stack
	 *
	 @minimum 0.01
    */
  Thickness?: number = 0.05;

  /**
   * Card shape. Can be one of the standard model names, transparent image
   * to generate the card shape from the image shape.
   */
  Model?: CardModel | string = CardModel.Rounded;

  /**
   * Can this card be used with card holders?
   */
  UsedWithCardHolders?: boolean;

  /**
   * Can this card be stacked?
   */
  CanStack?: boolean;

  /**
   * Is the primary color used to determine the side color of the stack?
   */
  UsePrimaryColorForSide?: boolean;

  /**
   * Accuracy of shape generation when using a transparent image to generate the card shape.
   * @minimum 1
   * @maximum 10
   * @TJS-type integer
   */
  ShapeAccuracy?: number = 10;

  /**
   * Only relevant for card shapes generated from transparent images.
   * If true, only the convex hull of the shape will be used as collision,
   * otherwise a convex decomposition is used (can lead to complex
   * colliders and slow collision detection!).
   */
  ConvexCollision?: boolean;

  /**
   * Is the texture override exposed as UI property?
   */
  FrontTextureOverrideExposed?: boolean;

  /**
   * Can cards within the stacked be flipped compared to the rest of the stack?
   */
  AllowFlippedInStack?: boolean;
}

/**
 * Information about a dice face
 */
interface FaceDirection extends Vector {
  Name: string;
}

/**
 * Template for dice objects
 */
abstract class DiceTemplate extends ObjectTemplate {
  Type = ObjectType.Dice;

  /**
   * Direction and name for each face, vectors cannot be zero.
   *
   * @minItems 1
   */
  Faces: FaceDirection[];
}

/**
 * Template for figure objects
 */
abstract class FigureTemplate extends ObjectTemplate {
  Type = ObjectType.Figure;

  /**
   * Name of the front texture. Will also be shown on the back if no back texture is defined.
   */
  FrontTexture: string;

  /**
   * Name of the back texture. Can be empty.
   */
  BackTexture?: string;

  /**
   * Name of the front extra map. Will also be shown on the back if no back texture is defined.
   */
  FrontExtraMap?: string;

  /**
   * Name of the back extra map.
   */
  BackExtraMap?: string;

  /**
   * Width of the figure component. Relative to the default scale that is calculated automatically.
   */
  FigureWidth?: number = 1;

  /**
   * Height of the figure component. Relative to the default scale that is calculated automatically.
   */
  FigureHeight?: number = 1;

  /**
   * Relative height of the base of the figure.
   */
  FigureZOffset?: number = 0;

  /**
   * Does this figure use the alpha channel of textures?
   */
  UseAlpha?: boolean;

  /**
   * Does this figure use collision for the cardboard part?
   */
  Collide?: boolean = true;

  /**
   * Accuracy of shape construction (when UseAlpha is true)
   *
   * @minimum 1
   * @maximum 10
   * @TJS-type integer
   */
  ShapeAccuracy?: number;
}

/**
 * Template for figure objects
 */
abstract class MultistateTemplate extends ObjectTemplate {
  Type = ObjectType.Multistate;

  /**
   * Details for the multistate models of the template.
   *
   * @minItems 1
   */
  MultistateModels: MultistateModelDetails[];
}
