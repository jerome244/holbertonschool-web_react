// task_5/js/main.ts

// Nominal typing via branding using string literal tags

export interface MajorCredits {
  credits: number;
  readonly brand: 'major';
}

export interface MinorCredits {
  credits: number;
  readonly brand: 'minor';
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}

// (Optional helpers to construct branded values)
export const makeMajorCredits = (c: number): MajorCredits => ({ credits: c, brand: 'major' });
export const makeMinorCredits = (c: number): MinorCredits => ({ credits: c, brand: 'minor' });

// Quick sanity check (optional):
// const m1 = makeMajorCredits(3);
// const m2 = makeMajorCredits(4);
// console.log(sumMajorCredits(m1, m2)); // { credits: 7, brand: 'major' }
