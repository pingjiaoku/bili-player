export const numberToTime = (num?: number) => {
  if (!num) return "00:00";
  const s = Math.floor(num % 60);
  const sStr = s.toString().padStart(2, "0");
  const minute = Math.floor(num / 60);
  if (minute === 0) return `00:${sStr}`;
  const m = Math.floor(minute % 60);
  const mStr = m.toString().padStart(2, "0");
  const hour = Math.floor(minute / 60);
  if (hour === 0) return `${mStr}:${sStr}`;
  return `${hour}:${mStr}:${sStr}`;
};