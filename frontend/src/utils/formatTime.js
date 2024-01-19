export const formatTime = (time) => {
  const totalMinutes = 124;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formatedTime = `${hours}hr ${minutes}min`;
  return formatedTime;
};
