export const getProgrammingExperience = (): number => {
  const started = new Date('2011-07-20').getFullYear();
  const today = new Date().getFullYear();

  return today - started;
};
