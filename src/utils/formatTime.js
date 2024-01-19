export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const formatedTime = `${hours}hr ${minutes}min`;
  return formatedTime;
};
