import { DetailedCardEnum } from '../../../enums';

export const getCardItemProps = (props, type) => {
  return type === DetailedCardEnum.CHARACTERS
    ? {
        height: props.height,
        mass: props.mass,
        eyeColor: props.eye_color,
        birthYear: props.birth_year,
        name: props.name
      }
    : {
        diameter: props.diameter,
        rotationPeriod: props.rotation_period,
        orbitalPeriod: props.orbital_period,
        gravity: props.gravity,
        population: props.population,
        climate: props.climate,
        terrain: props.terrain,
        surfaceWater: props.surface_water,
        name: props.name
      };
};
