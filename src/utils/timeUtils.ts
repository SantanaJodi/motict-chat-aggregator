export const getMinuteSecond = (second?: number) => {
  const minute = Math.floor((second || 0) / 60);
  return `${minute === 0 ? "" : minute + " mins "} ${(second || 0) % 60} secs`;
};
