import * as _ from 'lodash';

export const max = (a: number, b: number) => {
  return _.max([a, b]);
};

export interface User {
  name: string;
  age: number;
}
